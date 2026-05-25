import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const tiers = [
  { amount: '5,000', raw: '5000', impact: 'Prints 2 Bibles' },
  { amount: '15,000', raw: '15000', impact: 'Funds a class session' },
  { amount: '50,000', raw: '50000', impact: 'Funds a rural outreach trip' },
  { amount: 'Custom', raw: '', impact: 'Your choice' },
]

const impactItems = [
  { icon: '📖', title: '₦5,000', desc: 'Prints 2 Bibles for rural communities' },
  { icon: '🏫', title: '₦15,000', desc: 'Funds one full week of Bible literacy classes' },
  { icon: '🚐', title: '₦50,000', desc: 'Covers a complete rural outreach trip' },
  { icon: '🎓', title: '₦100,000', desc: 'Trains 5 Sunday school teachers' },
]

export default function Donate() {
  useReveal()
  const [selectedTier, setSelectedTier] = useState('5000')
  const [customAmount, setCustomAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleTierClick(raw) {
    setSelectedTier(raw)
    if (raw) setCustomAmount(raw)
    else setCustomAmount('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || (!customAmount && !selectedTier)) return
    setSubmitted(true)
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

            <div className="mt-8 bg-light-blue rounded-2xl p-6 border border-primary-blue/20">
              <h4 className="font-semibold text-gray-900 mb-2">Other ways to give</h4>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                You can also donate via bank transfer. All donations are tax-deductible.
              </p>
              <div className="text-sm text-text-secondary space-y-1">
                <div><strong>Bank:</strong> First Bank of Nigeria</div>
                <div><strong>Account Name:</strong> Biblepeedia NGO</div>
                <div><strong>Account No:</strong> 1234567890</div>
              </div>
            </div>
          </div>

          {/* Right — Donation Form */}
          <div className="reveal">
            {submitted ? (
              <div className="bg-white border border-border-col rounded-2xl p-10 shadow-bp-lg text-center">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Thank you, {name}!</h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  Your generous donation has been received. We'll send a confirmation and receipt to {email}.
                  God bless you for your giving!
                </p>
                <button onClick={() => { setSubmitted(false); setName(''); setEmail(''); setPhone(''); }}
                  className="bg-primary-blue text-white font-semibold px-6 py-3 rounded-lg cursor-pointer hover:bg-dark-blue transition-colors duration-200">
                  Make Another Gift
                </button>
              </div>
            ) : (
              <div className="bg-white border border-border-col rounded-2xl p-8 shadow-bp-lg">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-1">Make a Donation</h3>
                <p className="text-text-muted text-sm mb-6">Your contribution, no matter the size, makes a difference.</p>

                {/* Tier Selector */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-800 mb-3">Select Amount (₦)</p>
                  <div className="grid grid-cols-2 gap-3">
                    {tiers.map(({ amount, raw, impact }) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleTierClick(raw)}
                        className={`border-2 rounded-xl p-3 text-center cursor-pointer transition-all duration-200 ${selectedTier === raw ? 'border-primary-blue bg-light-blue' : 'border-border-col hover:border-primary-blue/50'}`}
                      >
                        <div className={`font-heading font-bold text-lg ${selectedTier === raw ? 'text-primary-blue' : 'text-gray-800'}`}>
                          {amount === 'Custom' ? 'Custom' : `₦${amount}`}
                        </div>
                        <div className="text-xs text-text-muted mt-0.5">{impact}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Full Name *</label>
                    <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your full name"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Email Address *</label>
                    <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@example.com"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone Number</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+234 000 0000 000"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1.5">Amount (₦) *</label>
                    <input required value={customAmount} onChange={e => { setCustomAmount(e.target.value); setSelectedTier('') }} type="number" placeholder="Enter amount"
                      className="w-full px-4 py-2.5 border border-border-col rounded-lg text-sm outline-none focus:border-primary-blue transition-colors duration-200" />
                  </div>
                  <button type="submit"
                    className="w-full bg-primary-blue text-white font-semibold py-4 rounded-lg text-base hover:bg-dark-blue transition-colors duration-200 hover:-translate-y-px cursor-pointer mt-2">
                    Donate Now ✦
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">🔒 Secure &amp; encrypted donation processing</p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 px-[5vw] text-center border-t border-border-col">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading text-2xl font-bold text-gray-900 mb-3">Want to give in other ways?</h2>
          <p className="text-text-muted leading-relaxed mb-6">You can also volunteer your time, donate equipment, or partner with us as an organization.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-dark-blue transition-all duration-200">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
