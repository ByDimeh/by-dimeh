const ITEMS = [
  'Alonzo',
  'Olympique de Marseille',
  'Gertrude',
  'Crocs',
  'VRK × Cébé',
  'Direction artistique',
  'Clips musicaux',
  'Brand films',
  'Fashion films',
]

export function Ticker() {
  // duplicated for infinite loop
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="border-y border-border overflow-hidden py-3 bg-background">
      <div className="flex gap-0 animate-ticker w-max hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap px-10 flex items-center gap-10 after:content-['·'] after:text-muted-foreground/30"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
