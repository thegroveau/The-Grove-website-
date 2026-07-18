import ProductCard from '../ui/ProductCard.jsx'
import { useProductsByHandles } from '../../hooks/useShopify.js'

const FEATURED_HANDLES = ['pre-shred', 'emrald-100-whey', 'creatine-monohydrate', 'collagen-plus']

export default function FeaturedProducts() {
  const { products, loading } = useProductsByHandles(FEATURED_HANDLES)

  return (
    <section className="bg-earth px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Grove Approved</span>
          <h2 className="font-display text-[44px] md:text-[52px] leading-tight text-cream">
            Stocked because we use it.
          </h2>
          <p className="font-accent text-lg text-clay">Nothing else.</p>
        </div>

        {loading ? (
          <p className="font-body text-xs text-cream/30">Loading products…</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
