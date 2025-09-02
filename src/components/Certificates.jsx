import { motion } from "framer-motion";

const certificates = [
  "Machine Learning Virtual Internship – AWS",
  "Data Engineering Virtual Internship – AWS",
  "Cyber Security Internship – Palo Alto",
  "Associate in IT Foundation Java – Infosys Springboard",
  "Git – Infosys Springboard",
  "Computer Networking – CISCO",
  "Drone Technology – IIIT DM Kurnool",
  "Python, Java – IIT Bombay Spoken Tutorial"
];

// Add corresponding Google Drive links here
const certificateLinks = [
  "https://drive.google.com/link1",
  "https://drive.google.com/link2",
  "https://drive.google.com/link3",
  "https://drive.google.com/link4",
  "https://drive.google.com/link5",
  "https://drive.google.com/link6",
  "https://drive.google.com/link7",
  "https://drive.google.com/link8"
];

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="max-w-6xl mx-auto p-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              onClick={() => window.open(certificateLinks[idx], "_blank")}
              className="p-4 rounded-xl shadow-md cursor-pointer transform hover:scale-110 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(${idx * 45}, 70%, 60%), hsl(${idx * 45 + 60}, 70%, 50%))`,
                color: "white"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: false }}
            >
              <p className="text-sm font-semibold">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
