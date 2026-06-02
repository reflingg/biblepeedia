import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

const programsPreview = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="12" y1="7" x2="16" y2="7"/><line x1="12" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    title: 'Bible Literacy Classes',
    desc: 'Free weekly classes for adults and youth covering foundational Bible knowledge and practical application.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Children's Scripture Program",
    desc: 'Engaging, age-appropriate Bible stories and memory verse challenges for children aged 5–15.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'School Outreach',
    desc: 'Partnering with schools to provide Bible-based character education and spiritual development resources.',
  },
]

const eventsPreview = [
  { day: '14', month: 'Jul', year: '2025', type: 'Quiz', title: 'Biblepeedia Quiz Competition', venue: 'Abuja · 10:00 AM', upcoming: false },
  { day: '06', month: 'Jun', year: '2026', type: 'Quiz', title: 'Biblepeedia Quiz Competition', venue: 'Abuja · 10:00 AM', upcoming: true },
]

const heroSlides = [
  { src: '/assets/images/hero/1..jpeg', alt: 'Young students learning scripture' },
  { src: '/assets/images/hero/2..jpeg', alt: 'Students engaged in Bible study' },
]

const learnGlob = import.meta.glob('../assets/learn/*.jpg', { eager: true })
const learnImages = Object.values(learnGlob).map(m => m.default)

const impactStats = [
  { num: '12,000+', lbl: 'Children Reached' },
  { num: '38', lbl: 'Communities Served' },
  { num: '6', lbl: 'Active Programs' },
  { num: '98%', lbl: 'Participant Satisfaction' },
]

export default function Home() {
  useReveal()
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setHeroIdx(i => (i + 1) % heroSlides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-24 min-h-screen grid grid-cols-1 md:grid-cols-[55%_45%] overflow-hidden">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-[8vw] md:pr-[4vw] py-20 reveal">
          <span className="self-start inline-flex items-center gap-2 bg-gold-light text-gold-dark border border-primary-gold rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-6">
            ✦ Faith-Based Education for Africa's Youth
          </span>
          <h1 className="font-heading font-black text-[clamp(2.8rem,4.5vw,4rem)] leading-[1.08] tracking-tight text-gray-900 mb-6">
            Inspiring Young Minds<br />
            Through <span className="gold-underline">Faith.</span>
          </h1>
          <p className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed">
            Biblepeedia is a Nigerian nonprofit equipping young people with the knowledge of scripture — through
            schools, communities, and digital outreach across Africa.
          </p>
          <div className="flex gap-3 flex-wrap mb-12">
            <Link to="/about" className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-dark-blue transition-all duration-200 hover:-translate-y-px">
              Learn More →
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 border-2 border-primary-blue text-primary-blue font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-light-blue transition-all duration-200">
              Our Story
            </Link>
          </div>
          <div className="flex gap-10 pt-8 border-t border-border-col flex-wrap">
            {[{ n: '12K+', l: 'Lives Reached' }, { n: '38', l: 'Communities' }, { n: '6', l: 'Active Programs' }].map(({ n, l }) => (
              <div key={l}>
                <div className="font-heading text-3xl font-bold text-primary-blue">{n}</div>
                <div className="text-xs text-text-muted font-medium mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero slideshow */}
        <div className="hero-image-wrap relative overflow-hidden min-h-[55vw] md:min-h-0 order-first md:order-last" style={{ minHeight: 'calc(100vh - 96px)' }}>
          {heroSlides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${i === heroIdx ? 'opacity-100' : 'opacity-0'}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="absolute bottom-5 right-5 flex gap-2 z-10">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${i === heroIdx ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT BAR ── */}
      <div className="bg-primary-blue py-14 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactStats.map(({ num, lbl }) => (
            <div key={lbl} className="reveal">
              <div className="font-heading text-[clamp(2rem,3.5vw,2.6rem)] font-bold text-white leading-none mb-1.5">{num}</div>
              <div className="text-sm text-white/70 font-medium">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-bp-lg reveal">
            <img
              src="/assets/images/hero/2..jpeg"
              alt="Students engaged in Bible study"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 bg-black/65 backdrop-blur-sm text-white rounded-xl px-4 py-3">
              <strong className="block font-heading text-2xl text-primary-gold leading-none mb-1">2018</strong>
              <span className="text-xs opacity-80">Founded with a mission</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Who We Are</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-4">
              Building Bible literacy, one community at a time
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Founded with a passion for scripture and a heart for service, Biblepeedia equips young people and their
              communities with the tools, resources, and education needed to deeply understand and apply the Word of God.
            </p>
            <ul className="list-none mb-8 space-y-0">
              {[
                'Scripture-centered programs for children and youth',
                'Community outreach reaching rural and underserved areas',
                'Free materials, translated resources, and multilingual support',
                'Digital learning tools and radio broadcasts',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 border-b border-border-col last:border-b-0 text-sm text-text-secondary leading-relaxed">
                  <span className="inline-flex items-center justify-center w-5 h-5 min-w-[20px] rounded-full bg-light-blue text-primary-blue text-xs font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-dark-blue transition-all duration-200 hover:-translate-y-px">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEARNING IN ACTION ── */}
      {learnImages.length > 0 && (
        <section className="py-20 px-[5vw] bg-surface overflow-hidden">
          <div className="max-w-container mx-auto">
            <div className="mb-10 reveal">
              <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">In the Classroom</span>
              <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight">Learning in Action</h2>
              <p className="text-text-muted mt-2 max-w-md leading-relaxed">Our team on the ground — equipping young minds with the Word.</p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
              {learnImages.map((src, i) => (
                <div key={i} className="flex-shrink-0 w-72 h-52 rounded-2xl overflow-hidden snap-start reveal">
                  <img src={src} alt={`Learning session ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROGRAMS TEASER ── */}
      <section className="py-24 px-[5vw] bg-surface">
        {/* Header row */}
        <div className="max-w-container mx-auto flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">What We Do</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-3">Programs &amp; Initiatives</h2>
            <p className="text-text-muted max-w-md leading-relaxed">Six transformative programs designed to educate, empower, and equip communities with a deeper understanding of scripture.</p>
          </div>
          <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue no-underline hover:gap-3 transition-all duration-200 whitespace-nowrap">
            Learn More →
          </Link>
        </div>

        {/* Cards */}
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {programsPreview.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-border-col shadow-bp-sm hover:shadow-bp-md hover:-translate-y-1 transition-all duration-300 reveal flex flex-col">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                {icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed flex-1">{desc}</p>
              <Link to="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-blue no-underline mt-4 hover:gap-2 transition-all duration-200">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENTS TEASER ── */}
      <section className="py-24 px-[5vw]">
        {/* Header row */}
        <div className="max-w-container mx-auto flex flex-wrap items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Events</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-3">Events &amp; Gatherings</h2>
            <p className="text-text-muted max-w-md leading-relaxed">All events are open to the public and free to attend.</p>
          </div>
          <Link to="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-blue no-underline hover:gap-3 transition-all duration-200 whitespace-nowrap">
            View All Events →
          </Link>
        </div>

        {/* Cards */}
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {eventsPreview.map(({ day, month, year, type, title, venue, upcoming }) => (
            <div key={`${day}-${month}-${year}`} className={`bg-white rounded-2xl p-6 border border-border-col shadow-bp-sm hover:shadow-bp-md hover:-translate-y-1 transition-all duration-300 reveal ${upcoming ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0 ${upcoming ? 'bg-gray-400' : 'bg-primary-blue'}`}>
                  <span className="font-heading font-bold text-xl leading-none">{day}</span>
                  <span className="text-[10px] opacity-80 uppercase tracking-wide">{month}</span>
                  <span className="text-[9px] opacity-60 tracking-wide">{year}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs font-semibold text-primary-blue bg-light-blue px-3 py-1 rounded-full">{type}</span>
                  {upcoming && <span className="text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">Upcoming</span>}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 leading-snug">{title}</h4>
              <p className="text-text-muted text-sm mb-4">📍 {venue}</p>
              <Link to="/events" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-dark border border-primary-gold/40 rounded-full px-3.5 py-1.5 no-underline hover:bg-primary-gold hover:text-gray-900 transition-all duration-200">
                {upcoming ? 'Register →' : 'View Photos →'}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="bg-dark-blue py-24 px-[5vw] text-center">
        <div className="max-w-2xl mx-auto reveal">
          <span className="inline-block text-primary-gold text-xs font-semibold tracking-[0.1em] uppercase mb-4">Make a Difference</span>
          <h2 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white mb-4">
            Every gift plants the Word in a young heart
          </h2>
          <p className="text-white/72 text-lg leading-relaxed mb-10">
            Your donation helps us print Bibles, train teachers, and reach remote communities across Nigeria. No gift is too small.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/donate" className="inline-flex items-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-gold-dark transition-all duration-200 hover:-translate-y-px">
              Donate Now ✦
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-white/10 hover:border-white transition-all duration-200">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
