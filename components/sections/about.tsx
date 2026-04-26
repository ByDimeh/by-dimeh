export function About() {
  return (
    <section
      id="apropos"
      className="grid lg:grid-cols-2 gap-12 lg:gap-32 px-6 lg:px-10 py-32 lg:py-40 border-t border-border"
    >
      <div>
        <p className="text-mono-label mb-12">À propos</p>
        <h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
          Capturer
          <br />
          l&apos;<em className="not-italic font-bold">instant</em>
          <br />
          juste.
        </h2>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-base lg:text-lg leading-relaxed text-muted-foreground mb-6 font-light">
Vidéaste basé à Marseille, je travaille à la croisée du sport, de la musique et de la mode. Clips, brand films, campagnes — chaque projet est construit autour d'une intention forte, d&apos;une lumière tenue, d&apos;un cadre maîtrisé.
J&apos;ai signé des films pour l&apos;Olympique de Marseille, Mizuno, Adidas, et accompagne des artistes de la scène rap française. Ma démarche : traiter chaque sujet avec la rigueur du cinéma, peu importe le format. Chaque projet est
          construit autour d&apos;une intention forte et d&apos;une maîtrise
          totale du cadre, de la lumière, du rythme.
        </p>

        <div className="h-px w-full bg-border mb-10" />

        <dl className="flex flex-wrap gap-10 lg:gap-16">
          <div>
            <dt className="font-display italic text-5xl lg:text-6xl leading-none">
              80+
            </dt>
            <dd className="text-mono-xs text-muted-foreground mt-2">
              Projets réalisés
            </dd>
          </div>
          <div>
            <dt className="font-display italic text-5xl lg:text-6xl leading-none">
              6+
            </dt>
            <dd className="text-mono-xs text-muted-foreground mt-2">
              Années d&apos;expérience
            </dd>
          </div>
          <div>
            <dt className="font-display italic text-5xl lg:text-6xl leading-none">
              12
            </dt>
            <dd className="text-mono-xs text-muted-foreground mt-2">
              Marques partenaires
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
