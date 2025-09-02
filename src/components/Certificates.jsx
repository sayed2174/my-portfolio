import { motion } from "framer-motion";

const certificates = [
  "Associate in IT Foundation Java – Infosys Springboard",
  "Git – Infosys Springboard",
  "Drone Technology – IIIT DM Kurnool",
  "Python, Java – IIT Bombay Spoken Tutorial",
  "Business English – Infosys Springboard",
  "CCNA: Enterprise Networking, Security, and Automation – Cisco Networking Academy",
  "CCNA: Introduction to Networks – Cisco Networking Academy",
  "CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy",
  "IT Essentials: PC Hardware and Software – Cisco Networking Academy",
  "Cloud Computing – Infosys Springboard",
  "Data Structures and Algorithms – Infosys Springboard",
  "Database Management System – Infosys Springboard",
  "Software Engineering and Agile – Infosys Springboard",
  "Apache Maven – Infosys Springboard",
  "NoSQL Databases – Infosys Springboard",
  "Artificial Intelligence with Keras – Infosys Springboard",
  "Essentials of Cloud Computing – Infosys Springboard",
  "Advanced Grammar – Infosys Springboard",
  "Communicating to Succeed – Infosys Springboard",
  "Creative Thinking – Infosys Springboard",
  "Interpersonal Skills – Infosys Springboard",
  "Alteryx Designer Core – Alteryx",
  "CLA Programming Essentials in C – Cisco Networking Academy",
  "JavaScript Essentials – Cisco Networking Academy",
  "Data Analytics Simulation – Deloitte",
  "Cloud Infrastructure Workshop – Brainovision Solutions",
  "HTML – IIT Bombay Spoken Tutorial",
  "DSA Workshop – Coding Ninjas",
  "Volunteer Appreciation – G Pulla Reddy Engineering College",
  "Tech Event Participation – G Pulla Reddy Engineering College"
];

const certificateLinks = [
  "https://drive.google.com/file/d/1GgDrToJK55AFSlQDwa_UiHoI7DfjVszR/view?usp=drive_link",
  "https://drive.google.com/file/d/1az1e9mmO2lYJNZwEpk3H3XR7Af2qTds2/view?usp=drive_link",
  "https://drive.google.com/file/d/13o-8k__G5wylWLKA9koUjV3odMrq1Te4/view?usp=drive_link",
  "https://drive.google.com/file/d/1vRn0jHSYmGYZyVsdz2TiqqbvKJ6IqcMO/view?usp=drive_link",
  "https://drive.google.com/file/d/1kTsITsTB8Ie8CLlueT2rDov4nfk61b2s/view?usp=drive_link",
  "https://drive.google.com/file/d/1BeEx7scyw2ESM-15Z4NFFuahT7iqIlGo/view?usp=drive_link",
  "https://drive.google.com/file/d/1_ITQGNry815UZaVGZNada39WXvLwEB2i/view?usp=drive_link",
  "https://drive.google.com/file/d/1zd6wyoWvjSH_c9_bONgvsj2fbAnA8qVc/view?usp=drive_link",
  "https://drive.google.com/file/d/12a74WgNxW0gTejja6JgDRPwNCat28VzE/view?usp=drive_link",
  "https://drive.google.com/file/d/1g364k934tZHlzLeih53B7lTkJPuvngxk/view?usp=drive_link",
  "https://drive.google.com/file/d/14CE6aE7NCOqE93c0yneiaEHvGpDvL0y4/view?usp=drive_link",
  "https://drive.google.com/file/d/1kyvKa-XuYxiPHf-3Ie_aD5mXuhFEi1yq/view?usp=drive_link",
  "https://drive.google.com/file/d/12OOXIoTPcpsYFwB82W6hLTUbPIasOBBe/view?usp=drive_link",
  "https://drive.google.com/file/d/1b-Fyd5KhrdaerWAHpsEg_W4ODDcU5RE1/view?usp=drive_link",
  "https://drive.google.com/file/d/1J-wradp_cVEP7b1uGqPFwBAvs5x4ydiT/view?usp=drive_link",
  "https://drive.google.com/file/d/1fi8l0lvY33dn7Wetv_b7ILDbUMEOrlYn/view?usp=drive_link",
  "https://drive.google.com/file/d/1MVQlqcG26_DHD7ElOrp_PlM2kbgdLbSV/view?usp=drive_link",
  "https://drive.google.com/file/d/1GXof92X_Q-NGqxGQnEiEAdBABF21vQPa/view?usp=drive_link",
  "https://drive.google.com/file/d/1yEn75lnlvuOPNausxrO9z0QR2SogiGGc/view?usp=drive_link",
  "https://drive.google.com/file/d/14wCmspdolY0PlFNTs67i4LahOyresALD/view?usp=drive_link",
  "https://drive.google.com/file/d/18WzIIFSkdHtVN5HX4Lu8bA0roaWKhMwS/view?usp=drive_link",
  "https://drive.google.com/file/d/1VUVgQ0GK5XEbalOafcV48Ux5GCn1WKaG/view?usp=drive_link",
  "https://drive.google.com/file/d/1cg2CsEbmFsnS_7W1koygdW5Cvki_u-lm/view?usp=drive_link",
  "https://drive.google.com/file/d/1R6enSrP78GAyMRBbmgNys--p-KqhGzBG/view?usp=drive_link",
  "https://drive.google.com/file/d/1MJ36X0lh9Sj7-dVKWYDyxkJzwl8wZnx8/view?usp=drive_link",
  "https://drive.google.com/file/d/1PeC-2T_Hln8KufkzwBE3tfGKKWaMXXup/view?usp=drive_link",
  "https://drive.google.com/file/d/1ZONti3hrsR87fYEV223XtOFAs0sPQtj1/view?usp=drive_link",
  "https://drive.google.com/file/d/1u99EHvKGeBrvyOuBenYjZoFfAROIL_YK/view?usp=drive_link",
  "https://drive.google.com/file/d/1_amKNE2g8u98q4xpxSCBRRfRv2bfUGb4/view?usp=drive_link",
  "https://drive.google.com/file/d/15FWipx_w80FyIFLmQqMhxG_lY6slIKM2/view?usp=drive_link",
];

export default function Certificates() {
  return (
    <motion.section
      id="certificates"
      className="w-full p-4 bg-gray-100 dark:bg-gray-900" // Reduced padding on mobile
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full p-4 md:p-8 lg:p-12"> {/* Reduced padding on mobile */}
        <h2 className="text-2xl font-bold mb-6 text-center">Certificates</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Changed to 2 columns on mobile */}
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              onClick={() => window.open(certificateLinks[idx], "_blank")}
              className="p-3 rounded-xl shadow-md cursor-pointer transform hover:scale-105 transition-all duration-300 text-center" // Reduced padding on mobile
              style={{
                background: `linear-gradient(135deg, hsl(${idx * 45}, 70%, 60%), hsl(${idx * 45 + 60}, 70%, 50%))`,
                color: "white",
                minHeight: "100px", // Added minimum height for better appearance
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: false }}
            >
              <p className="text-xs sm:text-sm font-semibold">{cert}</p> {/* Smaller text on mobile */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
// import { motion } from "framer-motion";

// const certificates = [
//   "Associate in IT Foundation Java – Infosys Springboard",
//   "Git – Infosys Springboard",
//   "Drone Technology – IIIT DM Kurnool",
//   "Python, Java – IIT Bombay Spoken Tutorial",
//   "Business English – Infosys Springboard",
//   "CCNA: Enterprise Networking, Security, and Automation – Cisco Networking Academy",
//   "CCNA: Introduction to Networks – Cisco Networking Academy",
//   "CCNA: Switching, Routing, and Wireless Essentials – Cisco Networking Academy",
//   "IT Essentials: PC Hardware and Software – Cisco Networking Academy",
//   "Cloud Computing – Infosys Springboard",
//   "Data Structures and Algorithms – Infosys Springboard",
//   "Database Management System – Infosys Springboard",
//   "Software Engineering and Agile – Infosys Springboard",
//   "Apache Maven – Infosys Springboard",
//   "NoSQL Databases – Infosys Springboard",
//   "Artificial Intelligence with Keras – Infosys Springboard",
//   "Essentials of Cloud Computing – Infosys Springboard",
//   "Advanced Grammar – Infosys Springboard",
//   "Communicating to Succeed – Infosys Springboard",
//   "Creative Thinking – Infosys Springboard",
//   "Interpersonal Skills – Infosys Springboard",
//   "Alteryx Designer Core – Alteryx",
//   "CLA Programming Essentials in C – Cisco Networking Academy",
//   "JavaScript Essentials – Cisco Networking Academy",
//   "Data Analytics Simulation – Deloitte",
//   "Cloud Infrastructure Workshop – Brainovision Solutions",
//   "HTML – IIT Bombay Spoken Tutorial",
//   "DSA Workshop – Coding Ninjas",
//   "Volunteer Appreciation – G Pulla Reddy Engineering College",
//   "Tech Event Participation – G Pulla Reddy Engineering College"
// ];

// const certificateLinks = [
//   "https://drive.google.com/file/d/1GgDrToJK55AFSlQDwa_UiHoI7DfjVszR/view?usp=drive_link",
//   "https://drive.google.com/file/d/1az1e9mmO2lYJNZwEpk3H3XR7Af2qTds2/view?usp=drive_link",
//   "https://drive.google.com/file/d/13o-8k__G5wylWLKA9koUjV3odMrq1Te4/view?usp=drive_link",
//   "https://drive.google.com/file/d/1vRn0jHSYmGYZyVsdz2TiqqbvKJ6IqcMO/view?usp=drive_link",
//   "https://drive.google.com/file/d/1kTsITsTB8Ie8CLlueT2rDov4nfk61b2s/view?usp=drive_link",
//   "https://drive.google.com/file/d/1BeEx7scyw2ESM-15Z4NFFuahT7iqIlGo/view?usp=drive_link",
//   "https://drive.google.com/file/d/1_ITQGNry815UZaVGZNada39WXvLwEB2i/view?usp=drive_link",
//   "https://drive.google.com/file/d/1zd6wyoWvjSH_c9_bONgvsj2fbAnA8qVc/view?usp=drive_link",
//   "https://drive.google.com/file/d/12a74WgNxW0gTejja6JgDRPwNCat28VzE/view?usp=drive_link",
//   "https://drive.google.com/file/d/1g364k934tZHlzLeih53B7lTkJPuvngxk/view?usp=drive_link",
//   "https://drive.google.com/file/d/14CE6aE7NCOqE93c0yneiaEHvGpDvL0y4/view?usp=drive_link",
//   "https://drive.google.com/file/d/1kyvKa-XuYxiPHf-3Ie_aD5mXuhFEi1yq/view?usp=drive_link",
//   "https://drive.google.com/file/d/12OOXIoTPcpsYFwB82W6hLTUbPIasOBBe/view?usp=drive_link",
//   "https://drive.google.com/file/d/1b-Fyd5KhrdaerWAHpsEg_W4ODDcU5RE1/view?usp=drive_link",
//   "https://drive.google.com/file/d/1J-wradp_cVEP7b1uGqPFwBAvs5x4ydiT/view?usp=drive_link",
//   "https://drive.google.com/file/d/1fi8l0lvY33dn7Wetv_b7ILDbUMEOrlYn/view?usp=drive_link",
//   "https://drive.google.com/file/d/1MVQlqcG26_DHD7ElOrp_PlM2kbgdLbSV/view?usp=drive_link",
//   "https://drive.google.com/file/d/1GXof92X_Q-NGqxGQnEiEAdBABF21vQPa/view?usp=drive_link",
//   "https://drive.google.com/file/d/1yEn75lnlvuOPNausxrO9z0QR2SogiGGc/view?usp=drive_link",
//   "https://drive.google.com/file/d/14wCmspdolY0PlFNTs67i4LahOyresALD/view?usp=drive_link",
//   "https://drive.google.com/file/d/18WzIIFSkdHtVN5HX4Lu8bA0roaWKhMwS/view?usp=drive_link",
//   "https://drive.google.com/file/d/1VUVgQ0GK5XEbalOafcV48Ux5GCn1WKaG/view?usp=drive_link",
//   "https://drive.google.com/file/d/1cg2CsEbmFsnS_7W1koygdW5Cvki_u-lm/view?usp=drive_link",
//   "https://drive.google.com/file/d/1R6enSrP78GAyMRBbmgNys--p-KqhGzBG/view?usp=drive_link",
//   "https://drive.google.com/file/d/1MJ36X0lh9Sj7-dVKWYDyxkJzwl8wZnx8/view?usp=drive_link",
//   "https://drive.google.com/file/d/1PeC-2T_Hln8KufkzwBE3tfGKKWaMXXup/view?usp=drive_link",
//   "https://drive.google.com/file/d/1ZONti3hrsR87fYEV223XtOFAs0sPQtj1/view?usp=drive_link",
//   "https://drive.google.com/file/d/1u99EHvKGeBrvyOuBenYjZoFfAROIL_YK/view?usp=drive_link",
//   "https://drive.google.com/file/d/1_amKNE2g8u98q4xpxSCBRRfRv2bfUGb4/view?usp=drive_link",
//   "https://drive.google.com/file/d/15FWipx_w80FyIFLmQqMhxG_lY6slIKM2/view?usp=drive_link",
// ];

// export default function Certificates() {
//   return (
//     <motion.section
//       id="certificates"
//       className="w-full p-8 bg-gray-100 dark:bg-gray-900" // full width
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: false, amount: 0.2 }}
//     >
//       <div className="w-full p-8 md:p-12">
//         <h2 className="text-2xl font-bold mb-6 text-center">Certificates</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {certificates.map((cert, idx) => (
//             <motion.div
//               key={idx}
//               onClick={() => window.open(certificateLinks[idx], "_blank")}
//               className="p-4 rounded-xl shadow-md cursor-pointer transform hover:scale-105 transition-all duration-300 text-center"
//               style={{
//                 background: `linear-gradient(135deg, hsl(${idx * 45}, 70%, 60%), hsl(${idx * 45 + 60}, 70%, 50%))`,
//                 color: "white"
//               }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               viewport={{ once: false }}
//             >
//               <p className="text-sm font-semibold">{cert}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }
