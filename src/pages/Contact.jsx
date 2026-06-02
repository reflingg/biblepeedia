import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

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

          {/* Email Info */}
          <div className="reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Reach Us</span>
            <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight tracking-tight mb-5">
              We'd love to hear from you
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether you want to volunteer, partner, donate, or just ask a question — our team is always happy to connect.
            </p>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-light-blue rounded-xl flex items-center justify-center text-lg flex-shrink-0">📧</div>
              <div>
                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">Email</div>
                <a href="mailto:hello@biblepeedia.org" className="text-sm text-primary-blue font-medium no-underline hover:underline">
                  hello@biblepeedia.org
                </a>
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
    </>
  )
}
