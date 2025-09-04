import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import skills from "../assets/Data/skillsData";

export default function Skills() {
  const [skills, setSkills] = useState([]);
    useEffect(() => {
      // Replace with your actual Apps Script or API link
      const url = "https://sayed2174.github.io/portfolio-data/skill.json";

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data); // Debugging
          setSkills(data);
        })
        .catch((err) => console.error("Fetch error:", err));
    }, []);

  return (
    <motion.section
      id="skills"
      className="w-full p-8 bg-gray-100 dark:bg-gray-900" // full width background
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl shadow-md cursor-default text-center font-medium 
                         transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 
                         transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(${index * 30}, 70%, 60%), hsl(${index * 30 + 60}, 70%, 50%))`,
                color: "white"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: false }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
