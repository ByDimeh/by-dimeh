import Link from 'next/link'
import type { Project } from '@/data/projects'
import { ProjectRow } from './project-row'

// ============================================================================
// SERVER COMPONENT - la liste est rendue côté serveur pour le SEO
// Chaque ligne est un <Link> vers /projets/[slug] (crawlable)
// ============================================================================
export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <section id="projets" className="relative">
      <h2 className="sr-only">Projets récents</h2>
      {projects.map((p) => (
        <ProjectRow key={p.slug} project={p} />
      ))}
    </section>
  )
}
