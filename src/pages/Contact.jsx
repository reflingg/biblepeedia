import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const contactItems = [
  { icon: '📍', label: 'Address', value: '12 Gospel Lane, Garki, Abuja, Nigeria' },
  { icon: '📧', label: 'Email', value: 'hello@biblepeedia.org' },
  { icon: '📞', label: 'Phone', value: '+234 (0) 800 BIBLE 01' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri, 8:00 AM – 5:00 PM' },
]

const faqs = [
  { q: 'How can I volunteer with Biblepeedia?', a: 'We welcome volunteers in teaching, outreach, media, administration, and more. Fill out the contact form and mention you\'d like to volunteer — we\'ll get back to you within 48 hours.' },
  { q: 'Are all your programs really free?', a: 'Yes! All Biblepeedia programs, events, and resources are completely free to participants. We are funded through donations and partnerships.' },
  { q: 'How can my church partner with Biblepeedia?', a: 'We partner with churches of all denominations and sizes. Reach out via our contact form and we\'ll schedule a meeting to discuss how we can serve your congregation.' },
  { q: 'Can I request a speaker for my event?', a: 'Yes, we regularly send speakers to church services, school assemblies, and community events. Use the contact form with details of your event and we\'ll do our best to accommodate.' },
]

export default function Contact() {
  useReveal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !message) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-24 min-h-[380px] flex items-end overflow-hidden bg-dark-blue">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-primary-blue/50 to-dark-blue" />
        <div className="relative z-10 w-full max-w-container mx-auto px-[5vw] pb-16 pt-12">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="text-white/55 no-underline hover:text-primary-gold transition-colors duration-200">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-white/90">Contact</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-tight mb-3">Get in Touch</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Have a question, partnership opportunity, or want to volunteer? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Contact Info */}
          <div className="reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Reach Us</span>
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight tracking-tight mb-5">
              We'd love to hear from you
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you want to volunteer, partner, donate equipment, or just ask a question — our team is always happy to connect.
            </p>
            <ul className="list-none space-y-5 mb-10">
              {contactItems.map(({ icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-light-blue rounded-xl flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">{label}</div>
                    <div className="text-sm text-gray-900 font-medium">{value}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-3">Follow us</p>
              <div className="flex gap-2.5">
                {['Facebook', 'Instagram', 'YouTube'].map(s => (
                  <a key={s} href="#" aria-label={s}
                    className="w-9 h-9 rounded-full border border-border-col flex items-center justify-center text-text-muted no-underline hover:bg-primary-gold hover:text-gray-900 hover:border-primary-gold transition-all duration-200 text-xs font-bold">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-white border border-border-col rounded-2xl p-10 shadow-bp-lg text-center">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Thank you, {name}! We've received your message and will get back to you at {email} within 1–2 business days.
                </p>
                <button onClick={() => { setSubmitted(false); setName(''); setEmail(''); setSubject(''); setMessage('') }}
                  className="bg-primary-blue text-white font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-dark-blue transition-colors duration-200">
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white border border-border-col rounded-2xl p-8 shadow-bp-lg">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">Send a Message</h3>
                <p className="text-text-muted text-sm mb-6">We'll respond within 1–2 business days.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Name *</label>
                      <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name"
                        className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email *</label>
                      <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="email@example.com"
                        className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Subject</label>
                    <input value={subject} onChange={e => setSubject(e.target.value)} type="text" placeholder="How can we help?"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Message *</label>
                    <textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us more…" rows="5"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200 resize-y" />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary-blue text-white font-semibold py-4 rounded-lg text-base hover:bg-dark-blue transition-colors duration-200 hover:-translate-y-px cursor-pointer">
                    Send Message →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-[5vw] bg-surface">
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 reveal">
              <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Questions</span>
              <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight">Frequently Asked Questions</h2>
            </div>
            <ul className="list-none">
              {faqs.map(({ q, a }) => (
                <li key={q} className="border-t border-border-col py-6 first:border-t reveal last:border-b last:border-border-col">
                  <h4 className="font-semibold text-gray-900 mb-2">{q}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
