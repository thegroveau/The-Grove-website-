import { useState } from 'react'
import PageHero from '../components/ui/PageHero.jsx'
import StatBlock from '../components/ui/StatBlock.jsx'
import FormInput from '../components/ui/FormInput.jsx'
import FormSelect from '../components/ui/FormSelect.jsx'
import { useKlaviyo } from '../hooks/useKlaviyo.js'

const PACKAGES = [
  {
    name: 'Training Only',
    price: '$595',
    features: ['6 days of structured programming', 'Small group coaching', 'Real Sydney training environment'],
  },
  {
    name: 'Training + Content',
    price: '$795',
    features: ['Everything in Training Only', 'Full content capture across the week', 'Edited highlight reel'],
    featured: true,
  },
  {
    name: 'Full Experience',
    price: '$995',
    features: ['Everything in Training + Content', 'Nutrition + recovery guidance', 'Grove apparel pack included'],
  },
]

export default function TrainingCamps() {
  const { status, submit } = useKlaviyo()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', membershipInterest: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submit({ ...form, source: 'Grove Training Camps' })
  }

  return (
    <>
      <PageHero
        eyebrow="Grove Training Week"
        title="TRAINING CAMPS"
        sub="You flew to Bali to train. Now Bali is in Sydney."
      />

      <section className="bg-earth px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-3 gap-6 justify-items-center">
            <StatBlock value="6" label="Days" />
            <StatBlock value="12" label="People Max" />
            <StatBlock value="$595–$995" label="Per Person" />
          </div>

          <p className="font-body font-light text-[15px] text-cream/60 leading-[1.9] text-center max-w-2xl mx-auto">
            6 days. 12 people maximum. Structured programming. Real environment. Real
            results. Grove Training Week brings the intensity of an overseas camp to
            Inner West Sydney — without the flight.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col gap-5 p-7 ${
                  pkg.featured ? 'bg-moss border-2 border-moss' : 'bg-earth-2 border border-sage/20'
                }`}
              >
                <h3 className="font-display text-xl tracking-[3px] text-cream">{pkg.name}</h3>
                <span className="font-display text-4xl text-clay">{pkg.price}</span>
                <ul className="flex flex-col gap-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="font-body font-light text-xs text-cream/70 flex gap-2">
                      <span className="text-clay">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {status === 'success' ? (
        <section className="bg-earth-2 px-6 md:px-10 py-20 text-center">
          <h2 className="font-display text-4xl text-cream mb-3">You're in.</h2>
          <p className="font-accent text-lg text-clay">We'll be in touch personally.</p>
        </section>
      ) : (
        <section className="bg-earth-2 px-6 md:px-10 py-20">
          <div className="max-w-md mx-auto flex flex-col gap-8">
            <h2 className="font-display text-3xl text-cream text-center tracking-[2px]">Register Interest</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="First Name" name="firstName" value={form.firstName} onChange={update('firstName')} />
                <FormInput label="Last Name" name="lastName" value={form.lastName} onChange={update('lastName')} />
              </div>
              <FormInput label="Email" name="email" type="email" required value={form.email} onChange={update('email')} />
              <FormInput label="Phone" name="phone" type="tel" value={form.phone} onChange={update('phone')} />
              <FormSelect
                label="Package Interest"
                name="membershipInterest"
                options={PACKAGES.map((p) => `${p.name} (${p.price})`)}
                value={form.membershipInterest}
                onChange={update('membershipInterest')}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-cream text-earth font-body text-[11px] tracking-[4px] uppercase py-[18px] mt-2 hover:bg-cream-dark transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? 'Submitting…' : 'Register Interest →'}
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}
