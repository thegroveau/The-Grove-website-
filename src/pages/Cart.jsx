import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'
import { formatPrice } from '../utils/formatPrice.js'
import PageHero from '../components/ui/PageHero.jsx'

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <>
      <PageHero eyebrow="Your Cart" title="CART" />

      <section className="bg-earth px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {items.length === 0 ? (
            <div className="text-center flex flex-col gap-6 py-12">
              <p className="font-body text-sm text-cream/40">Your cart is empty.</p>
              <Link
                to="/collections/all"
                className="self-center bg-cream text-earth font-body text-[10px] tracking-[4px] uppercase px-10 py-4"
              >
                Shop Grove
              </Link>
            </div>
          ) : (
            <>
              <div className="flex flex-col divide-y divide-sage/10">
                {items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-6 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-lg tracking-[2px] text-cream">{item.title}</span>
                      <span className="font-body text-xs text-cream/40">{item.variant}</span>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 border border-sage/30 text-cream text-sm"
                        >
                          −
                        </button>
                        <span className="font-body text-sm text-cream">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 border border-sage/30 text-cream text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="font-body text-[10px] tracking-[1px] uppercase text-cream/30 hover:text-cream/70 ml-3"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="font-display text-xl text-clay">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-moss/20 pt-6">
                <span className="font-body text-[10px] tracking-[3px] uppercase text-cream/50">Subtotal</span>
                <span className="font-display text-3xl text-cream">{formatPrice(subtotal)}</span>
              </div>

              <button className="bg-cream text-earth font-body text-[11px] tracking-[4px] uppercase py-[18px] hover:bg-cream-dark transition-colors">
                Checkout →
              </button>
              <p className="font-body text-[9px] text-cream/25 text-center">
                Checkout is handled securely via Shopify.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  )
}
