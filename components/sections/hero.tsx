'use client'

import { useEffect, useRef, useState } from 'react'
import type { Project } from '@/data/projects'

const DEFAULT_DURATION = 10000

export function Hero({ projects }: { projects: Project[] }) {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const current = projects[idx]

  // ── Charge la vidéo et démarre au startTime
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const startAt = current.startTime ?? 0

    const onLoaded = () => {
      v.currentTime = startAt
      v.play().catch(() => {})
    }

    // Si la vidéo arrive à sa fin, on revient au startTime
    const onEnded = () => {
      v.currentTime = startAt
      v.play().catch(() => {})
    }

    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('ended', onEnded)

    if (v.readyState >= 1) onLoaded()

    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('ended', onEnded)
    }
  }, [current])

  // ── Rotation automatique entre projets
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
      <video
        ref={videoRef}
        key={current.videoSrc}
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover brightness-[0.72] transition-opacity duration-700 ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <source src={current.videoSrc} type="video/mp4" />
      </video>

      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[2px] bg-foreground z-[4]"
        style={{ width: '0%' }}
        aria-hidden="true"
      />

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
            {String(idx + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </span>
          <span>Showreel 2025</span>
        </div>
      </div>
    </section>
  )
}