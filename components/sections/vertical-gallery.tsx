'use client'

import Link from 'next/link'
import { useRef } from 'react'
import type { Project } from '@/data/projects'

export function VerticalGallery({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <section
      id="formats-verticaux"
      className="px-6 lg:px-10 py-32 lg:py-40 border-t border-border"
    >
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="text-mono-label mb-4">Formats verticaux</p>
          <h2 className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-none tracking-tight">
            9:16
          </h2>
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
  const videoRef = useRef<HTMLVideoElement>(null)

  const onEnter = () => {
    videoRef.current?.play().catch(() => {})
  }
  const onLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Link
      href={`/projets/${project.slug}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block aspect-[9/16] overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      >
        <source src={`${project.videoSrc}${project.startTime ? `#t=${project.startTime}` : ''}`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition-opacity" />

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