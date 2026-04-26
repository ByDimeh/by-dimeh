'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top = my + 'px'
      }
    }

    const tick = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      rafId = requestAnimationFrame(tick)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], .cursor-target')) {
        document.body.classList.add('link-hover')
      }
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a, button, [role="button"], .cursor-target')) {
        document.body.classList.remove('link-hover')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-300 mix-blend-difference [body.link-hover_&]:w-11 [body.link-hover_&]:h-11"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-foreground/45 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 [body.link-hover_&]:opacity-0"
        aria-hidden="true"
      />
    </>
  )
}
