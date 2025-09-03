import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import experiences from "../assets/Data/internData";

export default function Experience() {
  const gradients = [
    "from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900",
    "from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-900",
    "from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-900",
    "from-yellow-100 to-yellow-200 dark:from-yellow-800 dark:to-yellow-900",
    "from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-900",
    "from-pink-100 to-pink-200 dark:from-pink-800 dark:to-pink-900",
  ];

  return (
    <motion.section
      id="experience"
      className="w-full p-8 bg-gray-100 dark:bg-gray-900" // full width
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Internships & Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={`p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 
                          transition transform text-center bg-gradient-to-br ${gradients[idx]} cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false }}
              onClick={() => window.open(exp.certificate, "_blank")}
            >
              <div className="space-y-3">
                <h3 className="flex justify-center items-center gap-2 text-lg font-semibold">
                  <FaBriefcase className="text-blue-600 dark:text-blue-300" />{" "}
                  {exp.role}
                </h3>
                <p className="flex justify-center items-center gap-2 text-gray-700 dark:text-gray-200">
                  <FaBuilding className="text-green-600 dark:text-green-300" />{" "}
                  {exp.company}
                </p>
                <p className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <FaCalendarAlt className="text-red-600 dark:text-red-300" />{" "}
                  {exp.duration}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
