export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 lg:px-10 pt-24 pb-16">
      <p className="text-mono-label mb-12">Contact</p>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-end">
        <div>
          <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-muted-foreground mb-4">Pour les projets</p>
          <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-none tracking-tight break-all">
            <a href="mailto:mehdimaireche@gmail.com" className="relative inline-block hover:underline decoration-1 underline-offset-8">mehdimaireche@gmail.com</a>
          </h2>
        </div>

        <a href="https://instagram.com/by.dimeh" target="_blank" rel="noopener noreferrer" className="group relative block border border-border hover:border-foreground/50 transition-all duration-500 p-6 lg:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#833ab4]/0 via-[#fd1d1d]/0 to-[#fcb045]/0 group-hover:from-[#833ab4]/10 group-hover:via-[#fd1d1d]/10 group-hover:to-[#fcb045]/10 transition-all duration-700" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-foreground/50 transition-colors duration-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">Instagram</p>
                <p className="font-display italic text-2xl lg:text-3xl leading-none tracking-tight">@by.dimeh</p>
              </div>
            </div>
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          <div className="relative mt-6 pt-6 border-t border-border flex items-center justify-between">
            <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-muted-foreground">Voir mes projets</span>
            <span className="font-mono text-[0.55rem] tracking-[0.18em] uppercase text-muted-foreground/50 group-hover:text-foreground transition-colors duration-500">Suivre →</span>
          </div>
        </a>
      </div>

      <div className="mt-20 pt-8 border-t border-border">
        <div className="font-mono text-[0.55rem] tracking-[0.12em] uppercase text-muted-foreground/30">© 2025 By Dimeh — Tous droits réservés</div>
      </div>
    </section>
  )
}