export default function EmbeddedResume() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Resume</h2>
      
      <iframe
        src="https://drive.google.com/file/d/1s-fQY8xFEd_3snvYJ3MvFLUT9d8cN24u/view?usp=drive_link"
        title="Resume"
        width="100%"
        height="800px"
        className="border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}
