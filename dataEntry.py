# DATA_DIR = 'src/assets/Data'
import subprocess
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
import json
import re
import os
import uuid

# Place this script in the same directory as your 'backend' folder,
# or update this path accordingly.
DATA_DIR = 'C:\\Users\\Sayed Mohammed\\Desktop\\my-portfolio\\src\\assets\\Data'

# Mapping of the display name to the file and the variable name inside the .js file
FILE_CONFIG = {
    "Projects": {"file": "projectData.js", "var": "projects"},
    "Internships": {"file": "internData.js", "var": "experiences"},
    "Education": {"file": "eduData.js", "var": "education"},
    "Certificates": {"file": "certData.js", "var": "certificates"},
    "Skills": {"file": "skillsData.js", "var": "skills"},
}

# Define field types for better form handling
FIELD_TYPES = {
    "Projects": {
        "title": "str",
        "description": "text",
        "tech": "list",
        "link": "str"
    },
    "Internships": {
        "role": "str",
        "company": "str",
        "duration": "str",
        "description": "text",
        "certificate": "str"
    },
    "Education": {
        "degree": "str",
        "school": "str",
        "year": "str",
        "score": "str",
        "link": "str",
        "semesters": "dict"
    },
    "Certificates": {
        "name": "str",
        "link": "str"
    },
    "Skills": "list"
}

class FileManager:
    """Handles reading from and writing to the JavaScript data files."""

    def get_file_path(self, category):
        """Constructs the full path to a data file."""
        try:
            filename = FILE_CONFIG[category]["file"]
            return os.path.join(DATA_DIR, filename)
        except KeyError:
            messagebox.showerror("Error", f"Configuration for '{category}' not found.")
            return None

    def load_data(self, category):
        """
        Loads data from a .js file by extracting the JSON array.
        Adds a temporary UUID to each object for session management.
        """
        file_path = self.get_file_path(category)
        if not file_path or not os.path.exists(file_path):
            messagebox.showerror("File Not Found", f"The file for {category} was not found at {file_path}")
            return []

        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Regex to find the array assignment within the JS file
            match = re.search(r'=\s*(\[.*?\]);', content, re.DOTALL)
            if not match:
                return []  # Return empty if no array is found

            json_str = match.group(1)
            
            # Convert JavaScript-style single quotes to double quotes for JSON parsing
            # This handles the common case of single-quoted strings in JS files
            json_str = re.sub(r"'([^']*)'", r'"\1"', json_str)
            
            # Also handle escaped single quotes within strings
            json_str = re.sub(r'\\"', '"', json_str)
            
            data = json.loads(json_str)

            # Add a temporary unique ID to each dictionary for easier handling
            if data and isinstance(data[0], dict):
                for item in data:
                    item['_uuid'] = str(uuid.uuid4())
            return data

        except (json.JSONDecodeError, IndexError) as e:
            messagebox.showerror("Read Error", f"Could not parse data for {category}.\nError: {e}\n\nTry fixing the source file format.")
            return []
        except Exception as e:
            messagebox.showerror("Error", f"An unexpected error occurred while reading {category}.\nError: {e}")
            return []

    def save_data(self, category, data):
        """
        Saves the data back to the .js file, preserving the original format.
        Removes the temporary UUID before saving.
        """
        file_path = self.get_file_path(category)
        if not file_path:
            return

        # Clean up temporary IDs before saving
        cleaned_data = []
        for item in data:
            if isinstance(item, dict):
                cleaned_item = item.copy()
                cleaned_item.pop('_uuid', None)
                cleaned_data.append(cleaned_item)
            else:
                cleaned_data.append(item)  # For simple lists like Skills

        var_name = FILE_CONFIG[category]["var"]
        json_str = json.dumps(cleaned_data, indent=2)

        # Recreate the JavaScript file content
        content = f"const {var_name} = {json_str};\nexport default {var_name};\n"

        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            messagebox.showinfo("Success", f"{category} data saved successfully!")
        except Exception as e:
            messagebox.showerror("Save Error", f"Could not save data for {category}.\nError: {e}")

class App(tk.Tk):
    """The main Tkinter application window."""

    def __init__(self):
        super().__init__()
        self.title("Portfolio Data Manager")
        self.geometry("1200x800")

        # App state
        self.file_manager = FileManager()
        self.current_category = tk.StringVar(value=list(FILE_CONFIG.keys())[0])
        self.current_data = []
        self.form_fields = {}
        self.selected_item_id = None
        self.tree = None
        self.listbox = None

        self.create_widgets()
        self.load_category_data()

    def create_widgets(self):
        """Creates and arranges all the UI widgets."""
        main_pane = ttk.PanedWindow(self, orient=tk.HORIZONTAL)
        main_pane.pack(fill=tk.BOTH, expand=True)

        # --- Left Sidebar ---
        sidebar = ttk.Frame(main_pane, width=200)
        sidebar.pack_propagate(False)
        main_pane.add(sidebar, weight=1)

        sidebar_label = ttk.Label(sidebar, text="Categories", font=("Helvetica", 16, "bold"))
        sidebar_label.pack(pady=10, padx=10, anchor='w')

        for category in FILE_CONFIG.keys():
            rb = ttk.Radiobutton(sidebar, text=category, variable=self.current_category,
                                 value=category, command=self.load_category_data)
            rb.pack(fill='x', padx=10, pady=2)
        
        # --- Right Content Area ---
        content_area = ttk.Frame(main_pane)
        main_pane.add(content_area, weight=4)

        # Top Frame for Table/List
        self.data_view_frame = ttk.Frame(content_area)
        self.data_view_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)

        # Bottom Frame for Form
        form_container = ttk.Labelframe(content_area, text="Add / Edit Entry")
        form_container.pack(fill='x', padx=10, pady=(0, 10))

        self.form_frame = ttk.Frame(form_container, padding=10)
        self.form_frame.pack(fill='x')

        self.button_frame = ttk.Frame(content_area, padding=10)
        self.button_frame.pack(fill='x', side=tk.BOTTOM)
        self.create_buttons()

    def create_buttons(self):
        """Creates the main action buttons."""
        ttk.Button(self.button_frame, text="Add New", command=self.add_new_item).pack(side=tk.LEFT, padx=5)
        ttk.Button(self.button_frame, text="Save Changes", command=self.save_changes).pack(side=tk.LEFT, padx=5)
        ttk.Button(self.button_frame, text="Delete Selected", command=self.delete_item).pack(side=tk.LEFT, padx=5)
        ttk.Button(self.button_frame, text="Clear Form", command=self.clear_form).pack(side=tk.LEFT, padx=5)
        ttk.Button(self.button_frame, text="Fix File Format", command=self.fix_file_format).pack(side=tk.LEFT, padx=5)

    def fix_file_format(self):
        """Attempts to fix the format of the current category's file."""
        category = self.current_category.get()
        file_path = self.file_manager.get_file_path(category)
        
        if not file_path or not os.path.exists(file_path):
            return
            
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Convert single quotes to double quotes for proper JSON format
            fixed_content = re.sub(r"'([^']*)'", r'"\1"', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
                
            messagebox.showinfo("Success", f"Fixed format for {category} file.")
            self.load_category_data()
            
        except Exception as e:
            messagebox.showerror("Error", f"Could not fix file format: {e}")

    def load_category_data(self):
        """Loads data for the selected category and rebuilds the UI."""
        category = self.current_category.get()
        self.current_data = self.file_manager.load_data(category)
        self.rebuild_ui_for_category(category)
        self.clear_form()

    def rebuild_ui_for_category(self, category):
        """Destroys and recreates the data view and form fields."""
        for widget in self.data_view_frame.winfo_children():
            widget.destroy()
        for widget in self.form_frame.winfo_children():
            widget.destroy()
        self.form_fields.clear()
        self.tree = None  # Reset widgets
        self.listbox = None

        if not self.current_data:
            ttk.Label(self.data_view_frame, text="No data found or file is empty.", font=("Helvetica", 14)).pack(pady=50)
            return

        if isinstance(self.current_data[0], dict):
            self.create_tree_view()
            self.create_form_from_template(category)
        else:  # It's a simple list (like Skills)
            self.create_list_view()
            self.create_form_for_list()

    def create_tree_view(self):
        """Creates a Treeview widget for dictionary data."""
        # Use only the first few columns for display to avoid overcrowding
        display_columns = list(self.current_data[0].keys())[:4]  # Show first 4 columns
        if '_uuid' in display_columns:
            display_columns.remove('_uuid')

        self.tree = ttk.Treeview(self.data_view_frame, columns=display_columns, show='headings')
        for col in display_columns:
            self.tree.heading(col, text=col.title())
            self.tree.column(col, width=120, anchor=tk.W)

        for item in self.current_data:
            values = [str(item.get(col, ''))[:50] + '...' if len(str(item.get(col, ''))) > 50 else str(item.get(col, '')) for col in display_columns]
            self.tree.insert('', tk.END, values=values, iid=item['_uuid'])

        self.tree.bind('<<TreeviewSelect>>', self.on_item_select)

        vsb = ttk.Scrollbar(self.data_view_frame, orient="vertical", command=self.tree.yview)
        hsb = ttk.Scrollbar(self.data_view_frame, orient="horizontal", command=self.tree.xview)
        self.tree.configure(yscrollcommand=vsb.set, xscrollcommand=hsb.set)

        self.tree.grid(row=0, column=0, sticky='nsew')
        vsb.grid(row=0, column=1, sticky='ns')
        hsb.grid(row=1, column=0, sticky='ew')
        self.data_view_frame.grid_rowconfigure(0, weight=1)
        self.data_view_frame.grid_columnconfigure(0, weight=1)

    def create_list_view(self):
        """Creates a Listbox for simple list data."""
        self.listbox = tk.Listbox(self.data_view_frame, font=("Helvetica", 12))
        for item in self.current_data:
            self.listbox.insert(tk.END, item)
        
        self.listbox.bind('<<ListboxSelect>>', self.on_item_select)

        scrollbar = ttk.Scrollbar(self.data_view_frame, orient="vertical", command=self.listbox.yview)
        self.listbox.config(yscrollcommand=scrollbar.set)
        
        self.listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

    def create_form_from_template(self, category):
        """Creates form fields based on the category template."""
        if category not in FIELD_TYPES or FIELD_TYPES[category] == "list":
            self.create_form_for_list()
            return
            
        field_template = FIELD_TYPES[category]
        row = 0
        
        for field_name, field_type in field_template.items():
            ttk.Label(self.form_frame, text=field_name.title()).grid(row=row, column=0, sticky='w', padx=5, pady=5)

            if field_type == "text":
                entry = tk.Text(self.form_frame, height=4, width=50)
            elif field_type == "list":
                entry = tk.Text(self.form_frame, height=3, width=50)
            elif field_type == "dict":
                entry = tk.Text(self.form_frame, height=4, width=50)
            else:  # string
                entry = ttk.Entry(self.form_frame, width=60)
            
            entry.grid(row=row, column=1, sticky='ew', padx=5, pady=5)
            self.form_fields[field_name] = entry
            row += 1
            
        self.form_frame.grid_columnconfigure(1, weight=1)

    def create_form_for_list(self):
        """Creates a simple form for a list of strings."""
        ttk.Label(self.form_frame, text="Value:").grid(row=0, column=0, sticky='w', padx=5, pady=5)
        entry = ttk.Entry(self.form_frame, width=60)
        entry.grid(row=0, column=1, sticky='ew', padx=5, pady=5)
        self.form_fields['value'] = entry
        self.form_frame.grid_columnconfigure(1, weight=1)

    def on_item_select(self, event=None):
        """Populates the form when an item is selected."""
        item = None
        # Determine which view is active and get the selected item
        if self.tree and self.tree.selection():
            self.selected_item_id = self.tree.selection()[0]
            item = next((d for d in self.current_data if d['_uuid'] == self.selected_item_id), None)
        elif self.listbox and self.listbox.curselection():
            selected_index = self.listbox.curselection()[0]
            self.selected_item_id = selected_index
            item = self.current_data[selected_index]

        if not item:
            return

        self.clear_form(keep_selection=True)  # Clear form but don't reset selection state
        
        category = self.current_category.get()
        
        if isinstance(item, dict):
            for key, widget in self.form_fields.items():
                value = item.get(key, '')
                if key in FIELD_TYPES.get(category, {}):
                    field_type = FIELD_TYPES[category][key]
                    
                    if field_type == "list" and isinstance(value, list):
                        value_str = ", ".join(map(str, value))
                    elif field_type == "dict" and isinstance(value, dict):
                        value_str = json.dumps(value, indent=2)
                    else:
                        value_str = str(value)
                else:
                    value_str = str(value)
                
                if isinstance(widget, tk.Text):
                    widget.delete('1.0', tk.END)
                    widget.insert('1.0', value_str)
                else:
                    widget.delete(0, tk.END)
                    widget.insert(0, value_str)
        else:
            self.form_fields['value'].delete(0, tk.END)
            self.form_fields['value'].insert(0, item)

    def clear_form(self, keep_selection=False):
        """Clears all form fields and optionally resets selection."""
        for widget in self.form_fields.values():
            if isinstance(widget, tk.Text):
                widget.delete('1.0', tk.END)
            else:
                widget.delete(0, tk.END)
        
        if keep_selection:
            return

        self.selected_item_id = None
        # Safely deselect in view
        if self.tree and self.tree.selection():
            self.tree.selection_remove(self.tree.selection())
        if self.listbox and self.listbox.curselection():
            self.listbox.selection_clear(0, tk.END)

    def get_data_from_form(self):
        """Extracts data from the form fields into a dictionary or string."""
        if not self.form_fields:
            return None
        
        category = self.current_category.get()
        
        if 'value' in self.form_fields and len(self.form_fields) == 1:
            return self.form_fields['value'].get().strip()
        
        new_data = {}
        for key, widget in self.form_fields.items():
            if isinstance(widget, tk.Text):
                value_str = widget.get('1.0', tk.END).strip()
                
                # Handle different field types based on category template
                if category in FIELD_TYPES and key in FIELD_TYPES[category]:
                    field_type = FIELD_TYPES[category][key]
                    
                    if field_type == "list":
                        if value_str:
                            new_data[key] = [v.strip() for v in value_str.split(',')]
                        else:
                            new_data[key] = []
                    elif field_type == "dict":
                        if value_str:
                            try:
                                new_data[key] = json.loads(value_str)
                            except json.JSONDecodeError:
                                messagebox.showerror("Error", f"Invalid JSON format for {key}")
                                return None
                        else:
                            new_data[key] = {}
                    else:
                        new_data[key] = value_str
                else:
                    new_data[key] = value_str
            else:
                new_data[key] = widget.get().strip()
                
        return new_data

    def add_new_item(self):
        """Adds data from the form as a new item."""
        new_data = self.get_data_from_form()
        if not new_data:
            messagebox.showwarning("Warning", "Form is empty or invalid.")
            return

        if isinstance(new_data, dict):
            new_data['_uuid'] = str(uuid.uuid4())
        
        self.current_data.append(new_data)
        self.file_manager.save_data(self.current_category.get(), self.current_data)
        self.load_category_data()

    def save_changes(self):
        """Saves changes to the currently selected item."""
        if self.selected_item_id is None:
            messagebox.showwarning("Warning", "No item selected. Use 'Add New' to create an item.")
            return
        
        updated_data = self.get_data_from_form()
        if not updated_data:
            return
            
        if self.tree:  # If in Treeview mode
            idx = next((i for i, d in enumerate(self.current_data) if d['_uuid'] == self.selected_item_id), -1)
            if idx != -1:
                if isinstance(updated_data, dict):
                    updated_data['_uuid'] = self.selected_item_id
                self.current_data[idx] = updated_data
        elif self.listbox:  # If in Listbox mode
            self.current_data[self.selected_item_id] = updated_data

        self.file_manager.save_data(self.current_category.get(), self.current_data)
        self.load_category_data()
        
    def delete_item(self):
        """Deletes the selected item."""
        if self.selected_item_id is None:
            messagebox.showwarning("Warning", "Please select an item to delete.")
            return

        if not messagebox.askyesno("Confirm Delete", "Are you sure you want to permanently delete this item?"):
            return

        if self.tree:  # Treeview mode
            self.current_data = [d for d in self.current_data if d['_uuid'] != self.selected_item_id]
        elif self.listbox:  # Listbox mode
            self.current_data.pop(self.selected_item_id)
        
        self.file_manager.save_data(self.current_category.get(), self.current_data)
        self.load_category_data()


if __name__ == "__main__":
    if not os.path.exists(DATA_DIR):
        messagebox.showerror("Directory Not Found", f"The data directory '{DATA_DIR}' was not found.\nPlease make sure this script is in the correct location relative to your data files.")
    else:
        app = App()
        app.mainloop()
subprocess.run(["npm", "run", "deploy"], cwd="C:\\Users\\Sayed Mohammed\\Desktop\\my-portfolio", shell=True)