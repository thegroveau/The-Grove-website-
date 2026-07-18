import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice.js'
import { useCart } from '../../hooks/useCart.js'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product.variants?.[0])

  return (
    <div className="group bg-earth-2 border border-transparent hover:border-moss transition-colors duration-200 flex flex-col">
      <Link to={`/products/${product.handle}`} className="block aspect-square overflow-hidden bg-near-black relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-cream/15 text-6xl tracking-[6px]">
              {product.title.charAt(0)}
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-5 gap-2">
        <Link to={`/products/${product.handle}`}>
          <h3 className="font-display text-lg tracking-[4px] text-cream">{product.title}</h3>
        </Link>
        {product.description && (
          <p className="font-body font-light text-[11px] text-cream/40 line-clamp-2">{product.description}</p>
        )}

        {product.variants?.length > 1 && (
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="bg-earth border border-sage/20 text-cream text-[11px] font-body px-2 py-2 mt-1"
          >
            {product.variants.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        )}

        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-display text-2xl text-clay">{formatPrice(product.price)}</span>
        </div>

        <button
          onClick={() => addItem(product, variant)}
          className="w-full bg-cream text-earth font-body text-[10px] tracking-[3px] uppercase py-3 mt-2 hover:bg-cream-dark transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
