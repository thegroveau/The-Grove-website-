import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'

const SHOP_LINKS = [
  { label: 'Train', to: '/collections/train' },
  { label: 'Build', to: '/collections/build' },
  { label: 'Recover', to: '/collections/recover' },
  { label: 'Optimise', to: '/collections/optimise' },
  { label: 'Apparel', to: '/collections/apparel' },
  { label: 'All Products', to: '/collections/all' },
]

const NAV_LINKS = [
  { label: 'Membership', to: '/pages/membership' },
  { label: 'About', to: '/pages/about' },
  { label: 'Training Camps', to: '/pages/training-camps' },
]

export default function Navigation() {
  const [shopOpen, setShopOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  return (
    <nav className="h-16 bg-earth/95 backdrop-blur-md border-b border-moss/15 flex items-center justify-between px-6 md:px-10">
      <Link to="/" className="font-display text-xl md:text-2xl tracking-[6px] text-cream">
        GROVE
      </Link>

      <ul className="hidden md:flex items-center gap-9">
        <li
          className="relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <button className="font-body text-[10px] tracking-[3px] uppercase text-cream/60 hover:text-cream transition-colors">
            Shop
          </button>
          {shopOpen && (
            <div className="absolute top-full left-0 pt-3 w-44">
              <div className="bg-earth-2 border border-moss/15 flex flex-col py-2">
                {SHOP_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2.5 font-body text-[11px] tracking-[2px] uppercase text-cream/60 hover:text-cream hover:bg-earth transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="font-body text-[10px] tracking-[3px] uppercase text-cream/60 hover:text-cream transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open cart"
          className="relative font-body text-[10px] tracking-[2px] uppercase text-cream/70 hover:text-cream transition-colors"
        >
          Cart
          {count > 0 && (
            <span className="absolute -top-2 -right-3 bg-moss text-cream text-[9px] w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
        <Link
          to="/pages/membership"
          className="hidden xs:inline-block bg-moss text-cream font-body text-[9px] tracking-[3px] uppercase px-5 py-2.5 hover:bg-moss/80 transition-colors"
        >
          Pre-Register
        </Link>
        <button
          className="md:hidden font-display text-2xl text-cream"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-earth flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b border-moss/15">
            <span className="font-display text-xl tracking-[6px] text-cream">GROVE</span>
            <button
              className="font-display text-3xl text-cream"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 overflow-y-auto py-10">
            {[...SHOP_LINKS, ...NAV_LINKS].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl tracking-[6px] text-cream"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
