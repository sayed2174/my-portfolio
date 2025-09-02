import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileHeader from "./components/ProfileHeader";
import Navbar from "./components/Navbar";
import Skills from './components/Skills';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import EmbeddedResume from './components/ResumePage';
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 scroll-smooth">
      <Navbar />

      {/* Sections */}
      <section id="profile" className="py-4">
        <ProfileHeader />
      </section>

      <section id="skills" className="py-4">
        <Skills />
      </section>

      <section id="education" className="py-4">
        <Education />
      </section>

      <section id="internships" className="py-4">
        <Internships />
      </section>

      <section id="projects" className="py-4">
        <Projects />
      </section>

      <section id="certificates" className="py-18">
        <Certificates />
      </section>
    </div>
  )
}

export default App
