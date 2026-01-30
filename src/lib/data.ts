export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  buildTime: string;
  rating: number;
  reviewCount: number;
  image: string;
  emoji: string;
  gradient: string;
  badge?: string;
  inStock: boolean;
  materials: string[];
  dimensions: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Enchanted Castle',
    slug: 'enchanted-castle',
    description: 'Create a magical medieval castle with towers, flags, and mystical details. This beginner-friendly kit includes pre-cut wooden pieces, LED lights, and detailed assembly instructions.',
    price: 49.99,
    category: 'fantasy',
    skillLevel: 'Beginner',
    buildTime: '2-3 hours',
    rating: 5,
    reviewCount: 128,
    image: '/products/enchanted-castle.jpg',
    emoji: '🏰',
    gradient: 'from-purple-300 to-pink-300',
    badge: 'Bestseller',
    inStock: true,
    materials: ['Wooden pieces', 'LED lights', 'Paints', 'Glue', 'Brushes', 'Instructions'],
    dimensions: '6" x 4" x 10"'
  },
  {
    id: '2',
    name: 'Cozy Forest Cabin',
    slug: 'cozy-cabin',
    description: 'Build a charming woodland retreat complete with a stone fireplace, pine trees, and a cozy interior. Perfect for nature lovers.',
    price: 59.99,
    category: 'nature',
    skillLevel: 'Intermediate',
    buildTime: '3-4 hours',
    rating: 5,
    reviewCount: 87,
    image: '/products/cozy-cabin.jpg',
    emoji: '🏠',
    gradient: 'from-green-300 to-teal-300',
    badge: 'New',
    inStock: true,
    materials: ['Wooden pieces', 'LED lights', 'Faux moss', 'Stone texture paper', 'Glue', 'Instructions'],
    dimensions: '5" x 5" x 8"'
  },
  {
    id: '3',
    name: 'Magical Library',
    slug: 'magical-library',
    description: 'Create an enchanted library filled with ancient books, floating candles, and mysterious artifacts. A perfect addition to any bookshelf.',
    price: 44.99,
    category: 'fantasy',
    skillLevel: 'Beginner',
    buildTime: '2 hours',
    rating: 4,
    reviewCount: 203,
    image: '/products/magical-library.jpg',
    emoji: '📚',
    gradient: 'from-amber-300 to-orange-300',
    badge: 'Popular',
    inStock: true,
    materials: ['Wooden pieces', 'Miniature books', 'LED candles', 'Ladder', 'Glue', 'Instructions'],
    dimensions: '4" x 6" x 9"'
  },
  {
    id: '4',
    name: 'Vintage Cafe',
    slug: 'vintage-cafe',
    description: 'Build a charming European-style cafe with outdoor seating, awning, and detailed interior. Advanced kit for experienced crafters.',
    price: 54.99,
    originalPrice: 69.99,
    category: 'urban',
    skillLevel: 'Advanced',
    buildTime: '4-5 hours',
    rating: 5,
    reviewCount: 64,
    image: '/products/vintage-cafe.jpg',
    emoji: '☕',
    gradient: 'from-rose-300 to-red-300',
    badge: 'Sale',
    inStock: true,
    materials: ['Wooden pieces', 'Fabric awning', 'Miniature furniture', 'LED lights', 'Paints', 'Instructions'],
    dimensions: '6" x 4" x 7"'
  },
  {
    id: '5',
    name: 'Dragon\'s Lair',
    slug: 'dragons-lair',
    description: 'Enter a mystical dragon\'s cave with treasure hoards, crystal formations, and a sleeping dragon. An epic fantasy scene.',
    price: 69.99,
    category: 'fantasy',
    skillLevel: 'Advanced',
    buildTime: '5-6 hours',
    rating: 5,
    reviewCount: 45,
    image: '/products/dragons-lair.jpg',
    emoji: '🐉',
    gradient: 'from-red-400 to-orange-400',
    badge: 'Premium',
    inStock: true,
    materials: ['Wooden pieces', 'Dragon figure', 'Crystal gems', 'LED lights', 'Treasure pieces', 'Instructions'],
    dimensions: '7" x 5" x 10"'
  },
  {
    id: '6',
    name: 'Japanese Garden',
    slug: 'japanese-garden',
    description: 'Create a serene Japanese garden with cherry blossoms, a stone lantern, koi pond, and traditional bridge.',
    price: 54.99,
    category: 'nature',
    skillLevel: 'Intermediate',
    buildTime: '3-4 hours',
    rating: 5,
    reviewCount: 92,
    image: '/products/japanese-garden.jpg',
    emoji: '🌸',
    gradient: 'from-pink-300 to-rose-300',
    badge: '',
    inStock: true,
    materials: ['Wooden pieces', 'Cherry blossom branches', 'Stone lantern', 'Koi fish figures', 'Water effect', 'Instructions'],
    dimensions: '8" x 4" x 6"'
  },
  {
    id: '7',
    name: 'Parisian Bookstore',
    slug: 'parisian-bookstore',
    description: 'Build a charming Parisian bookstore with classic French architecture, outdoor book displays, and cozy reading nook.',
    price: 59.99,
    category: 'urban',
    skillLevel: 'Intermediate',
    buildTime: '4 hours',
    rating: 4,
    reviewCount: 78,
    image: '/products/parisian-bookstore.jpg',
    emoji: '📖',
    gradient: 'from-blue-300 to-indigo-300',
    badge: '',
    inStock: true,
    materials: ['Wooden pieces', 'Miniature books', 'French signage', 'LED lights', 'Cafe table', 'Instructions'],
    dimensions: '6" x 5" x 8"'
  },
  {
    id: '8',
    name: 'Fairy Garden',
    slug: 'fairy-garden',
    description: 'Create a whimsical fairy garden with tiny houses, mushrooms, flowers, and magical fairy lights. Perfect for beginners.',
    price: 39.99,
    category: 'fantasy',
    skillLevel: 'Beginner',
    buildTime: '1-2 hours',
    rating: 5,
    reviewCount: 156,
    image: '/products/fairy-garden.jpg',
    emoji: '🧚',
    gradient: 'from-lime-300 to-green-300',
    badge: 'Bestseller',
    inStock: true,
    materials: ['Wooden pieces', 'Fairy houses', 'Mushroom figures', 'LED fairy lights', 'Flower decorations', 'Instructions'],
    dimensions: '5" x 4" x 6"'
  },
  {
    id: '9',
    name: 'Mountain Retreat',
    slug: 'mountain-retreat',
    description: 'Build a stunning mountain cabin with snow-capped peaks, pine trees, and a warm glowing interior.',
    price: 64.99,
    category: 'nature',
    skillLevel: 'Advanced',
    buildTime: '4-5 hours',
    rating: 5,
    reviewCount: 51,
    image: '/products/mountain-retreat.jpg',
    emoji: '🏔️',
    gradient: 'from-slate-300 to-blue-300',
    badge: '',
    inStock: true,
    materials: ['Wooden pieces', 'Snow texture', 'Pine trees', 'LED lights', 'Mountain backdrop', 'Instructions'],
    dimensions: '7" x 5" x 9"'
  },
  {
    id: '10',
    name: 'Steampunk Workshop',
    slug: 'steampunk-workshop',
    description: 'Create an industrial steampunk workshop with gears, pipes, brass details, and vintage machinery.',
    price: 74.99,
    category: 'urban',
    skillLevel: 'Advanced',
    buildTime: '5-6 hours',
    rating: 4,
    reviewCount: 38,
    image: '/products/steampunk-workshop.jpg',
    emoji: '⚙️',
    gradient: 'from-amber-400 to-yellow-400',
    badge: 'Premium',
    inStock: true,
    materials: ['Wooden pieces', 'Brass gears', 'Pipe fittings', 'LED lights', 'Vintage tools', 'Instructions'],
    dimensions: '6" x 6" x 8"'
  },
  {
    id: '11',
    name: 'Underwater Kingdom',
    slug: 'underwater-kingdom',
    description: 'Dive into an underwater world with coral reefs, sea creatures, and a mermaid palace. Magical and colorful.',
    price: 54.99,
    category: 'fantasy',
    skillLevel: 'Intermediate',
    buildTime: '3-4 hours',
    rating: 5,
    reviewCount: 67,
    image: '/products/underwater-kingdom.jpg',
    emoji: '🧜',
    gradient: 'from-cyan-300 to-blue-400',
    badge: '',
    inStock: true,
    materials: ['Wooden pieces', 'Coral pieces', 'Sea creatures', 'LED lights', 'Water effect', 'Instructions'],
    dimensions: '6" x 4" x 8"'
  },
  {
    id: '12',
    name: 'Autumn Forest',
    slug: 'autumn-forest',
    description: 'Capture the beauty of autumn with falling leaves, orange and red foliage, and a peaceful forest path.',
    price: 49.99,
    category: 'nature',
    skillLevel: 'Beginner',
    buildTime: '2-3 hours',
    rating: 4,
    reviewCount: 89,
    image: '/products/autumn-forest.jpg',
    emoji: '🍂',
    gradient: 'from-orange-300 to-red-400',
    badge: '',
    inStock: true,
    materials: ['Wooden pieces', 'Autumn leaves', 'Tree trunks', 'LED lights', 'Forest floor', 'Instructions'],
    dimensions: '5" x 5" x 7"'
  }
];

export const collections = [
  {
    id: 'fantasy',
    name: 'Fantasy World',
    slug: 'fantasy',
    description: 'Magical castles, enchanted forests, and mystical creatures',
    emoji: '🏰',
    gradient: 'from-purple-400 to-pink-400',
    productCount: 5
  },
  {
    id: 'nature',
    name: 'Nature Scenes',
    slug: 'nature',
    description: 'Peaceful forests, mountain cabins, and garden retreats',
    emoji: '🌲',
    gradient: 'from-green-400 to-teal-400',
    productCount: 4
  },
  {
    id: 'urban',
    name: 'Urban Life',
    slug: 'urban',
    description: 'City streets, cozy cafes, and modern apartments',
    emoji: '🏙️',
    gradient: 'from-blue-400 to-indigo-400',
    productCount: 3
  }
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsBySkillLevel(level: 'Beginner' | 'Intermediate' | 'Advanced'): Product[] {
  return products.filter(p => p.skillLevel === level);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCollectionBySlug(slug: string): typeof collections[0] | undefined {
  return collections.find(c => c.slug === slug);
}
