import { useEffect, useRef, useState } from 'react'

/* ---------- hooks ---------- */

// Adds .visible to every .fade-up element as it scrolls into view
function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Counts up to `target` once the returned ref scrolls into view
function useCountUp(target, duration = 1500) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setValue(Math.round(eased * target))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration])

  return [ref, value]
}

/* ---------- data ---------- */

const NAV_LINKS = [
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Membership', href: '#membership' },
  { label: 'Apparel', href: '#apparel' },
  { label: 'Camps', href: '#camps' },
]

const MANIFESTO = ['“Earned. Never Given.”', '“Never Give Up.”', '“All or Nothing.”', '“Romans 8:18”']

const COLLECTIONS = [
  {
    name: 'Train',
    description: 'Programming, coaching and the floor itself. Where the work gets done.',
    tone: 'rgba(61,74,46,0.5)',
  },
  {
    name: 'Fuel',
    description: 'Supplements with nothing to hide. Full label, full dose, no fillers.',
    tone: 'rgba(196,168,130,0.35)',
  },
  {
    name: 'Wear',
    description: 'Apparel built for the grind. Limited drops. No restocks.',
    tone: 'rgba(122,140,106,0.35)',
  },
  {
    name: 'Community',
    description: 'Camps, comps and the people who hold the standard with you.',
    tone: 'rgba(245,240,232,0.12)',
  },
]

// Grove Shopify store — cart permalinks go straight to checkout
const SHOP_URL = 'https://grove-9875.myshopify.com'
const SHOP_CDN = 'https://cdn.shopify.com/s/files/1/0793/2873/9560/files'

const PRODUCT_CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'train', label: 'Train' },
  { key: 'build', label: 'Build' },
  { key: 'recover', label: 'Recover' },
  { key: 'optimise', label: 'Optimise' },
]

// Variant ids map to Shopify ProductVariant ids in the grove-9875 store
const PRODUCTS = [
  {
    name: 'Pre Shred', category: 'train', detail: 'Pre-workout · 240mg caffeine', badge: 'Best Seller', mark: 'P',
    img: `${SHOP_CDN}/EL_PreShred-BlueCrush_MU-Elite-Supps.png?v=1784530281`,
    variants: [
      { id: '48780267815144', title: 'Blue Crush', price: '75.90', rrp: '79.90' },
      { id: '48780267847912', title: 'Bubblegum Grape', price: '75.90', rrp: '79.90' },
      { id: '48780267880680', title: 'Creaming Soda', price: '75.90', rrp: '79.90' },
      { id: '48780267913448', title: 'Passionfruit', price: '75.90', rrp: '79.90' },
      { id: '48780267946216', title: 'Watermelon Snow Cone', price: '75.90', rrp: '79.90' },
      { id: '48780267978984', title: 'Kylla Python', price: '75.90', rrp: '79.90' },
      { id: '48780268011752', title: 'Pineapple Splice', price: '75.90', rrp: '79.90' },
    ],
  },
  {
    name: 'Creatine Monohydrate', category: 'train', detail: 'Pharmaceutical grade', badge: 'Most Popular', mark: 'C',
    variants: [
      { id: '48780268044520', title: '100g', price: '23.65', rrp: '24.90' },
      { id: '48780268077288', title: '250g', price: '33.20', rrp: '34.90' },
      { id: '48780268110056', title: '500g', price: '52.15', rrp: '54.90' },
      { id: '48780268142824', title: '1kg', price: '85.40', rrp: '89.90' },
    ],
  },
  {
    name: 'Hydration Pro', category: 'train', detail: 'Electrolytes + minerals', mark: 'H',
    variants: [
      { id: '48780268437736', title: 'Mango Passionfruit', price: '42.70', rrp: '44.90' },
      { id: '48780268470504', title: 'Watermelon', price: '42.70', rrp: '44.90' },
      { id: '48780268503272', title: 'Unflavoured', price: '42.70', rrp: '44.90' },
    ],
  },
  {
    name: '100% Whey Protein', category: 'build', detail: 'Pure whey · no fillers', mark: 'W',
    variants: [
      { id: '48780268536040', title: 'Chocolate / 908g', price: '85.45', rrp: '89.90' },
      { id: '48780268568808', title: 'Vanilla / 908g', price: '85.45', rrp: '89.90' },
      { id: '48780268601576', title: 'Banana Honey Milkshake / 908g', price: '85.45', rrp: '89.90' },
      { id: '48780268634344', title: 'Gooey White Choc Cookie / 908g', price: '85.45', rrp: '89.90' },
      { id: '48780268667112', title: 'Cookies and Cream / 908g', price: '85.45', rrp: '89.90' },
      { id: '48780268699880', title: 'Chocolate / 2.27kg', price: '151.45', rrp: '159.90' },
      { id: '48780268732648', title: 'Vanilla / 2.27kg', price: '151.45', rrp: '159.90' },
      { id: '48780268765416', title: 'Cookies and Cream / 2.27kg', price: '151.45', rrp: '159.90' },
      { id: '48780268798184', title: 'Choc Peanut Butter / 2.27kg', price: '151.45', rrp: '159.90' },
      { id: '48780268830952', title: 'Gooey White Choc Cookie / 2.27kg', price: '151.45', rrp: '159.90' },
      { id: '48780268863720', title: 'Chocolate / 4.5kg', price: '284.40', rrp: '299.90' },
      { id: '48780268896488', title: 'Vanilla / 4.5kg', price: '284.40', rrp: '299.90' },
    ],
  },
  {
    name: 'Protein Water', category: 'build', detail: 'Light, clear, drinkable', mark: 'P',
    img: `${SHOP_CDN}/Emrald-Labs-Protein-Water-Hawaiian-Punch-1kg-Elite-Supps.png?v=1784530288`,
    variants: [
      { id: '48780268929256', title: 'Hawaiian Punch / 500g', price: '56.90', rrp: '59.90' },
      { id: '48780268962024', title: 'Tropical Punch / 500g', price: '56.90', rrp: '59.90' },
      { id: '48780268994792', title: 'Lychee Strawberry / 500g', price: '56.90', rrp: '59.90' },
      { id: '48780269027560', title: 'Peach Gummy / 500g', price: '56.90', rrp: '59.90' },
      { id: '48780269060328', title: 'Watermelon Crush / 500g', price: '56.90', rrp: '59.90' },
      { id: '48780269093096', title: 'Hawaiian Punch / 1kg', price: '94.90', rrp: '99.90' },
      { id: '48780269125864', title: 'Tropical Punch / 1kg', price: '94.90', rrp: '99.90' },
      { id: '48780269158632', title: 'Peach Gummy / 1kg', price: '94.90', rrp: '99.90' },
      { id: '48780269191400', title: 'Watermelon Crush / 1kg', price: '94.90', rrp: '99.90' },
    ],
  },
  {
    name: 'Vegan Plant Protein', category: 'build', detail: '1kg · plant based', mark: 'V',
    variants: [
      { id: '48780269224168', title: 'Chocolate', price: '66.45', rrp: '69.90' },
      { id: '48780269256936', title: 'Vanilla', price: '66.45', rrp: '69.90' },
      { id: '48780269289704', title: 'Strawberry', price: '66.45', rrp: '69.90' },
    ],
  },
  {
    name: 'Collagen+', category: 'recover', detail: 'Joints, tendons, skin', mark: 'C',
    variants: [
      { id: '48780269322472', title: 'Unflavoured', price: '52.20', rrp: '54.90' },
      { id: '48780269355240', title: 'Vanilla', price: '52.20', rrp: '54.90' },
      { id: '48780269388008', title: 'Chocolate', price: '52.20', rrp: '54.90' },
      { id: '48780269420776', title: 'Mango', price: '52.20', rrp: '54.90' },
    ],
  },
  {
    name: 'Ashwagandha KSM-66', category: 'recover', detail: '60 capsules', mark: 'A',
    variants: [{ id: '48780269453544', title: '60 Capsules', price: '37.95', rrp: '39.90' }],
  },
  {
    name: 'Sea Moss', category: 'recover', detail: '60 capsules', mark: 'S',
    variants: [{ id: '48780269519080', title: '60 Capsules', price: '42.70', rrp: '44.90' }],
  },
  {
    name: 'Shilajit', category: 'recover', detail: '60 capsules', mark: 'S',
    variants: [{ id: '48780269551848', title: '60 Capsules', price: '47.45', rrp: '49.90' }],
  },
  {
    name: 'Maca Root', category: 'recover', detail: '60 capsules', mark: 'M',
    variants: [{ id: '48780269584616', title: '60 Capsules', price: '33.20', rrp: '34.90' }],
  },
  {
    name: 'NAD+', category: 'optimise', detail: '30 capsules', mark: 'N',
    variants: [{ id: '48780269617384', title: '30 Capsules', price: '66.45', rrp: '69.90' }],
  },
  {
    name: 'NMN', category: 'optimise', detail: '30 capsules', mark: 'N',
    variants: [{ id: '48780269650152', title: '30 Capsules', price: '75.95', rrp: '79.90' }],
  },
  {
    name: 'Tongkat Ali', category: 'optimise', detail: '60 capsules', mark: 'T',
    img: `${SHOP_CDN}/Emrald-Labs-Tongkat-Ali-Elite-Supps.png?v=1784530301`,
    variants: [{ id: '48780269682920', title: '60 Capsules', price: '52.20', rrp: '54.90' }],
  },
  {
    name: 'Test+', category: 'optimise', detail: '120 capsules', mark: 'T',
    variants: [{ id: '48780269748456', title: '120 Capsules', price: '61.70', rrp: '64.90' }],
  },
  {
    name: 'Berberine', category: 'optimise', detail: '60 capsules', mark: 'B',
    variants: [{ id: '48780269781224', title: '60 Capsules', price: '42.70', rrp: '44.90' }],
  },
  {
    name: 'NAC', category: 'optimise', detail: '60 capsules', mark: 'N',
    variants: [{ id: '48780269879528', title: '60 Capsules', price: '37.95', rrp: '39.90' }],
  },
]

const DROP_ITEMS = [
  { name: 'Grove Heavyweight Tee', detail: 'Washed earth · 240gsm', price: '$65', mark: '01' },
  { name: 'Grove Training Shorts', detail: 'Moss · 4-way stretch', price: '$75', mark: '02' },
  { name: 'Grove Hoodie', detail: 'Cream · heavy fleece', price: '$120', mark: '03' },
]

const FOUNDING_FEATURES = [
  'Locked founding rate for life',
  'Priority access before public opening',
  'Founding member apparel piece — numbered',
  'First access to every drop and camp',
  'Your name on the founders wall',
]

const STANDARD_FEATURES = [
  'Full gym access',
  'Standard rate, reviewed annually',
  'Public waitlist for drops and camps',
]

const TOTAL_SPOTS = 50
const SPOTS_REMAINING = 33
const SPOTS_CLAIMED = TOTAL_SPOTS - SPOTS_REMAINING

/* ---------- components ---------- */

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 8h13M9.5 3.5 14 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnnouncementBar() {
  return (
    <div className="announcement">
      <span>
        Founding memberships now open — 50 only <span className="announcement__arrow">→</span>
      </span>
    </div>
  )
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#top" className="nav__logo">
          GROVE
        </a>
        <div className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav__right">
          <a href="#pre-register" className="grove-btn grove-btn--moss nav__cta">
            Pre-Register
          </a>
          <button
            className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-menu__link"
            style={{ transitionDelay: menuOpen ? `${0.1 + i * 0.07}s` : '0s' }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#pre-register"
          className="mobile-menu__link mobile-menu__link--accent"
          style={{ transitionDelay: menuOpen ? `${0.1 + NAV_LINKS.length * 0.07}s` : '0s' }}
          onClick={() => setMenuOpen(false)}
        >
          Pre-Register
        </a>
      </div>
    </>
  )
}

function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero grove-grain" id="top">
      <div className="hero__bg" ref={bgRef} aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow fade-up">Inner West Sydney · Opening 2026</p>
        <h1 className="hero__wordmark fade-up">GROVE</h1>
        <p className="hero__tagline fade-up">
          A training ground. A standard. <em>A community.</em>
        </p>
        <p className="hero__body fade-up">
          Built by a national champion, for people who take training seriously. Fifty founding
          memberships. Then the doors close until opening day.
        </p>
        <div className="hero__actions fade-up">
          <a href="#pre-register" className="grove-btn grove-btn--primary">
            Become a Founding Member
          </a>
          <a href="#about" className="grove-btn grove-btn--secondary">
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

function ManifestoStrip() {
  const line = MANIFESTO.join('  ·  ')
  const content = `${line}  ·  ${line}  ·  ${line}  ·  `
  return (
    <div className="grove-marquee" aria-hidden="true">
      <div className="grove-marquee__inner">
        <span className="grove-marquee__text">{content}</span>
        <span className="grove-marquee__text">{content}</span>
      </div>
    </div>
  )
}

function FoundingBanner() {
  const [countRef, count] = useCountUp(SPOTS_CLAIMED)

  return (
    <section className="founding">
      <div className="container founding__inner fade-up">
        <div className="founding__left">
          <span className="founding__badge">Founding 50</span>
          <h2 className="section-heading">
            First in. <em>Forever different.</em>
          </h2>
          <p className="founding__copy">
            Fifty people get to say they were here before the doors opened. Founding rate locked
            for life, numbered apparel, name on the wall. When they're gone, they're gone.
          </p>
          <p className="founding__count" ref={countRef}>
            <span className="founding__count-number">{count}</span> founding members already in
          </p>
        </div>
        <div className="founding__right">
          <p className="founding__price-label">Founding rate · per fortnight</p>
          <div className="founding__price">
            <span className="founding__price-rule" aria-hidden="true" />
            <span className="founding__price-value">$55</span>
            <span className="founding__price-rule" aria-hidden="true" />
          </div>
          <a href="#pre-register" className="grove-btn grove-btn--primary">
            Claim Your Spot
          </a>
        </div>
      </div>
    </section>
  )
}

function Collections() {
  return (
    <section className="section" id="collections">
      <div className="container">
        <p className="eyebrow fade-up">What Grove Is</p>
        <h2 className="section-heading fade-up">
          Four pillars. <em>One standard.</em>
        </h2>
        <div className="collections-grid">
          {COLLECTIONS.map((c) => (
            <a
              key={c.name}
              href="#pre-register"
              className="collection-card fade-up"
              style={{ '--card-tone': c.tone }}
            >
              <div className="collection-card__bg" aria-hidden="true" />
              <h3 className="collection-card__name">{c.name}</h3>
              <p className="collection-card__desc">{c.description}</p>
              <span className="collection-card__arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutStrip() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__image fade-up" aria-hidden="true">
          <span className="about__image-mark">JT</span>
        </div>
        <div className="about__content">
          <p className="eyebrow fade-up">The Founder</p>
          <h2 className="section-heading fade-up">
            Built from <em>twelve competitions</em> and a stubborn refusal to quit.
          </h2>
          <blockquote className="about__quote fade-up">
            I didn't start Grove to open another gym. I started it because the places that shaped
            me don't exist around here — rooms where the standard is the standard, no matter who
            walks in.
          </blockquote>
          <p className="about__body fade-up">
            Australian National Champion. NSW State Champion. Twelve competitions on the record and
            every lesson from them poured into one place — opening in Sydney's Inner West in 2026.
          </p>
          <a href="#camps" className="about__link fade-up">
            Read the full story <ArrowIcon />
          </a>
          <p className="about__signature fade-up">Jim Thornton</p>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product: p }) {
  const [selected, setSelected] = useState(0)
  const variant = p.variants[selected]

  return (
    <div className="product-card">
      <div className="product-card__image">
        {p.badge && <span className="product-card__badge">{p.badge}</span>}
        <span className="product-card__mark" aria-hidden="true">
          {p.mark}
        </span>
        {p.img && (
          <img
            className="product-card__img"
            src={p.img}
            alt={`Emrald Labs ${p.name}`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </div>
      <p className="product-card__vendor">Emrald Labs</p>
      <h3 className="product-card__name">{p.name}</h3>
      <p className="product-card__detail">{p.detail}</p>
      {p.variants.length > 1 && (
        <select
          className="product-card__select"
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
          aria-label={`${p.name} options`}
        >
          {p.variants.map((v, i) => (
            <option key={v.id} value={i}>
              {v.title}
            </option>
          ))}
        </select>
      )}
      <p className="product-card__price">
        ${variant.price} <span className="product-card__rrp">${variant.rrp}</span>
      </p>
      <a
        href={`${SHOP_URL}/cart/${variant.id}:1`}
        className="grove-btn grove-btn--primary product-card__cta"
        target="_blank"
        rel="noreferrer"
      >
        Add to Cart
      </a>
    </div>
  )
}

function FeaturedProducts() {
  const [category, setCategory] = useState('all')
  const visible = PRODUCTS.filter((p) => category === 'all' || p.category === category)

  return (
    <section className="section" id="products">
      <div className="container">
        <p className="eyebrow fade-up">The Range · Emrald Labs</p>
        <h2 className="section-heading fade-up">
          Nothing hidden. <em>Everything dosed.</em>
        </h2>
        <p className="products-intro fade-up">
          Australian made, transparently labelled. Every ingredient listed, every dose disclosed —
          the only standard we'll stock.
        </p>
        <div className="range-tabs fade-up" role="tablist" aria-label="Product categories">
          {PRODUCT_CATEGORIES.map((c) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={category === c.key}
              className={`range-tab ${category === c.key ? 'range-tab--active' : ''}`}
              onClick={() => setCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        {/* fade-up sits on the wrapper, not the cards — filtered cards re-render
            after the IntersectionObserver has already run */}
        <div className="products-grid fade-up">
          {visible.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProofStrip() {
  return (
    <div className="social-proof fade-up">
      <span>🏆 Australian National Champion</span>
      <span className="social-proof__dot" aria-hidden="true">
        ·
      </span>
      <span>🏆 NSW State Champion</span>
      <span className="social-proof__dot" aria-hidden="true">
        ·
      </span>
      <span>12 Competitions</span>
      <span className="social-proof__dot" aria-hidden="true">
        ·
      </span>
      <span>Opening Inner West Sydney 2026</span>
    </div>
  )
}

function Membership() {
  return (
    <section className="section" id="membership">
      <div className="container">
        <p className="eyebrow fade-up">Membership</p>
        <h2 className="section-heading fade-up">
          Two ways in. <em>One is forever.</em>
        </h2>
        <div className="membership-grid">
          <div className="membership-card membership-card--founding fade-up">
            <span className="membership-card__tag">Founding · 50 only</span>
            <p className="membership-card__price">
              $55<span className="membership-card__per"> / fortnight</span>
            </p>
            <p className="membership-card__note">Locked for life. Never increases.</p>
            <ul className="membership-card__features">
              {FOUNDING_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="membership-card__spots">
              <p className="membership-card__spots-label">
                <strong>{SPOTS_REMAINING} of {TOTAL_SPOTS}</strong> remaining
              </p>
              <div className="membership-card__progress" aria-hidden="true">
                <span
                  className="membership-card__progress-fill"
                  style={{ width: `${(SPOTS_CLAIMED / TOTAL_SPOTS) * 100}%` }}
                />
              </div>
            </div>
            <a href="#pre-register" className="grove-btn grove-btn--primary membership-card__cta">
              Claim Founding Spot
            </a>
          </div>
          <div className="membership-card membership-card--standard fade-up">
            <span className="membership-card__tag">Standard</span>
            <p className="membership-card__price membership-card__price--standard">
              $75<span className="membership-card__per"> / fortnight</span>
            </p>
            <p className="membership-card__note">Opens with the doors, 2026.</p>
            <ul className="membership-card__features">
              {STANDARD_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <a href="#pre-register" className="grove-btn grove-btn--secondary membership-card__cta">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PreRegisterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interest, setInterest] = useState('')

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const nameValid = name.trim().length > 1

  const onSubmit = (e) => {
    e.preventDefault()
    if (emailValid && nameValid) setSubmitted(true)
  }

  return (
    <section className="section pre-register" id="pre-register">
      <div className="container pre-register__inner">
        <p className="eyebrow fade-up">Pre-Register</p>
        <h2 className="section-heading fade-up">
          Get in <em>before the doors open.</em>
        </h2>
        <p className="pre-register__copy fade-up">
          No payment now. Pre-registering holds your place in line for a founding spot and first
          access to every drop.
        </p>
        {submitted ? (
          <div className="pre-register__success">
            <p className="pre-register__success-text">You're in.</p>
            <p className="pre-register__success-sub">We'll be in touch. Watch your inbox.</p>
          </div>
        ) : (
          <form className="pre-register__form fade-up" onSubmit={onSubmit} noValidate>
            <div className="grove-field">
              <input
                id="field-name"
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={nameValid ? 'is-valid' : ''}
                autoComplete="name"
                required
              />
              <label htmlFor="field-name">Full Name</label>
            </div>
            <div className="grove-field">
              <input
                id="field-email"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailValid ? 'is-valid' : ''}
                autoComplete="email"
                required
              />
              <label htmlFor="field-email">Email</label>
            </div>
            <div className="grove-field">
              <select
                id="field-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={interest ? 'is-valid has-value' : ''}
              >
                <option value="" hidden></option>
                <option value="founding">Founding membership</option>
                <option value="standard">Standard membership</option>
                <option value="apparel">Apparel drops</option>
                <option value="camps">Training camps</option>
              </select>
              <label htmlFor="field-interest">I'm here for</label>
            </div>
            <button type="submit" className="grove-btn grove-btn--primary pre-register__submit">
              Pre-Register
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function ApparelDrop() {
  return (
    <section className="section apparel" id="apparel">
      <span className="apparel__watermark" aria-hidden="true">
        DROP 01
      </span>
      <div className="container">
        <p className="eyebrow fade-up">Apparel</p>
        <h2 className="section-heading fade-up">
          Drop 01 <em>is coming.</em>
        </h2>
        <p className="apparel__urgency fade-up">Limited. No restocks.</p>
        <div className="apparel-grid">
          {DROP_ITEMS.map((item) => (
            <div key={item.name} className="apparel-card fade-up">
              <div className="apparel-card__image">
                <span className="apparel-card__mark" aria-hidden="true">
                  {item.mark}
                </span>
              </div>
              <h3 className="apparel-card__name">{item.name}</h3>
              <p className="apparel-card__detail">{item.detail}</p>
              <p className="apparel-card__price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrainingCamps() {
  return (
    <section className="section camps grove-grain" id="camps">
      <div className="container">
        <p className="eyebrow fade-up">Training Camps</p>
        <h2 className="section-heading fade-up">
          The record <em>speaks first.</em>
        </h2>
        <p className="camps__copy fade-up">
          Before the gym opens, the camps run. Small groups, real programming, coached by the
          founder. Every camp fills from the pre-registration list first.
        </p>
        <div className="camps__stats">
          <div className="camps__stat fade-up">
            <span className="camps__stat-number">12</span>
            <span className="camps__stat-label">Competitions</span>
          </div>
          <span className="camps__stat-rule" aria-hidden="true" />
          <div className="camps__stat fade-up">
            <span className="camps__stat-number">2</span>
            <span className="camps__stat-label">Titles Held</span>
          </div>
          <span className="camps__stat-rule" aria-hidden="true" />
          <div className="camps__stat fade-up">
            <span className="camps__stat-number">50</span>
            <span className="camps__stat-label">Founding Spots</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__watermark" aria-hidden="true">
        GROVE
      </span>
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">GROVE</p>
          <p className="footer__tagline">Earned. Never Given.</p>
        </div>
        <div className="footer__columns">
          <div className="footer__column">
            <p className="footer__column-title">Explore</p>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer__column">
            <p className="footer__column-title">Contact</p>
            <a href="mailto:hello@thegroveau.com" className="footer__link">
              hello@thegroveau.com
            </a>
            <a
              href="https://instagram.com/thegrove.au"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              @thegrove.au
            </a>
            <span className="footer__link footer__link--static">Inner West Sydney</span>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Grove. All rights reserved. Romans 8:18.
      </p>
    </footer>
  )
}

/* ---------- app ---------- */

export default function App() {
  useFadeUp()

  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <ManifestoStrip />
        <FoundingBanner />
        <Collections />
        <AboutStrip />
        <FeaturedProducts />
        <SocialProofStrip />
        <Membership />
        <PreRegisterForm />
        <ApparelDrop />
        <TrainingCamps />
      </main>
      <Footer />
    </>
  )
}
