import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = ["profile", "skills", "education", "internships", "projects", "certificates"];

export default function Navbar() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <ul className="flex justify-center items-center space-x-6 p-4">
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`relative px-3 py-1 rounded-md transition-all duration-300 font-medium ${
                active === id
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-lg scale-105 text-shadow-md"
                  : "text-gray-800 dark:text-gray-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
              {active === id && (
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-white rounded-full animate-pulse"></span>
              )}
            </a>
          </li>
        ))}

        {/* Theme Toggle Button */}
        <li className="ml-6">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
