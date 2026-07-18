import { useParams } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import { useCollection } from '../hooks/useShopify.js'
import { COLLECTIONS, PRODUCTS } from '../data/products.js'

export default function Collection() {
  const { handle } = useParams()
  const isAll = handle === 'all'
  const meta = COLLECTIONS.find((c) => c.handle === handle)
  const { products: collectionProducts, loading } = useCollection(isAll ? 'train' : handle)

  const products = isAll ? PRODUCTS : collectionProducts

  return (
    <>
      <PageHero
        eyebrow={isAll ? 'Shop' : 'Collection'}
        title={isAll ? 'ALL PRODUCTS' : (meta?.name || handle).toUpperCase()}
        sub={isAll ? 'Everything Grove stocks. Nothing more.' : meta?.description}
      />

      <section className="bg-earth px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto">
          {!isAll && loading ? (
            <p className="font-body text-xs text-cream/30">Loading products…</p>
          ) : products.length === 0 ? (
            <p className="font-body text-sm text-cream/40">No products in this collection yet.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
