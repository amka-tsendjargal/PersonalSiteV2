import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectsSection from './components/ProjectsSection'
import Experience from './components/Experience'
import Contact from './components/Contact'
import GalaxyBackground from './components/GalaxyBackground'

export default function Home() {
  return (
    <div>
      <GalaxyBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <Experience />
      <Contact />
    </div>
  )
}
