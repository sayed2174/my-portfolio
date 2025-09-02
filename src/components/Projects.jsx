import { motion } from "framer-motion";

const projects = [
  {
    title: "Live Wallpaper & Image Wallpaper Android Apps",
    description: "Android apps for dynamic and static wallpapers.",
    tech: ["Android Studio", "Java"],
    link: "https://github.com/yourprofile/live-wallpaper-app",
  },
  {
    title: "YouTube Comments Extractor",
    description: "Tool to extract & analyze YouTube comments.",
    tech: ["Python", "YouTube API", "pandas"],
    link: "https://github.com/yourprofile/youtube-comments-extractor",
  },
  {
    title: "Age Calculator",
    description: "Web app to calculate age from DOB.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yourdomain.com/age-calculator",
  },
  {
    title: "Google Form Data Extractor",
    description: "Automates extracting Google Form responses.",
    tech: ["Python", "Automation"],
    link: "https://github.com/yourprofile/google-form-extractor",
  },
  {
    title: "Loan Approval & Churn Models",
    description: "ML models for loan approval & customer churn.",
    tech: ["Python", "scikit-learn", "pandas"],
    link: "https://github.com/yourprofile/loan-churn-models",
  },
];

export default function Projects() {
  const gradients = [
    "from-pink-400 via-pink-300 to-pink-200 dark:from-pink-800 dark:via-pink-700 dark:to-pink-600",
    "from-yellow-400 via-yellow-300 to-yellow-200 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-600",
    "from-green-400 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-600",
    "from-indigo-400 via-indigo-300 to-indigo-200 dark:from-indigo-800 dark:via-indigo-700 dark:to-indigo-600",
    "from-purple-400 via-purple-300 to-purple-200 dark:from-purple-800 dark:via-purple-700 dark:to-purple-600",
  ];

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              onClick={() => window.open(proj.link, "_blank")}
              className={`p-6 rounded-2xl shadow-lg cursor-pointer transform 
                          bg-gradient-to-br ${gradients[idx % gradients.length]} 
                          transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {proj.title}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/70 dark:bg-black/50 text-gray-900 dark:text-gray-200 
                               rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
