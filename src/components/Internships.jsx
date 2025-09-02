import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    "role": "Web Development Intern",
    "company": "TECH OCTANET SERVICES PVT LTD.",
    "duration": "1st June 2024 - 1st July 2024",
    "description": "Demonstrated exceptional dedication, enthusiasm, and a strong willingness to learn, actively engaging in various projects and tasks while exhibiting remarkable skills and a high level of professionalism.",
    "certificate": "https://drive.google.com/file/d/1kUqplqWyTSiG0ChUutqOUn4PZofVB1gq/view?usp=drive_link"
  },
  {
    "role": "Software Developer Intern",
    "company": "MARGEY LABS PVT LIMITED",
    "duration": "Jan 02 - 2025 to Apr 02 - 2025",
    "description": "Worked on the front end using React and enhanced the UI components of the Byteslash website.",
    "certificate": "https://drive.google.com/file/d/1scxb_inYjyeMCn_asJeIDmfKSI-APVAu/view?usp=drive_link"
  },
  {
    "role": "Backend Development Intern",
    "company": "CODTECH IT SOLUTIONS",
    "duration": "1st JUNE 2024 to 13th JULY 2024",
    "description": "Actively participated in the Backend Development Internship Program with unwavering dedication.",
    "certificate": "https://drive.google.com/file/d/1TNUtM1K-2XVAIve93iip2vBLF6hQSs6j/view?usp=drive_link"
  },
  {
    "role": "AI-ML Development Intern",
    "company": "Next24tech Technology & Services",
    "duration": "July 20, 2024 to September 20, 2024",
    "description": "Completed a 2-month internship program in AI-ML Development, demonstrating significant efforts and achievements.",
    "certificate": "https://drive.google.com/file/d/1FHFj8e_4nOBWVzr1cyD7pjVej2uuQeI-/view?usp=drive_link"
  },
  {
    "role": "Data Engineering Virtual Intern",
    "company": "EduSkills (supported by AWS academy and AICTE)",
    "duration": "April - June 2024 (10 weeks)",
    "description": "Successfully completed a 10-week virtual internship in Data Engineering.",
    "certificate": "https://drive.google.com/file/d/1oMIjyhta_ey4qOhgWXBXdKvQJkoIcg1K/view?usp=drive_link"

  },
  {
    "role": "AI-ML Virtual Intern",
    "company": "EduSkills (supported by AWS academy and AICTE)",
    "duration": "January - March 2024 (10 weeks)",
    "description": "Successfully completed a 10-week virtual internship in AI-ML.",
    "certificate": "https://drive.google.com/file/d/1shbgNHyILJOdM8-H8TDS9XUNxB0DAoeY/view?usp=drive_link"

  }
];

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
