import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, projects } from '@/data/projects'

// ============================================================================
// Pre-render toutes les pages projet au build (SSG) - parfait pour le SEO
// ============================================================================
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

// ============================================================================
// Metadata dynamique par projet
// ============================================================================
export async function generateMetadata(
  props: PageProps<'/projets/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params
  const project = getProject(slug)

  if (!project) return {}

  return {
    title: `${project.title} — ${project.client}`,
    description:
      project.description ??
      `${project.categoryLabel} pour ${project.client}. Réalisé par By Dimeh.`,
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description:
        project.description ??
        `${project.categoryLabel} pour ${project.client}`,
      videos: [
        {
          url: `https://bydimeh.com${project.videoSrc}`,
          type: 'video/mp4',
        },
      ],
    },
    alternates: {
      canonical: `https://bydimeh.com/projets/${project.slug}`,
    },
  }
}

// ============================================================================
// SERVER COMPONENT — rendu serveur, HTML complet pour les crawlers
// ============================================================================
export default async function ProjectPage(
  props: PageProps<'/projets/[slug]'>
) {
  const { slug } = await props.params
  const project = getProject(slug)

  if (!project) notFound()

  // JSON-LD schema.org pour le SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${project.title} — ${project.client}`,
    description: project.description,
    contentUrl: `https://bydimeh.com${project.videoSrc}`,
    uploadDate: `${project.year}-01-01`,
    creator: { '@type': 'Person', name: 'By Dimeh' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen pt-32 pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="text-mono-label mb-12 flex items-center gap-3"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#projets"
              className="hover:text-foreground transition-colors"
            >
              Projets
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>

          {/* Header */}
          <header className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 mb-16 pb-16 border-b border-border">
            <div>
              <p className="text-mono-label mb-4">
                {project.number} · {project.categoryLabel}
              </p>
              <h1 className="font-display italic text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <dl className="space-y-4">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-mono-label">Client</dt>
                  <dd className="font-mono text-sm">{project.client}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-mono-label">Catégorie</dt>
                  <dd className="font-mono text-sm">
                    {project.categoryLabel}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-mono-label">Année</dt>
                  <dd className="font-mono text-sm">{project.year}</dd>
                </div>
              </dl>
            </div>
          </header>

          {/* Video */}
          <div className="aspect-video w-full mb-16 bg-black">
            <video
              src={project.videoSrc}
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>

          {/* Description */}
          {project.description && (
            <div className="max-w-2xl mb-20">
              <p className="text-mono-label mb-4">À propos du projet</p>
              <p className="font-display italic text-2xl md:text-3xl leading-snug">
                {project.description}
              </p>
            </div>
          )}

          {/* Back */}
          <Link
            href="/#projets"
            className="inline-block text-mono-label hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-1"
          >
            ← Retour aux projets
          </Link>
        </div>
      </article>
    </>
  )
}
