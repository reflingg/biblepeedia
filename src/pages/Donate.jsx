import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const impactItems = [
  { icon: '📖', title: '₦5,000', desc: 'Prints 2 Bibles for rural communities' },
  { icon: '🏫', title: '₦15,000', desc: 'Funds one full week of Bible literacy classes' },
  { icon: '🚐', title: '₦50,000', desc: 'Covers a complete rural outreach trip' },
  { icon: '🎓', title: '₦100,000', desc: 'Trains 5 Sunday school teachers' },
]

export default function Donate() {
  useReveal()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/donate.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Could not reach the server. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-24 min-h-[380px] flex items-end overflow-hidden bg-dark-blue">
        <div className="page-hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-primary-blue/60 to-dark-blue/90" />
        <div className="relative z-10 w-full max-w-container mx-auto px-[5vw] pb-16 pt-12">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="text-white/55 no-underline hover:text-primary-gold transition-colors duration-200">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-white/90">Donate</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-tight mb-3">Support Our Mission</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Your gift helps us print Bibles, train teachers, and reach young lives across Nigeria with the transformative power of God's Word.
          </p>
        </div>
      </div>

      {/* Impact + Form */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — Impact */}
          <div className="reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Your Impact</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight tracking-tight mb-4">
              See what your gift makes possible
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Every donation — large or small — directly funds programs that transform lives through the Word of God.
              Here's what different giving levels achieve:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactItems.map(({ icon, title, desc }) => (
                <div key={title} className="bg-surface border border-border-col rounded-xl p-5">
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="font-heading font-bold text-primary-blue text-lg mb-1">{title}</div>
                  <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Request Form */}
          <div className="reveal">
            {status === 'success' ? (
              <div className="bg-white border border-border-col rounded-2xl p-10 shadow-bp-lg text-center">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Thank you, {name}! We've received your request and will send the account details to <strong>{email}</strong> shortly. God bless you!
                </p>
                <button
                  onClick={() => { setStatus('idle'); setName(''); setEmail(''); setPhone('') }}
                  className="bg-primary-blue text-white font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-dark-blue transition-colors duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div className="bg-white border border-border-col rounded-2xl p-8 shadow-bp-lg">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Request Account Details</h3>
                <p className="text-text-muted text-sm mb-6">
                  Fill in your details below and we'll send our donation account number directly to your email.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name *</label>
                    <input
                      required value={name} onChange={e => setName(e.target.value)}
                      type="text" placeholder="Your full name"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email Address *</label>
                    <input
                      required value={email} onChange={e => setEmail(e.target.value)}
                      type="email" placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number <span className="text-text-muted font-normal">(optional)</span></label>
                    <input
                      value={phone} onChange={e => setPhone(e.target.value)}
                      type="tel" placeholder="+234 000 0000 000"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-primary-blue text-white font-semibold py-4 rounded-lg text-base hover:bg-dark-blue transition-colors duration-200 hover:-translate-y-px cursor-pointer mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending…' : 'Request Account Number ✦'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">🔒 Your details are kept private and secure.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
