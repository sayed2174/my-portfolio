import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";
import Skills from './Skills';
import Education from './Education';
import Internships from './Internships';
import Projects from './Projects';
import Certificates from './Certificates';
import ResumeSection from './ResumeSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 scroll-smooth">
      <Navbar />

      <section id="profile" className="py-10">
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

      {/* Resume Section */}
      <section id="resume" className="py-10">
        <ResumeSection />
      </section>
    </div>
  );
}
