'use client'

import { useEffect, useRef, useState } from 'react'
import type { Project } from '@/data/projects'

const DEFAULT_DURATION = 10000

export function Hero({ projects }: { projects: Project[] }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  const current = projects[idx]

  // URL Vimeo avec autoplay, mute, loop background
  const vimeoSrc = (() => {
    const params = new URLSearchParams({
      autoplay: '1',
      muted: '1',
      loop: '1',
      background: '1',
      controls: '0',
      title: '0',
      byline: '0',
      portrait: '0',
    })
    if (current.vimeoHash) params.set('h', current.vimeoHash)
    return `https://player.vimeo.com/video/${current.vimeoId}?${params.toString()}${current.startTime ? `#t=${current.startTime}s` : ''}`
  })()

  // Rotation automatique
  useEffect(() => {
    const projectDuration = (current.heroDuration ?? DEFAULT_DURATION / 1000) * 1000

    let start: number | null = null
    let rafId: number

    const tick = (ts: number) => {
      if (start === null) start = ts
      const pct = Math.min(((ts - start) / projectDuration) * 100, 100)
      if (progressRef.current) progressRef.current.style.width = `${pct}%`

      if (pct >= 100) {
        setFading(true)
        window.setTimeout(() => {
          setIdx((i) => (i + 1) % projects.length)
          setFading(false)
          start = null
          if (progressRef.current) {
            progressRef.current.style.transition = 'none'
            progressRef.current.style.width = '0%'
            requestAnimationFrame(() => {
              if (progressRef.current) progressRef.current.style.transition = ''
            })
          }
        }, 300)
        return
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [projects.length, current])

  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-700 overflow-hidden ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125vw] h-[125vh] max-w-none">
          <iframe
            key={current.vimeoId}
            src={vimeoSrc}
            className="absolute inset-0 w-full h-full pointer-events-none brightness-[0.72]"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>

      <div ref={progressRef} className="absolute bottom-0 left-0 h-[2px] bg-foreground z-[4]" style={{ width: '0%' }} aria-hidden="true" />

      <div className="absolute bottom-0 left-0 right-0 z-[3] p-6 lg:p-10 flex justify-between items-end bg-gradient-to-t from-background/85 to-transparent">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground mb-2">
            {current.categoryLabel}
          </p>
          <h1 className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            {current.client} — {current.title}
          </h1>
        </div>
        <div className="font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground text-right flex flex-col items-end gap-2 uppercase">
          <span className="text-sm text-foreground">
            {String(idx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <span>Showreel 2025</span>
        </div>
      </div>
    </section>
  )
}