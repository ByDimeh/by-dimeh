'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Project } from '@/data/projects'

export function ProjectRow({ project }: { project: Project }) {
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
      className="group relative grid grid-cols-[3rem_1fr_28vw] items-center gap-0 px-6 lg:px-10 h-[7.5rem] border-b border-border overflow-hidden transition-colors"
    >
      {/* Hover background */}
      <span className="absolute inset-0 bg-foreground/[0.03] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

      {/* Number */}
      <span className="relative font-mono text-[0.55rem] tracking-[0.1em] text-muted-foreground/40 pt-0.5">
        {project.number}
      </span>

      {/* Main */}
      <div className="relative px-8">
        <div className="font-display italic text-2xl md:text-4xl lg:text-5xl leading-none tracking-tight translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          {project.title}
        </div>
        <div className="font-mono text-[0.55rem] tracking-[0.16em] uppercase text-muted-foreground mt-2 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-[50ms]">
          {project.client} — {project.categoryLabel}
        </div>
      </div>

      {/* Video preview */}
      <div className="relative h-full overflow-hidden my-3 bg-black">
        {hover && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260%] h-[260%]">
              <iframe
                src={vimeoSrc}
                className="absolute inset-0 w-full h-full pointer-events-none brightness-90"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Tag */}
      <span className="absolute top-1/2 right-6 lg:right-10 -translate-y-1/2 font-mono text-[0.52rem] tracking-[0.14em] uppercase text-muted-foreground/30 group-hover:text-muted-foreground transition-colors duration-300">
        {project.tag}
      </span>
    </Link>
  )
}