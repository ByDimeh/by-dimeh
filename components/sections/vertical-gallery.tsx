'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Project } from '@/data/projects'

export function VerticalGallery({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <section id="formats-verticaux" className="px-6 lg:px-10 py-32 lg:py-40 border-t border-border">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="text-mono-label mb-4">Formats verticaux</p>
          <h2 className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight">9:16</h2>
        </div>
        <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground max-w-xs">
          Clips, capsules, contenus pensés pour l&apos;écran tenu à la verticale.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {projects.map((project) => (
          <VerticalCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

function VerticalCard({ project }: { project: Project }) {
  const [hover, setHover] = useState(false)

  const vimeoSrc = (() => {
    const params = new URLSearchParams({
      autoplay: '1',
      muted: '1',
      loop: '1',
      background: '1',
      controls: '0',
    })
    if (project.vimeoHash) params.set('h', project.vimeoHash)
    return `https://player.vimeo.com/video/${project.vimeoId}?${params.toString()}${project.startTime ? `#t=${project.startTime}s` : ''}`
  })()

  return (
    <Link
      href={`/projets/${project.slug}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block aspect-[9/16] overflow-hidden bg-black"
    >
      {hover && (
        <div className="absolute inset-0">
          <iframe
            src={vimeoSrc}
            className="absolute inset-0 w-full h-full pointer-events-none brightness-90"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
        <p className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-foreground/60 mb-1">
          {project.categoryLabel}
        </p>
        <p className="font-display italic text-lg lg:text-xl leading-tight tracking-tight text-foreground">
          {project.title}
        </p>
        <p className="font-mono text-[0.55rem] tracking-[0.15em] uppercase text-foreground/50 mt-1">
          {project.client}
        </p>
      </div>
    </Link>
  )
}