// Placeholder catalogue built from real Emrald Labs SKUs.
// Prices are estimates pending real Shopify sync — see src/utils/shopify.js.
// Once VITE_SHOPIFY_DOMAIN / VITE_SHOPIFY_STOREFRONT_TOKEN are set, live
// Storefront API data replaces this automatically.

export const COLLECTIONS = [
  {
    handle: 'train',
    name: 'Train',
    description: 'What you take before and during.',
    accent: 'moss',
  },
  {
    handle: 'build',
    name: 'Build',
    description: 'Protein to support what you’re building.',
    accent: 'clay',
  },
  {
    handle: 'recover',
    name: 'Recover',
    description: 'What happens after matters as much as the session.',
    accent: 'sage',
  },
  {
    handle: 'optimise',
    name: 'Optimise',
    description: 'For those thinking beyond the gym.',
    accent: 'earth-2',
  },
  {
    handle: 'apparel',
    name: 'Apparel',
    description: 'Drop 01. Limited. No restocks.',
    accent: 'moss',
  },
]

export const PRODUCTS = [
  // TRAIN
  {
    id: 'pre-shred',
    handle: 'pre-shred',
    title: 'Pre Shred',
    collection: 'train',
    price: 69.95,
    description: '60 serves. Passionfruit, Pine Splice, Blue Crush, Bubblegum Grape, Kylla Python, Watermelon Snow Cone, Creaming Soda.',
    variants: ['60 Serves'],
    featured: true,
  },
  {
    id: 'hydration-pro',
    handle: 'hydration-pro',
    title: 'Hydration Pro',
    collection: 'train',
    price: 39.95,
    description: '350g. Mango Passionfruit, Watermelon, Unflavoured.',
    variants: ['350g'],
  },
  {
    id: 'creatine-monohydrate',
    handle: 'creatine-monohydrate',
    title: 'Creatine Monohydrate',
    collection: 'train',
    price: 34.95,
    description: 'Unflavoured. Available 100g, 250g, 500g, 1kg.',
    variants: ['100g', '250g', '500g', '1kg'],
    featured: true,
  },

  // BUILD
  {
    id: 'emrald-whey',
    handle: 'emrald-100-whey',
    title: 'Emrald 100% Whey',
    collection: 'build',
    price: 59.95,
    description: '908g. Chocolate, Vanilla, Banana Honey Milkshake, Gooey White Choc Cookie, Cookies and Cream.',
    variants: ['908g', '2.27kg', '4.5kg'],
    featured: true,
  },
  {
    id: 'protein-water',
    handle: 'protein-water',
    title: 'Protein Water',
    collection: 'build',
    price: 9.95,
    description: '500g. Hawaiian Punch, Tropical Punch, Lychee Strawberry, Peach Gummy, Watermelon Crush.',
    variants: ['500g', '1kg'],
  },
  {
    id: 'vegan-plant-protein',
    handle: 'vegan-plant-protein',
    title: 'Vegan Plant Protein',
    collection: 'build',
    price: 64.95,
    description: '1kg. Chocolate, Vanilla, Strawberry.',
    variants: ['1kg'],
  },

  // RECOVER
  {
    id: 'collagen-plus',
    handle: 'collagen-plus',
    title: 'Collagen+',
    collection: 'recover',
    price: 49.95,
    description: '30 serves. Unflavoured, Vanilla, Chocolate, Mango.',
    variants: ['30 Serves'],
    featured: true,
  },
  {
    id: 'nac',
    handle: 'nac',
    title: 'NAC',
    collection: 'recover',
    price: 29.95,
    description: 'N-Acetyl Cysteine. Daily support capsules.',
    variants: ['Capsules'],
  },
  {
    id: 'maca-root',
    handle: 'maca-root',
    title: 'Maca Root',
    collection: 'recover',
    price: 29.95,
    description: 'Daily support capsules.',
    variants: ['Capsules'],
  },
  {
    id: 'ashwagandha',
    handle: 'ashwagandha',
    title: 'Ashwagandha',
    collection: 'recover',
    price: 29.95,
    description: 'Daily support capsules.',
    variants: ['Capsules'],
  },

  // OPTIMISE
  {
    id: 'nad-capsules',
    handle: 'nad-capsules',
    title: 'NAD+ Capsules',
    collection: 'optimise',
    price: 54.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'nmn',
    handle: 'nmn',
    title: 'NMN',
    collection: 'optimise',
    price: 54.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'tongkat-ali',
    handle: 'tongkat-ali',
    title: 'TongKat Ali',
    collection: 'optimise',
    price: 44.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'test-plus',
    handle: 'test-plus',
    title: 'Test+',
    collection: 'optimise',
    price: 54.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'sea-moss',
    handle: 'sea-moss',
    title: 'Sea Moss',
    collection: 'optimise',
    price: 29.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'shilajit',
    handle: 'shilajit',
    title: 'Shilajit',
    collection: 'optimise',
    price: 34.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },
  {
    id: 'berberine',
    handle: 'berberine',
    title: 'Berberine',
    collection: 'optimise',
    price: 29.95,
    description: 'For those thinking beyond the gym.',
    variants: ['Capsules'],
  },

  // APPAREL — Drop 01
  {
    id: 'never-give-up-tee',
    handle: 'never-give-up-tee',
    title: 'Never Give Up Tee',
    collection: 'apparel',
    price: 49.95,
    description: 'Drop 01. Limited. No restocks.',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 'all-or-nothing-tee',
    handle: 'all-or-nothing-tee',
    title: 'All or Nothing Tee',
    collection: 'apparel',
    price: 49.95,
    description: 'Drop 01. Limited. No restocks.',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 'earned-hoodie',
    handle: 'earned-hoodie',
    title: 'Earned Hoodie',
    collection: 'apparel',
    price: 89.95,
    description: 'Earned. Never Given. Drop 01. Limited. No restocks.',
    variants: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
  },
]

export function getProductsByCollection(handle) {
  return PRODUCTS.filter((p) => p.collection === handle)
}

export function getFeaturedProducts() {
  return PRODUCTS.filter((p) => p.featured && p.collection !== 'apparel')
}

export function getApparelDrop() {
  return PRODUCTS.filter((p) => p.collection === 'apparel')
}

export function getProductByHandle(handle) {
  return PRODUCTS.find((p) => p.handle === handle)
}
