'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[500] h-14 flex items-center justify-between px-6 lg:px-10 transition-[background,border-color] duration-400 border-b',
        scrolled
          ? 'bg-background/92 backdrop-blur-md border-border'
          : 'border-transparent'
      )}
    >
      <Link
        href="/"
        className="font-mono text-xs tracking-[0.18em] uppercase text-foreground"
      >
        By Dimeh
      </Link>
      <div className="flex items-center gap-6 md:gap-10">
        <Link
          href="/#projets"
          className="text-mono-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Projets
        </Link>
        <Link
  href="/#formats-verticaux"
  className="text-mono-xs text-muted-foreground hover:text-foreground transition-colors"
>
  Verticaux
</Link>
        <Link
          href="/#apropos"
          className="text-mono-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          À propos
        </Link>
        <Link
          href="/#contact"
          className="text-mono-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
