import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const eventGlob = import.meta.glob('../assets/events/*.jpg', { eager: true })
const galleryImages = Object.values(eventGlob).map(m => m.default)

const publicGallery = [
  '/assets/images/events/3..jpeg',
  '/assets/images/events/IMG-20250917-WA0009.jpg.jpeg',
  '/assets/images/events/IMG_3582.png',
]
const allGalleryImages = [...galleryImages, ...publicGallery]

const events = [
  { day: '22', month: 'May', year: '2025', type: 'Workshop', title: 'How to Study Your Bible Effectively', venue: 'Abuja Community Centre', time: '10:00 AM', desc: 'A practical, hands-on workshop teaching proven methods for deeper Bible study — from inductive study to Scripture memorization.' },
  { day: '07', month: 'Jun', year: '2025', type: 'Outreach', title: 'Rural Scripture Distribution Drive', venue: 'Kuje, Abuja', time: '8:00 AM', desc: 'Join our team as we travel to Kuje and surrounding villages to distribute Bibles and conduct open-air scripture sessions.' },
  { day: '15', month: 'Jun', year: '2025', type: 'Conference', title: 'Annual Biblepeedia Educators Summit', venue: 'Transcorp Hilton, Abuja', time: '9:00 AM', desc: 'Our flagship annual event bringing together educators, church leaders, and youth workers to share best practices in scripture education.' },
  { day: '29', month: 'Jun', year: '2025', type: 'Youth', title: 'Youth Bible Bowl Competition', venue: 'National Ecumenical Centre', time: '11:00 AM', desc: 'An exciting inter-school Bible knowledge competition for students aged 10–18, with prizes for the top three teams.' },
  { day: '12', month: 'Jul', year: '2025', type: 'Training', title: 'Sunday School Teachers Training', venue: 'Biblepeedia HQ, Abuja', time: '9:00 AM', desc: 'A one-day intensive training equipping Sunday school teachers with modern teaching methods, curriculum resources, and classroom management skills.' },
  { day: '20', month: 'Jul', year: '2025', type: 'Community', title: 'Open-Air Scripture Evening', venue: 'Millennium Park, Abuja', time: '5:00 PM', desc: 'A free, family-friendly open-air gathering featuring live worship, scripture recitations, and community fellowship.' },
]

const typeColors = {
  Workshop: 'bg-blue-100 text-blue-700',
  Outreach: 'bg-green-100 text-green-700',
  Conference: 'bg-purple-100 text-purple-700',
  Youth: 'bg-yellow-100 text-yellow-700',
  Training: 'bg-orange-100 text-orange-700',
  Community: 'bg-pink-100 text-pink-700',
}

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
  const [activeEvent, setActiveEvent] = useState(null)
  const [lightbox, setLightbox] = useState(null)

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

      {/* Events Grid */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white border border-border-col rounded-2xl p-6 hover:shadow-bp-lg hover:-translate-y-1 transition-all duration-300 reveal flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-blue rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="font-heading font-bold text-2xl leading-none">{event.day}</span>
                  <span className="text-[10px] opacity-80 uppercase tracking-wide">{event.month}</span>
                </div>
                <div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[event.type] || 'bg-gray-100 text-gray-600'}`}>{event.type}</span>
                  <p className="text-xs text-text-muted mt-2">{event.year}</p>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 leading-snug">{event.title}</h4>
              <p className="text-text-muted text-sm mb-1">📍 {event.venue}</p>
              <p className="text-text-muted text-sm mb-4">🕐 {event.time}</p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">{event.desc}</p>
              <button
                onClick={() => setActiveEvent(event)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark border border-primary-gold/40 rounded-full px-4 py-2 cursor-pointer bg-transparent hover:bg-primary-gold hover:text-gray-900 transition-all duration-200 self-start"
              >
                Register →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-[5vw] bg-surface">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Our Moments</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold leading-tight tracking-tight">Event Gallery</h2>
            <p className="text-text-muted mt-3 leading-relaxed">Winners, celebrations, and moments that matter.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {allGalleryImages.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group reveal"
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  alt={`Event highlight ${i + 1}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
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
