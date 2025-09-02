export default function ResumeLink() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        My Resume
      </h2>

      <a
        href="https://drive.google.com/file/d/1s-fQY8xFEd_3snvYJ3MvFLUT9d8cN24u/preview"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View Resume
      </a>
    </div>
  );
}
