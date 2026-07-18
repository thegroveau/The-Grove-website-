import Button from '../ui/Button.jsx'
import StatBlock from '../ui/StatBlock.jsx'

export default function TrainingCamps() {
  return (
    <section className="bg-earth-2 px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex flex-col gap-5">
          <span className="font-body text-[9px] tracking-[5px] uppercase text-sage">Grove Training Week</span>
          <h2 className="font-display text-[36px] md:text-[44px] leading-[1.1] text-cream">
            You flew to Bali to train. Now Bali is in Sydney.
          </h2>
          <p className="font-body font-light text-sm text-cream/50 leading-relaxed">
            6 days. 12 people maximum. Structured programming. Real environment. Real results.
          </p>
          <Button to="/pages/training-camps" variant="secondary" className="self-start">
            Register Interest →
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <StatBlock value="6" label="Days" />
          <StatBlock value="12" label="People Max" />
          <StatBlock value="$595–$995" label="Per Person" />
        </div>
      </div>
    </section>
  )
}
