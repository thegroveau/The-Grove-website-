import CollectionCard from '../ui/CollectionCard.jsx'
import { COLLECTIONS, getProductsByCollection } from '../../data/products.js'

const HOMEPAGE_COLLECTIONS = COLLECTIONS.filter((c) => c.handle !== 'apparel')

export default function CollectionsGrid() {
  return (
    <section className="bg-earth px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Curated by Grove</span>
          <h2 className="font-display text-[52px] leading-tight text-cream">We don't stock everything.</h2>
          <p className="font-accent text-lg text-clay">Just what works.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {HOMEPAGE_COLLECTIONS.map((c) => (
            <CollectionCard key={c.handle} collection={c} count={getProductsByCollection(c.handle).length} />
          ))}
        </div>
      </div>
    </section>
  )
}
