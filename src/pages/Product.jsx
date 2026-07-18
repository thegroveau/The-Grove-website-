import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useProduct } from '../hooks/useShopify.js'
import { useCart } from '../hooks/useCart.js'
import { formatPrice } from '../utils/formatPrice.js'

export default function Product() {
  const { handle } = useParams()
  const { product, loading } = useProduct(handle)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(null)
  const [added, setAdded] = useState(false)

  if (loading) {
    return <div className="px-6 py-24 text-center font-body text-cream/30">Loading…</div>
  }

  if (!product) {
    return (
      <div className="px-6 py-24 text-center">
        <h1 className="font-display text-3xl text-cream">Product not found.</h1>
      </div>
    )
  }

  const activeVariant = variant || product.variants?.[0]

  return (
    <section className="bg-earth px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div className="aspect-square bg-earth-2 flex items-center justify-center">
          {product.image ? (
            <img src={product.image} alt={product.title} className="w-full h-full object-cover grayscale contrast-125" />
          ) : (
            <span className="font-display text-cream/10 text-8xl">{product.title.charAt(0)}</span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl tracking-[4px] text-cream">{product.title}</h1>
          <span className="font-display text-3xl text-clay">{formatPrice(product.price)}</span>
          <p className="font-body font-light text-sm text-cream/55 leading-relaxed">{product.description}</p>

          {product.variants?.length > 1 && (
            <select
              value={activeVariant}
              onChange={(e) => setVariant(e.target.value)}
              className="bg-earth border border-sage/20 text-cream text-sm font-body px-4 py-3"
            >
              {product.variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={() => {
              addItem(product, activeVariant)
              setAdded(true)
            }}
            className="bg-cream text-earth font-body text-[11px] tracking-[4px] uppercase py-4 hover:bg-cream-dark transition-colors"
          >
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </section>
  )
}
