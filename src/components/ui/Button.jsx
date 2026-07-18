import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-cream text-earth border border-cream hover:bg-cream-dark',
  secondary: 'bg-transparent text-cream border border-cream/30 hover:border-cream/70',
  moss: 'bg-moss text-cream border border-moss hover:bg-moss/80',
  outline: 'bg-transparent text-earth border border-earth/40 hover:border-earth',
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-body font-normal text-[10px] tracking-[4px] uppercase px-10 py-4 transition-colors duration-200 whitespace-nowrap'

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${BASE} ${VARIANTS[variant] || VARIANTS.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
