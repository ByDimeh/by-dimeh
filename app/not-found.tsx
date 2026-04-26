import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-mono-label mb-6">Erreur 404</p>
      <h1 className="font-display italic text-6xl md:text-8xl mb-8 leading-none">
        Page introuvable
      </h1>
      <p className="text-muted-foreground mb-10 max-w-md">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="text-mono-xs border-b border-border hover:border-foreground pb-1 transition-colors"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  )
}
