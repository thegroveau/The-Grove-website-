import { useState } from 'react'
import PageHero from '../components/ui/PageHero.jsx'
import FormInput from '../components/ui/FormInput.jsx'
import FormSelect from '../components/ui/FormSelect.jsx'

const SUBJECTS = ['General', 'Membership', 'Supplements', 'Apparel', 'Training Camps', 'Press']

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' })
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHero eyebrow="Get In Touch" title="CONTACT" sub="hello@thegroveau.com" />

      <section className="bg-earth px-6 md:px-10 py-20">
        <div className="max-w-md mx-auto">
          {status === 'success' ? (
            <div className="text-center flex flex-col gap-3">
              <h2 className="font-display text-3xl text-cream">Message sent.</h2>
              <p className="font-accent text-lg text-clay">We'll get back to you personally.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <FormInput label="Name" name="name" required value={form.name} onChange={update('name')} />
              <FormInput label="Email" name="email" type="email" required value={form.email} onChange={update('email')} />
              <FormSelect label="Subject" name="subject" options={SUBJECTS} value={form.subject} onChange={update('subject')} />
              <label className="flex flex-col gap-2">
                <span className="font-body text-[9px] tracking-[3px] uppercase text-cream/50">Message *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className="bg-earth border border-sage/20 text-cream font-body font-light text-sm px-4 py-3 focus:outline-none focus:border-sage/60 resize-none"
                />
              </label>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-cream text-earth font-body text-[11px] tracking-[4px] uppercase py-[18px] mt-2 hover:bg-cream-dark transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Message →'}
              </button>
              {status === 'error' && (
                <p className="font-body text-xs text-clay text-center">Something went wrong. Try again shortly.</p>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
