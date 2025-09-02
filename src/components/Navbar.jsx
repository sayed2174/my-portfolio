import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons
import ThemeToggle from "./ThemeToggle";

const sections = ["profile", "skills", "education", "internships", "projects", "certificates"];

export default function Navbar() {
  const [active, setActive] = useState("profile");
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Title */}
          <div className="text-xl font-bold text-blue-600 dark:text-indigo-400">
            MyPortfolio
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative px-3 py-1 rounded-md transition-all duration-300 font-medium ${
                    active === id
                      ? ""
                      : "text-gray-800 dark:text-gray-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                  {active === id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 dark:bg-indigo-400 rounded-full animate-pulse"></span>
                  )}
                </a>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="https://drive.google.com/file/d/1s-fQY8xFEd_3snvYJ3MvFLUT9d8cN24u/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-3 py-1 rounded-md transition-all duration-300 font-medium text-gray-800 dark:text-gray-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"
              >
                Resume
              </a>
            </li>

            {/* Theme Toggle */}
            {/* <li><ThemeToggle /></li> */}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-lg transition-all duration-300 ${
                    active === id
                      ? "text-blue-600 dark:text-indigo-400"
                      : "text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400 hover:text-white"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="https://drive.google.com/file/d/1s-fQY8xFEd_3snvYJ3MvFLUT9d8cN24u/preview"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="relative px-3 py-1 rounded-md transition-all duration-300 font-medium text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"

              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// import { useState, useEffect } from "react";
// import ThemeToggle from "./ThemeToggle";

// const sections = ["profile", "skills", "education", "internships", "projects", "certificates"];

// export default function Navbar() {
//   const [active, setActive] = useState("profile");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.6 }
//     );

//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
//       <ul className="flex justify-center items-center space-x-6 p-4">
//         {/* Regular sections */}
//         {sections.map((id) => (
//           <li key={id}>
//             <a
//               href={`#${id}`}
//               className={`relative px-3 py-1 rounded-md transition-all duration-300 font-medium ${
//                 active === id
//                   ? ""
//                   : "text-gray-800 dark:text-gray-300 hover:text-white hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"
//               }`}
//             >
//               {id.charAt(0).toUpperCase() + id.slice(1)}
//               {active === id && (
//                 <span className="absolute -bottom-1 left-0 right-0 h-1 bg-white rounded-full animate-pulse"></span>
//               )}
//             </a>
//           </li>
//         ))}

//         {/* Resume button */}
//         <li>
//           <a
//             href="https://drive.google.com/file/d/1s-fQY8xFEd_3snvYJ3MvFLUT9d8cN24u/preview"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative px-3 py-1 rounded-md transition-all duration-300 font-medium text-gray-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-indigo-400"
//           >
//             Resume
//           </a>
//         </li>

//         {/* Theme Toggle (optional) */}
//         {/* <li className="ml-6">
//           <ThemeToggle />
//         </li> */}
//       </ul>
//     </nav>
//   );
// }
