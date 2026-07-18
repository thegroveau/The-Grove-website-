import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import { formatPrice } from '../../utils/formatPrice.js'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      <button
        aria-label="Close cart"
        className="absolute inset-0 bg-near-black/70"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-sm h-full bg-earth border-l border-moss/20 flex flex-col">
        <div className="flex items-center justify-between px-6 h-16 border-b border-moss/15">
          <span className="font-display text-lg tracking-[4px] text-cream">YOUR CART</span>
          <button className="font-display text-2xl text-cream" onClick={() => setIsOpen(false)} aria-label="Close">
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
          {items.length === 0 && (
            <p className="font-body font-light text-sm text-cream/40">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.key} className="flex gap-4 border-b border-sage/10 pb-6">
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-display text-sm tracking-[2px] text-cream">{item.title}</span>
                <span className="font-body text-[11px] text-cream/40">{item.variant}</span>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.key, item.quantity - 1)}
                    className="w-6 h-6 border border-sage/30 text-cream text-xs"
                  >
                    −
                  </button>
                  <span className="font-body text-xs text-cream">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.key, item.quantity + 1)}
                    className="w-6 h-6 border border-sage/30 text-cream text-xs"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="font-body text-[10px] tracking-[1px] uppercase text-cream/30 hover:text-cream/70 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <span className="font-display text-lg text-clay">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="px-6 py-6 border-t border-moss/15 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="font-body text-[10px] tracking-[3px] uppercase text-cream/50">Subtotal</span>
            <span className="font-display text-2xl text-cream">{formatPrice(subtotal)}</span>
          </div>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-cream text-earth font-body text-[10px] tracking-[4px] uppercase py-4 hover:bg-cream-dark transition-colors"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  )
}
