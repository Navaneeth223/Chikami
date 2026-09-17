export type ArtworkCategory = 'traditional' | 'digital' | 'sketch';

export interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  image: string;
  alt: string;
  date?: string;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  // Traditional Irezumi & Flash Designs
  {
    id: 'flash-collection-1',
    title: 'Mythical Beasts Flash Collection',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-16 205154.png',
    alt: 'Traditional Japanese irezumi flash sheet featuring dragons, wolf, phoenix, eagle, lion, and koi with dense black linework and red accents',
    featured: true,
  },
  {
    id: 'flash-collection-2',
    title: 'Legendary Creatures Flash Set',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130948.png',
    alt: 'Japanese tattoo flash designs with dragons, wolves, phoenixes, and mythical animals in traditional ink style',
    featured: true,
  },
  {
    id: 'traditional-3',
    title: 'Traditional Flash Series',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130517.png',
    alt: 'Traditional Japanese tattoo flash with bold black ink and vibrant color accents',
  },
  {
    id: 'traditional-4',
    title: 'Irezumi Flash Collection',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130540.png',
    alt: 'Japanese irezumi flash designs featuring traditional motifs with dense linework',
  },
  {
    id: 'traditional-5',
    title: 'Classic Flash Designs',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130601.png',
    alt: 'Traditional tattoo flash with Japanese calligraphy and hanko seals',
  },
  {
    id: 'traditional-6',
    title: 'Mythological Flash Art',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130622.png',
    alt: 'Japanese mythological creatures in traditional tattoo flash style',
  },
  {
    id: 'traditional-7',
    title: 'Traditional Beast Series',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130642.png',
    alt: 'Traditional Japanese tattoo flash featuring fierce animals and creatures',
  },
  {
    id: 'traditional-8',
    title: 'Irezumi Flash Sheet',
    category: 'traditional',
    image: '/images/gallery/Screenshot 2026-09-17 130700.png',
    alt: 'Japanese irezumi flash designs with traditional composition and color palette',
  },

  // Digital Character Illustrations
  {
    id: 'kitsune-guardian',
    title: 'Kitsune Guardian',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130410.png',
    alt: 'Digital illustration of elegant kitsune fox spirit in ornate traditional Japanese kimono with golden tails and moonlit backdrop',
    featured: true,
  },
  {
    id: 'digital-character-2',
    title: 'Character Portrait',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130453.png',
    alt: 'Vibrant digital character illustration with traditional Japanese aesthetic',
    featured: true,
  },
  {
    id: 'digital-3',
    title: 'Character Design',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130719.png',
    alt: 'Digital character artwork blending traditional and contemporary Japanese style',
  },
  {
    id: 'digital-4',
    title: 'Fantasy Portrait',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130740.png',
    alt: 'Colorful digital character illustration with Japanese fantasy elements',
  },
  {
    id: 'digital-5',
    title: 'Character Illustration',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130821.png',
    alt: 'Digital character design featuring vibrant colors and traditional motifs',
  },
  {
    id: 'digital-6',
    title: 'Character Artwork',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130855.png',
    alt: 'Modern digital character illustration with Japanese aesthetic influence',
  },
  {
    id: 'digital-7',
    title: 'Fantasy Character',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 130920.png',
    alt: 'Digital character design combining traditional Japanese elements with contemporary style',
  },
  {
    id: 'digital-8',
    title: 'Character Portrait Series',
    category: 'digital',
    image: '/images/gallery/Screenshot 2026-09-17 131043.png',
    alt: 'Richly detailed digital character illustration showcasing traditional Japanese fashion',
  },
];

// Helper functions
export function getArtworksByCategory(category: ArtworkCategory): Artwork[] {
  return artworks.filter((artwork) => artwork.category === category);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((artwork) => artwork.featured);
}

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.id === id);
}
