import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setIsAnimating(true);
    setDarkMode(!darkMode);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative w-16 h-8 rounded-full flex items-center transition-all duration-500
        bg-gradient-to-r from-blue-400 to-purple-500
        dark:from-gray-700 dark:to-gray-900
        shadow-lg hover:shadow-xl
        ${isAnimating ? 'scale-105' : ''}
      `}
      aria-label="Toggle theme"
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>
      
      {/* Thumb with smooth animation */}
      <div
        className={`
          absolute w-6 h-6 rounded-full bg-white dark:bg-yellow-300
          flex items-center justify-center
          transition-all duration-500 ease-in-out
          ${darkMode ? 'translate-x-9' : 'translate-x-1'}
          shadow-md
        `}
      >
        {/* Icons that fade in/out */}
        <div className={`absolute transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
          <FaMoon className="text-gray-700 text-xs" />
        </div>
        <div className={`absolute transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
          <FaSun className="text-amber-600 text-xs" />
        </div>
      </div>
      
      {/* Background stars in dark mode */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {[1, 2, 3, 4].map(star => (
          <div
            key={star}
            className={`
              absolute w-0.5 h-0.5 bg-white rounded-full
              transition-opacity duration-1000
              ${darkMode ? 'opacity-100' : 'opacity-0'}
            `}
            style={{
              top: `${15 + (star * 10) % 15}%`,
              left: `${10 + (star * 15) % 80}%`,
            }}
          ></div>
        ))}
      </div>
    </button>
  );
}