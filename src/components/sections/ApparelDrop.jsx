import ProductCard from '../ui/ProductCard.jsx'
import Button from '../ui/Button.jsx'
import { useProductsByHandles } from '../../hooks/useShopify.js'

const APPAREL_HANDLES = ['never-give-up-tee', 'all-or-nothing-tee', 'earned-hoodie']

export default function ApparelDrop() {
  const { products, loading } = useProductsByHandles(APPAREL_HANDLES)

  return (
    <section className="bg-earth px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Drop 01</span>
          <h2 className="font-display text-[36px] md:text-[44px] leading-tight text-cream">
            Never Give Up · All or Nothing · Earned. Never Given.
          </h2>
          <p className="font-accent text-lg text-clay">Limited. No restocks.</p>
        </div>

        {loading ? (
          <p className="font-body text-xs text-cream/30">Loading products…</p>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <Button to="/collections/apparel" variant="secondary" className="self-center">
          Shop Drop 01 →
        </Button>
      </div>
    </section>
  )
}
