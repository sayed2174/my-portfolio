import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "Java", "C",
  "NodeJS", "Django", "ExpressJS", "AngularJS",
  "SQL", "NoSQL", "Machine Learning (scikit-learn, pandas, numpy, matplotlib)",
  "Networking", "IoT", "Tableau", "VS Code", "Eclipse", "Android Studio"
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
