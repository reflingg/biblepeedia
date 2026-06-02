import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const eventGlob = import.meta.glob('../assets/events/*.jpg', { eager: true })
const importedImages = Object.values(eventGlob).map(m => m.default)

const publicGallery = [
  '/assets/images/events/3..jpeg',
  '/assets/images/events/IMG-20250917-WA0009.jpg.jpeg',
  '/assets/images/events/IMG_3582.png',
]

const july2025Gallery = [...importedImages, ...publicGallery]

const events = [
  {
    day: '14', month: 'Jul', year: '2025', type: 'Quiz',
    title: 'Biblepeedia Quiz Competition',
    venue: 'Abuja', time: '10:00 AM',
    desc: 'Our first-ever Biblepeedia event — a lively and Spirit-filled quiz competition bringing together young people to celebrate the Word of God. A day of learning, fellowship, and unforgettable memories.',
    gallery: july2025Gallery,
    upcoming: false,
  },
  {
    day: '06', month: 'Jun', year: '2026', type: 'Quiz',
    title: 'Biblepeedia Quiz Competition',
    venue: 'Abuja', time: '10:00 AM',
    desc: 'The second edition of the Biblepeedia Quiz Competition — another Spirit-filled day of scripture, knowledge, and celebration for young people across Abuja. Stay tuned for more details.',
    gallery: [],
    upcoming: true,
  },
]

function RegisterModal({ event, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email) return
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        {submitted ? (
          <div className="text-center py-4">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">You're registered!</h3>
            <p className="text-text-muted text-sm mb-6">We'll send confirmation details to {email}. See you there!</p>
            <button onClick={onClose} className="bg-primary-blue text-white font-semibold px-6 py-3 rounded-lg cursor-pointer">Close</button>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">Register for Event</h3>
            <p className="text-text-muted text-sm mb-6">{event.title}</p>
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
              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 bg-primary-blue text-white font-semibold text-sm py-3 rounded-lg hover:bg-dark-blue transition-colors duration-200 cursor-pointer">
                  Confirm Registration
                </button>
                <button type="button" onClick={onClose} className="px-4 py-3 border border-border-col rounded-lg text-sm text-text-muted hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function Events() {
  useReveal()
  const [expandedEvent, setExpandedEvent] = useState(null)
  const [activeEvent, setActiveEvent] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const PREVIEW_COUNT = 4

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-24 min-h-[400px] flex items-end overflow-hidden bg-dark-blue">
        <img src="/assets/images/events/IMG_3582.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="page-hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full max-w-container mx-auto px-[5vw] pb-16 pt-12">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="text-white/55 no-underline hover:text-primary-gold transition-colors duration-200">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-white/90">Events</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-tight mb-3">Events &amp; Gatherings</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            All events are open to the public and free to attend. Come and be part of the movement.
          </p>
        </div>
      </div>

      {/* Events List */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto space-y-8">
          {events.map((event) => {
            const key = `${event.day}-${event.month}-${event.year}`
            const isOpen = expandedEvent === key
            const previewImgs = event.gallery.slice(0, PREVIEW_COUNT)
            const remaining = event.gallery.length - PREVIEW_COUNT

            return (
              <div
                key={key}
                className={`bg-white border border-border-col rounded-2xl overflow-hidden shadow-bp-sm transition-all duration-300 reveal ${event.upcoming ? 'opacity-60' : ''}`}
              >
                {/* Collapsed Header — always visible, click to expand */}
                <button
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 cursor-pointer bg-transparent border-0 hover:bg-gray-50/60 transition-colors duration-200"
                  onClick={() => setExpandedEvent(isOpen ? null : key)}
                >
                  {/* Date block */}
                  <div className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0 ${event.upcoming ? 'bg-gray-400' : 'bg-primary-blue'}`}>
                    <span className="font-heading font-bold text-3xl leading-none">{event.day}</span>
                    <span className="text-[11px] opacity-80 uppercase tracking-wide mt-0.5">{event.month}</span>
                    <span className="text-[10px] opacity-60 tracking-wide">{event.year}</span>
                  </div>

                  {/* Title + meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700">{event.type}</span>
                      {event.upcoming && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">Upcoming</span>
                      )}
                    </div>
                    <h4 className="font-heading text-xl font-bold text-gray-900 leading-snug mb-1">{event.title}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                      <span>📍 {event.venue}</span>
                      <span>🕐 {event.time}</span>
                    </div>
                  </div>

                  {/* Preview thumbnails */}
                  {previewImgs.length > 0 && (
                    <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
                      {previewImgs.map((src, i) => (
                        <div key={i} className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      ))}
                      {remaining > 0 && (
                        <div className="w-14 h-14 rounded-lg bg-light-blue flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary-blue">+{remaining}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Chevron */}
                  <div className={`flex-shrink-0 text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>

                {/* Expanded Panel */}
                {isOpen && (
                  <div className="border-t border-border-col px-6 sm:px-8 pb-8 pt-6">
                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">{event.desc}</p>

                    {/* Register button for upcoming */}
                    {event.upcoming && (
                      <button
                        onClick={() => setActiveEvent(event)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark border border-primary-gold/40 rounded-full px-4 py-2 cursor-pointer bg-transparent hover:bg-primary-gold hover:text-gray-900 transition-all duration-200 mb-6"
                      >
                        Register →
                      </button>
                    )}

                    {/* Full gallery */}
                    {event.gallery.length > 0 ? (
                      <>
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">Event Gallery</p>
                        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
                          {event.gallery.map((src, i) => (
                            <div
                              key={i}
                              className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
                              onClick={() => setLightbox(src)}
                            >
                              <img
                                src={src}
                                alt={`${event.title} photo ${i + 1}`}
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center">
                        <p className="text-text-muted text-sm">Photos will appear here after the event.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl font-light cursor-pointer bg-transparent border-0 leading-none"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >✕</button>
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="bg-primary-blue py-20 px-[5vw] text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-3">Want to host a Biblepeedia event?</h2>
          <p className="text-white/75 mb-8 leading-relaxed">We work with churches, schools, and community organizations to bring our programs to new locations.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-gold-dark transition-all duration-200">
            Contact Us →
          </Link>
        </div>
      </section>

      {activeEvent && <RegisterModal event={activeEvent} onClose={() => setActiveEvent(null)} />}
    </>
  )
}
