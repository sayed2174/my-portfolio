import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import pic from "../assets/my_pic.jpg";

export default function ProfileHeader() {
  const [showInfo, setShowInfo] = useState(false);

  // Trigger info paragraph after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowInfo(true), 1500); // show after 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="profile"
      className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.img
        src={pic}
        alt="Profile"
        className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg mb-8"
        whileHover={{ scale: 1.05 }}
      />

      {/* Name with typewriter */}
      <motion.h1
        className="text-4xl font-bold mb-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: showInfo ? 0 : 20, opacity: showInfo ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typewriter
          words={["Sayed Mohammed"]}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.h1>

      {/* Title with typewriter */}
      <motion.p
        className="text-gray-600 dark:text-gray-300 text-xl mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: showInfo ? 0 : 20, opacity: showInfo ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Typewriter
          words={[
            "Computer & AIML Engineer",
            "Full-Stack Developer",
            "AI Enthusiast",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.p>

      {/* Contact Info */}
      <motion.div
        className="space-y-2 text-gray-700 dark:text-gray-300 text-base mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: showInfo ? 0 : 20, opacity: showInfo ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="flex items-center justify-center gap-2">
          <FaPhone /> +91 9912352174
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope /> mohammedcm046@gmail.com
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-4 text-3xl text-blue-600 dark:text-blue-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: showInfo ? 0 : 20, opacity: showInfo ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a
          href="https://www.linkedin.com/in/sayed-mohammed-75159a256"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sayed2174"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Info Paragraph */}
      {showInfo && (
        <motion.p
          className="mt-8 w-full max-w-4xl px-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            words={[
              `Motivated and detail-oriented Computer Science and AIML student with strong foundations in full stack web development, machine learning, and cybersecurity. Completed multiple virtual internships from industry leaders like AWS, Palo Alto Networks, and Deloitte. Skilled in solving real-world problems through technical and analytical thinking. A fast learner and effective team player with hands-on experience in personal projects and volunteering activities.`
            ]}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={1500}
          />
        </motion.p>
      )}
    </motion.section>
  );
}
