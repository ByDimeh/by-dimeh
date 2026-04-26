import { Hero } from '@/components/sections/hero'
import { Ticker } from '@/components/sections/ticker'
import { ProjectsList } from '@/components/sections/projects-list'
import { VerticalGallery } from '@/components/sections/vertical-gallery'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { horizontalProjects, verticalProjects } from '@/data/projects'

export default function HomePage() {
  return (
    <main>
      <Hero projects={horizontalProjects} />
      <Ticker />
      <ProjectsList projects={horizontalProjects} />
      <VerticalGallery projects={verticalProjects} />
      <About />
      <Contact />
    </main>
  )
}