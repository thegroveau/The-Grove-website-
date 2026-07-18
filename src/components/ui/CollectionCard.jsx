import { Link } from 'react-router-dom'

const ACCENT_CLASSES = {
  moss: 'bg-moss',
  clay: 'bg-clay',
  sage: 'bg-sage',
  'earth-2': 'bg-sage/40',
}

export default function CollectionCard({ collection, count }) {
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="group block bg-earth-2 border border-transparent hover:border-moss transition-all duration-200 hover:scale-[1.01] p-6 flex flex-col gap-3"
    >
      <span className={`block h-[3px] w-10 ${ACCENT_CLASSES[collection.accent] || 'bg-moss'}`} />
      <h3 className="font-display text-2xl md:text-[28px] tracking-[6px] text-cream">
        {collection.name.toUpperCase()}
      </h3>
      <p className="font-body font-light text-xs text-cream/45">{collection.description}</p>
      {typeof count === 'number' && (
        <span className="font-body text-[9px] text-sage/50 tracking-[2px] uppercase">
          {count} product{count === 1 ? '' : 's'}
        </span>
      )}
      <span className="font-body text-[10px] text-clay tracking-[2px] mt-auto pt-2">
        Shop {collection.name} →
      </span>
    </Link>
  )
}
