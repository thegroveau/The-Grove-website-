import { useState } from 'react'
import FormInput from '../ui/FormInput.jsx'
import FormSelect from '../ui/FormSelect.jsx'
import { useKlaviyo } from '../../hooks/useKlaviyo.js'
import { FOUNDING_RATE, STANDARD_RATE } from '../../data/constants.js'

const MEMBERSHIP_OPTIONS = [
  { value: 'founding', label: `Founding (${FOUNDING_RATE}/week)` },
  { value: 'standard', label: `Standard (${STANDARD_RATE}/week)` },
  { value: 'not-sure', label: 'Not sure yet' },
]

const BACKGROUND_OPTIONS = ['Beginner', 'Intermediate', 'Serious', 'Competitive']

export default function PreRegisterForm() {
  const { status, submit } = useKlaviyo()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipInterest: '',
    trainingBackground: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submit({ ...form, source: 'Grove Website Pre-Registration' })
  }

  if (status === 'success') {
    return (
      <section className="bg-moss px-6 md:px-10 py-24">
        <div className="max-w-xl mx-auto text-center flex flex-col gap-3">
          <h2 className="font-display text-[44px] text-cream">You're in.</h2>
          <p className="font-accent text-lg text-clay">We'll be in touch personally.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="pre-register" className="bg-moss px-6 md:px-10 py-24">
      <div className="max-w-xl mx-auto flex flex-col gap-10">
        <div className="text-center flex flex-col gap-3">
          <h2 className="font-display text-[44px] md:text-[52px] text-cream">Reserve Your Spot</h2>
          <p className="font-accent text-lg text-clay">No payment now. We'll confirm personally.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <FormInput label="First Name" name="firstName" value={form.firstName} onChange={update('firstName')} />
            <FormInput label="Last Name" name="lastName" value={form.lastName} onChange={update('lastName')} />
          </div>
          <FormInput label="Email" name="email" type="email" required value={form.email} onChange={update('email')} />
          <FormInput label="Phone" name="phone" type="tel" value={form.phone} onChange={update('phone')} />
          <FormSelect
            label="Membership Interest"
            name="membershipInterest"
            options={MEMBERSHIP_OPTIONS}
            value={form.membershipInterest}
            onChange={update('membershipInterest')}
          />
          <FormSelect
            label="Training Background"
            name="trainingBackground"
            options={BACKGROUND_OPTIONS}
            value={form.trainingBackground}
            onChange={update('trainingBackground')}
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-cream text-earth font-body text-[11px] tracking-[4px] uppercase py-[18px] mt-2 hover:bg-cream-dark transition-colors disabled:opacity-60"
          >
            {status === 'submitting' ? 'Submitting…' : 'Secure My Spot →'}
          </button>

          {status === 'error' && (
            <p className="font-body text-xs text-clay text-center">Something went wrong. Try again shortly.</p>
          )}

          <p className="font-body text-[9px] text-cream/25 text-center">
            Limited to 50 founding members total. No payment required.
          </p>
        </form>
      </div>
    </section>
  )
}
