import Image from 'next/image'
import Navbar from './Navbar'
import Hero from './Hero'
import ProjectsSection from './ProjectsSection'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutMe />
    </div>
  )
}
