import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const programs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="12" y1="7" x2="16" y2="7"/><line x1="12" y1="11" x2="16" y2="11"/>
      </svg>
    ),
    title: 'Bible Literacy Classes',
    desc: 'Free weekly classes for adults and youth covering foundational Bible knowledge, book-by-book study, and practical application in everyday life.',
    details: ['Book-by-book study curriculum', 'Practical life application', 'Certificate on completion', 'Available in 3 languages'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Children's Scripture Program",
    desc: 'Engaging, age-appropriate Bible stories, memory verse challenges, and interactive lessons designed for children aged 5–15.',
    details: ['Ages 5–15', 'Memory verse competitions', 'Fun Bible games', 'Digital learning tools'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'School Outreach',
    desc: 'Partnering with schools to provide Bible-based character education, values formation, and spiritual development resources for students.',
    details: ['38 partner schools', 'Weekly character classes', 'Teacher training included', 'Free printed materials'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <circle cx="12" cy="14" r="3"/><path d="M16.72 9.28A6 6 0 0 1 18 14"/><path d="M7.28 9.28A6 6 0 0 0 6 14"/>
        <path d="M20.94 6.06A10 10 0 0 1 22 14"/><path d="M3.06 6.06A10 10 0 0 0 2 14"/>
        <line x1="12" y1="17" x2="12" y2="21"/><line x1="9" y1="21" x2="15" y2="21"/>
      </svg>
    ),
    title: 'Radio & Media Ministry',
    desc: 'Weekly radio broadcasts and online devotionals bringing scripture-based teaching to thousands across the region each week.',
    details: ['Weekly live broadcasts', 'Online podcast archive', 'Social media devotionals', '5,000+ weekly listeners'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Rural Community Reach',
    desc: 'Dedicated outreach teams traveling to underserved rural areas with Bibles, printed materials, and live teaching sessions.',
    details: ['Monthly rural visits', 'Free Bible distribution', '15+ rural communities', 'Local volunteer network'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary-blue">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Leadership Training',
    desc: 'Equipping church leaders, Sunday school teachers, and community volunteers with tools to teach the Bible more effectively.',
    details: ['Quarterly training workshops', 'Teaching resource kits', 'Mentorship program', 'Certification pathway'],
  },
]

export default function Programs() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-24 min-h-[400px] flex items-end overflow-hidden bg-dark-blue">
        <img src="/assets/images/hero/1..jpeg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="page-hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full max-w-container mx-auto px-[5vw] pb-16 pt-12">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="text-white/55 no-underline hover:text-primary-gold transition-colors duration-200">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-white/90">Programs</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-tight mb-3">Programs &amp; Initiatives</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Six transformative programs designed to educate, empower, and equip communities with a deeper understanding of scripture.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map(({ icon, title, desc, details }) => (
            <div key={title} className="bg-white border border-border-col rounded-2xl p-8 hover:shadow-bp-lg hover:-translate-y-1 transition-all duration-300 reveal">
              <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center mb-5">{icon}</div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="list-none space-y-1.5">
                {details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-text-secondary">
                    <span className="text-primary-gold font-bold text-xs">→</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-blue py-20 px-[5vw] text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-3">Want to bring a program to your community?</h2>
          <p className="text-white/75 mb-8 leading-relaxed">We partner with churches, schools, and community organizations across Nigeria to expand our reach.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-gold-dark transition-all duration-200">Partner With Us →</Link>
            <Link to="/donate" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-white/10 transition-all duration-200">Support a Program</Link>
          </div>
        </div>
      </section>
    </>
  )
}
