import Button from '../ui/Button.jsx'
import { FOUNDING_RATE, STANDARD_RATE, FOUNDING_SPOTS_REMAINING } from '../../data/constants.js'

const FOUNDING_FEATURES = [
  'Rate locked forever — never increases',
  'Your name on the founding wall',
  'Founding member card',
  'Soft open access before public launch',
  '20% off all Grove supplements + apparel',
  'Priority access to drops + events',
  'First through the doors',
]

const STANDARD_FEATURES = [
  'Full gym access · 6am–10pm daily',
  'No lock-in · cancel anytime',
  '10% off Grove supplements + apparel',
  'Access to all Grove events',
  'Member community',
]

function FeatureItem({ children, mossCheck = true }) {
  return (
    <li className="flex items-start gap-3 font-body font-light text-sm text-cream/80">
      <span className={mossCheck ? 'text-moss' : 'text-sage'}>✓</span>
      {children}
    </li>
  )
}

export default function MembershipSection() {
  return (
    <section className="bg-cream px-6 md:px-10 py-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Membership</span>
          <h2 className="font-display text-[44px] md:text-[52px] leading-tight text-earth">
            Choose your place in the grove.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-earth border-2 border-moss p-8 flex flex-col gap-6">
            <span className="self-start font-body text-[9px] tracking-[4px] uppercase text-clay border border-clay/40 px-3 py-1.5">
              Founding
            </span>
            <div>
              <div className="font-display text-[48px] leading-none text-cream">{FOUNDING_RATE} / week</div>
              <p className="font-accent text-base text-clay mt-2">Locked forever</p>
            </div>
            <hr className="border-moss" />
            <ul className="flex flex-col gap-3">
              {FOUNDING_FEATURES.map((f) => (
                <FeatureItem key={f}>{f}</FeatureItem>
              ))}
            </ul>
            <span className="font-body text-[10px] tracking-[1px] text-clay">
              {FOUNDING_SPOTS_REMAINING} spots remaining
            </span>
            <Button to="/pages/membership" variant="moss" className="w-full">
              Claim Founding Spot →
            </Button>
          </div>

          <div className="bg-earth-2 border border-sage/20 p-8 flex flex-col gap-6">
            <div>
              <div className="font-display text-[48px] leading-none text-cream">{STANDARD_RATE} / week</div>
              <p className="font-accent text-base text-sage mt-2">Month to month</p>
            </div>
            <hr className="border-sage/20" />
            <ul className="flex flex-col gap-3">
              {STANDARD_FEATURES.map((f) => (
                <FeatureItem key={f} mossCheck={false}>
                  {f}
                </FeatureItem>
              ))}
            </ul>
            <Button to="/pages/membership" variant="secondary" className="w-full mt-auto">
              Register Interest →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
