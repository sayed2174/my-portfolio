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

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 scroll-smooth">
      <Navbar />

      {/* Sections */}
      <section id="profile" className="pt-24">
        <ProfileHeader />
      </section>

      <section id="skills" className="h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section id="education" className="h-screen flex items-center justify-center">
        <Education />
      </section>

      <section id="internships" className="h-screen flex items-center justify-center">
        <Internships />
      </section>

      <section id="projects" className="h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="certificates" className="h-screen flex items-center justify-center">
        <Certificates />
      </section>
    </div>
  )
}

export default App
