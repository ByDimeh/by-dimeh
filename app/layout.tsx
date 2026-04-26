import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Cursor } from '@/components/cursor'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// ============================================================================
// SEO — Metadata par défaut, surchargée par chaque page
// ============================================================================
export const metadata: Metadata = {
  metadataBase: new URL('https://bydimeh.com'),
  title: {
    default: 'By Dimeh — Vidéaste | Clips musicaux & Direction artistique',
    template: '%s | By Dimeh',
  },
  description:
    'By Dimeh — Vidéaste et directeur artistique. Clips musicaux, brand films, fashion films. Collaborations avec Alonzo, Olympique de Marseille, Gertrude, Crocs, Cébé.',
  keywords: [
    'By Dimeh',
    'vidéaste',
    'réalisateur',
    'clip musical',
    'direction artistique',
    'brand film',
    'fashion film',
    'Alonzo',
    'OM',
    'Marseille',
  ],
  authors: [{ name: 'By Dimeh' }],
  creator: 'By Dimeh',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bydimeh.com',
    siteName: 'By Dimeh',
    title: 'By Dimeh — Vidéaste',
    description:
      'Clips musicaux, brand films, fashion films. Une écriture visuelle ancrée dans la culture musicale.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'By Dimeh — Vidéaste',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'By Dimeh — Vidéaste',
    description: 'Clips musicaux, brand films, fashion films.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bydimeh.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'By Dimeh',
              jobTitle: 'Vidéaste',
              url: 'https://bydimeh.com',
              sameAs: [
                'https://instagram.com/bydimeh',
                'https://vimeo.com/bydimeh',
              ],
            }),
          }}
        />
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  )
}
