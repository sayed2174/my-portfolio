import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Technology (CSE - AI & ML)",
    school: "G. Pulla Reddy Engineering College",
    year: "2021 - 2025",
    score: "CGPA: 8.59",
    link: "https://www.gprec.ac.in",
    semesters: {
      "Year 1": ["Sem 1", "Sem 2"],
      "Year 2": ["Sem 3", "Sem 4"],
      "Year 3": ["Sem 5", "Sem 6"],
      "Year 4": ["Sem 7", "Sem 8"],
    },
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "Government Polytechnic College",
    year: "2019 - 2022",
    score: "Percentage: 81%",
    link: "https://govtpolyproddatur.ac.in/",
    semesters: {
      "Year 1": ["Sem 1", "Sem 2"],
      "Year 2": ["Sem 3", "Sem 4"],
      "Year 3": ["Sem 5", "Sem 6"],
    },
  },
  {
    degree: "SSC (10th)",
    school: "Government High School",
    year: "2019",
    score: "GPA: 9.0",
    link: "https://bse.ap.gov.in",
    semesters: {
      "Final Year": ["10th"],
    },
  },
];

export default function Education() {
  const [expanded, setExpanded] = useState(true);

  const gradients = [
    "from-blue-400 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-600",
    "from-green-400 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-600",
    "from-purple-400 via-purple-300 to-purple-200 dark:from-purple-800 dark:via-purple-700 dark:to-purple-600",
  ];

  return (
    <motion.section
      id="education"
      className="w-full p-8 bg-gray-100 dark:bg-gray-900" // full width
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full p-8 md:p-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Education
          </h2>

          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg shadow transition
              ${
                expanded
                  ? "bg-red-500 hover:bg-red-600 text-black"
                  : "bg-green-500 hover:bg-green-600 text-black"
              }`}
          >
            {expanded ? "Collapse All" : "Expand All"}
            <FaChevronDown
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <a
              key={idx}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className={`p-6 rounded-2xl shadow-lg cursor-pointer transform text-center 
                            bg-gradient-to-br ${gradients[idx % gradients.length]} 
                            transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="space-y-2">
                  <h3 className="flex justify-center items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                    <FaGraduationCap className="text-blue-600 dark:text-blue-300" />
                    {edu.degree}
                  </h3>
                  <p className="flex justify-center items-center gap-2 text-gray-700 dark:text-gray-200">
                    <FaSchool className="text-green-600 dark:text-green-300" />
                    {edu.school}
                  </p>
                  <p className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="text-red-600 dark:text-red-300" />
                    {edu.year}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Expandable Semesters */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              className="mt-10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
                Semesters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 text-center">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl p-4 shadow-lg bg-gradient-to-br ${gradients[idx % gradients.length]} 
                                transition transform hover:scale-105 hover:shadow-2xl`}
                  >
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">{edu.degree}</p>
                    {Object.entries(edu.semesters).map(([year, sems], yIdx) => (
                      <div key={yIdx} className="mb-3">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{year}</p>
                        <div className="flex justify-center gap-2 mt-1 flex-wrap">
                          {sems.map((sem, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 text-xs bg-white/70 dark:bg-black/50 text-gray-900 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                            >
                              {sem}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
