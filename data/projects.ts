export type Project = {
  slug: string
  number: string
  title: string
  client: string
  category: 'clips' | 'brand' | 'fashion' | 'pub' | 'editorial' | 'concerts' | 'sports'
  categoryLabel: string
  tag: string
  videoSrc: string
  orientation: 'horizontal' | 'vertical'   // ← AJOUTE CETTE LIGNE
  startTime?: number
  heroDuration?: number
  year: string
  description?: string
}

export const projects: Project[] = [
  {
    slug: 'alonzo-ardentes',
    number: '01',
    title: 'Les Ardentes × Alonzo',
    client: 'Alonzo',
    category: 'concerts',
    categoryLabel: 'Concerts',
    tag: 'Concerts',
    videoSrc: '/videos/V2_ALONZO_ARDENTES.mp4',
    startTime: 25,
    orientation: 'vertical',
    year: '2024',
    description: 'Réalisation d\'un vlog avec Alonzo au festival Les Ardentes 2024',
  },
  {
    slug: 'om-3rd-jersey',
    number: '02',
    title: 'Olympique de Marseille - 3rd Jersey Reveal',
    client: 'Olympique de Marseille',
    category: 'brand',
    categoryLabel: 'Brand film',
    tag: 'Brand',
    videoSrc: '/videos/REVEAL_3RD_JERSEY_OM.mp4',
    startTime: 25,
     orientation: 'vertical',
    year: '2024',
    description: 'Film de révélation du 3e maillot de l\'Olympique de Marseille 2023/2024',
  },
  {
    slug: 'gertrude-capsule',
    number: '03',
    title: 'Gertrude - Concrete Culture',
    client: 'Gertrude',
    category: 'fashion',
    categoryLabel: 'Fashion film',
    tag: 'Fashion',
    videoSrc: '/videos/CAPSULE_GERTRUDE_30S.mp4',
    startTime: 0,
    orientation: 'vertical',
    year: '2024',
    description: 'Fashion film pour la capsule collection Gertrude.',
  },
  {
    slug: 'crocs-campaign',
    number: '04',
    title: 'Crocs × Saison Shop × Chroniques de Mars - Crocs de Mars',
    client: 'Crocs',
    category: 'Advertising',
    categoryLabel: 'Advertising',
    tag: 'Advertising',
    videoSrc: '/videos/CROCS_V2.mp4',
    startTime: 27,
    orientation: 'vertical',
    year: '2024',
    description: 'Campagne publicitaire pour l\'édition Crocs Marseille.',
  },
  {
    slug: 'projet-cinematique',
    number: '05',
    title: 'Adidas × Family 3.0 - Adizero EVO SL',
    client: 'Family 3.0',
    category: 'Performance',
    categoryLabel: 'Fashion film',
    tag: 'Performance',
    videoSrc: '/videos/H265_MP4_MULTIPASS.mp4',
    startTime: 13,
    orientation: 'vertical',
    year: '2024',
    description: 'A performance-driven silhouette built for running and so much more',
  },
  {
    slug: 'vrk-cebe',
    number: '06',
    title: 'Vrunk × Cébé',
    client: 'Cébé',
    category: 'Lifestyle',
    categoryLabel: 'Lifestyle',
    tag: 'Lifestyle',
    videoSrc: '/videos/V3_EDIT_VRK_CEBE_1.mp4',
    startTime: 6,
    orientation: 'vertical',
    year: '2024',
    description: 'Film lifestyle pour la collaboration VRK × Cébé.',
  },
{
    slug: 'stony-stone-makelele',
    number: '07',
    title: 'Makélélé',
    client: 'Stony Stone',
    category: 'clips',
    categoryLabel: 'Clips',
    tag: 'Clips',
    videoSrc: '/videos/STONYSTONE_MAKELELE_VDEF.mp4',
    startTime: 114,
    orientation: 'horizontal',
    year: '2025',
    description: `Direction et réalisation du clip Makélélé pour Stony Stone.`,
  },

{
    slug: 'saison-shop-adizero-evo-sl',
    number: '08',
    title: 'Adizero Evo SL',
    client: 'Adidas × Saison Shop',
    category: 'brand',
    categoryLabel: 'Brand film',
    tag: 'Brand',
    videoSrc: '/videos/ADIDAS_SAISON.mp4',
    orientation: 'horizontal',
    startTime: 34,
    year: '2025',
    description: `Brand film pour la collaboration Adidas × Saison Shop autour de la Adizero Evo SL.`,
  },

{
    slug: 'family-lacoste-la-victoire',
    number: '09',
    title: 'Lacoste × Family 3.0 - La Victoire',
    client: 'Lacoste × Family 3.0',
    category: 'pub',
    categoryLabel: 'Publicité',
    tag: 'Pub',
    videoSrc: '/videos/FAMILY_LACOSTE_LA_VICTOIRE.mp4',
    orientation: 'vertical',
    startTime: 34,
    year: '2025',
    description: `Publicité pour la collection Lacoste en hommage à René Lacoste et sa victoire en 1924`,
  },

{
    slug: 'alonzo-velodrome-2025',
    number: '10',
    title: 'Vieux Port, J.O 2024',
    client: 'Alonzo',
    category: 'concert',
    categoryLabel: 'Concert',
    tag: 'Concert',
    videoSrc: '/videos/ALONZO_VEL_1920x1080.mp4',
    orientation: 'horizontal',
    startTime: 24,
    year: '2024',
    description: `Film d'annonce du concert d'Alonzo au Stade Vélodrome de Marseille, en marge d'un concert dédié aux Jeux Olympiques 2024, sur le Vieux Port de Marseille devant plus de 100 000 personnes, mixé avec d'autres images de sa tournée.`,
  },

{
    slug: 'stony-stone-zamdane-20-ans',
    number: '11',
    title: '20 ans',
    client: 'Stony Stone feat. Zamdane',
    category: 'clip',
    categoryLabel: 'Clip musical',
    tag: 'Clip',
    videoSrc: '/videos/STONY_STONE_20_ANS_FT_ZAMDANE.mp4',
    orientation: 'horizontal',
    startTime: 102,
    year: '2025',
    description: `Opérateur caméra sur le clip "20 ans" de Stony Stone featuring Zamdane.`,
  },

{
    slug: 'striker-league-mma-2025',
    number: '12',
    title: 'Striker League MMA 2025',
    client: 'Striker League',
    category: 'sport',
    categoryLabel: 'Sport',
    tag: 'Sport',
    videoSrc: '/videos/STRIKERLEAGUE_MMA.mp4',
    orientation: 'vertical',
    startTime: 0.5,
    year: '2025',
    description: `Captation pour Striker League MMA — édition 2025.`,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const horizontalProjects = projects.filter((p) => p.orientation === 'horizontal')
export const verticalProjects = projects.filter((p) => p.orientation === 'vertical')