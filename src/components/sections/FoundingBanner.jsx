import Button from '../ui/Button.jsx'
import { FOUNDING_RATE } from '../../data/constants.js'

export default function FoundingBanner() {
  return (
    <section className="bg-moss px-6 md:px-16 py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="self-center md:self-start inline-block font-body text-[9px] tracking-[4px] uppercase text-clay border border-clay/40 px-3 py-1.5">
            Founding Member
          </span>
          <h2 className="font-display text-[38px] leading-tight tracking-[2px] text-cream max-w-md">
            50 spots. Name on the wall. Rate locked for life.
          </h2>
          <p className="font-accent text-base text-cream/60">
            Join before we open. Your rate never increases. Ever.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[52px] leading-none text-cream">{FOUNDING_RATE}</span>
            <span className="font-body text-[11px] text-cream/50">/ week · locked forever</span>
          </div>
          <Button to="/pages/membership" variant="primary">
            Claim Your Spot →
          </Button>
          <p className="font-body text-[10px] text-cream/30">
            No payment now. We'll confirm your spot personally.
          </p>
        </div>
      </div>
    </section>
  )
}
