import { Link } from 'react-router-dom'
import { FOUNDING_SPOTS_REMAINING, FOUNDING_RATE } from '../../data/constants.js'

export default function AnnouncementBar() {
  return (
    <Link
      to="/pages/membership"
      className="block bg-moss text-cream text-center px-4 py-2.5 font-body text-[10px] tracking-[3px] uppercase hover:bg-moss/90 transition-colors"
    >
      50 Founding Memberships · {FOUNDING_RATE}/week locked for life · {FOUNDING_SPOTS_REMAINING} spots remaining →
    </Link>
  )
}
