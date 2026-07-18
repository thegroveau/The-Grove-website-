import { Link } from 'react-router-dom'

const SHOP_LINKS = [
  { label: 'All Products', to: '/collections/all' },
  { label: 'Train', to: '/collections/train' },
  { label: 'Build', to: '/collections/build' },
  { label: 'Recover', to: '/collections/recover' },
  { label: 'Optimise', to: '/collections/optimise' },
  { label: 'Apparel', to: '/collections/apparel' },
]

const GROVE_LINKS = [
  { label: 'About', to: '/pages/about' },
  { label: 'Membership', to: '/pages/membership' },
  { label: 'Training Camps', to: '/pages/training-camps' },
  { label: 'Contact', to: '/pages/contact' },
  { label: 'FAQ', to: '/pages/faq' },
]

function FooterColumn({ title, children }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-body text-[9px] tracking-[3px] uppercase text-sage">{title}</span>
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-moss/20 px-6 md:px-10 pt-14 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
          <span className="font-display text-2xl tracking-[8px] text-cream">GROVE</span>
          <span className="font-accent text-xs text-clay">Iron &amp; Root · Sydney</span>
          <p className="font-body font-light text-[11px] text-cream/35 leading-relaxed">
            Opening 2026. Capped at 400–450 members. Always.
          </p>
        </div>

        <FooterColumn title="Shop">
          <div className="flex flex-col gap-2.5">
            {SHOP_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="font-body font-light text-[11px] text-cream/40 hover:text-cream/80 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </FooterColumn>

        <FooterColumn title="Grove">
          <div className="flex flex-col gap-2.5">
            {GROVE_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="font-body font-light text-[11px] text-cream/40 hover:text-cream/80 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </FooterColumn>

        <FooterColumn title="Connect">
          <div className="flex flex-col gap-2.5">
            <a href="mailto:hello@thegroveau.com" className="font-body font-light text-[11px] text-cream/40 hover:text-cream/80 transition-colors">
              hello@thegroveau.com
            </a>
            <a
              href="https://instagram.com/thegrove.au"
              target="_blank"
              rel="noreferrer"
              className="font-body font-light text-[11px] text-cream/40 hover:text-cream/80 transition-colors"
            >
              @thegrove.au
            </a>
            <span className="font-body font-light text-[11px] text-cream/30">
              © {new Date().getFullYear()} Grove Gym Pty Ltd · Inner West Sydney
            </span>
          </div>
        </FooterColumn>
      </div>
    </footer>
  )
}
