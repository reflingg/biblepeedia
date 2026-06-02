import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import cePhoto from '../assets/team/ceo.jpeg'
import adminPhoto from '../assets/team/Administrator.jpeg'
import coordinatorPhoto from '../assets/team/Program Coordinator.jpeg'

const values = [
  { icon: '✝', title: 'Scripture-Centered', desc: 'Every program, resource, and initiative is rooted in biblical truth and the transformative power of God\'s Word.' },
  { icon: '🌍', title: 'Community-Driven', desc: 'We go where the need is — local churches, schools, and rural communities across Nigeria and beyond.' },
  { icon: '📖', title: 'Accessible Education', desc: 'Free materials, translated resources, and multilingual support ensuring every child can engage with scripture.' },
  { icon: '🤝', title: 'Partnership-Based', desc: 'We collaborate with churches, schools, and organizations to multiply our impact and reach.' },
  { icon: '⚡', title: 'Innovation in Ministry', desc: 'Using digital tools, radio, and creative formats to make the Bible engaging for the next generation.' },
  { icon: '🌱', title: 'Holistic Development', desc: 'Nurturing spiritual, academic, and personal growth in every young person we reach.' },
]

const team = [
  { name: 'Chidinma Kalu', role: 'Chief Executive Officer', photo: cePhoto, featured: true },
  { name: 'Patience Oluseye', role: 'Administrator', photo: adminPhoto },
  { name: 'Mr. Solomon', role: 'Program Coordinator', photo: coordinatorPhoto },
]

export default function About() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <div className="relative pt-24 min-h-[400px] flex items-end overflow-hidden bg-dark-blue">
        <img src="/assets/images/hero/2..jpeg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="page-hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full max-w-container mx-auto px-[5vw] pb-16 pt-12">
          <nav className="flex items-center gap-2 text-xs text-white/55 mb-5">
            <Link to="/" className="text-white/55 no-underline hover:text-primary-gold transition-colors duration-200">Home</Link>
            <span className="opacity-50">›</span>
            <span className="text-white/90">About</span>
          </nav>
          <h1 className="font-heading text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-white leading-tight mb-3">Our Story &amp; Mission</h1>
          <p className="text-white/75 text-lg max-w-xl leading-relaxed">
            Founded with a passion for scripture and a heart for Africa's youth.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Our Story</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight mb-5">
              Born from a passion to reach every child with the Word
            </h2>
            <p className="text-text-muted leading-relaxed mb-5">
              Biblepeedia was founded in 2018 with a simple but powerful vision: that no child in Africa should grow up
              without access to the transformative knowledge of scripture. What began as small Bible study sessions in
              Abuja has grown into a nationwide movement touching over 12,000 young lives.
            </p>
            <p className="text-text-muted leading-relaxed mb-5">
              We believe the Word of God, when made accessible and engaging, has the power to shape character, build
              futures, and transform entire communities. That conviction drives everything we do.
            </p>
            <p className="text-text-muted leading-relaxed">
              Today, Biblepeedia operates six active programs spanning Bible literacy, children's education, school
              partnerships, radio ministry, rural outreach, and leadership training — all free of charge to participants.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-bp-lg reveal">
            <img src="/assets/images/hero/1..jpeg" alt="Biblepeedia community outreach" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-5 right-5 bg-white rounded-xl p-4 shadow-bp-md border border-border-col">
              <div className="font-heading text-3xl font-bold text-primary-blue leading-none">98%</div>
              <div className="text-xs text-text-muted mt-1">Participant satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-[5vw] bg-surface">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">Purpose</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight">Our Vision &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-border-col shadow-bp-sm reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-light-blue rounded-xl mb-5 text-2xl">🌟</div>
              <h3 className="font-heading text-2xl font-bold text-primary-blue mb-4 pb-3 border-b-2 border-primary-gold/30">Our Vision</h3>
              <p className="text-text-muted leading-relaxed">
                To build a global platform where children from all nations grow in the knowledge of Scripture and are
                empowered to lead, shine, and serve with purpose — transforming their communities through the power of God's Word.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border-col shadow-bp-sm reveal">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-light-blue rounded-xl mb-5 text-2xl">🎯</div>
              <h3 className="font-heading text-2xl font-bold text-primary-blue mb-4 pb-3 border-b-2 border-primary-gold/30">Our Mission</h3>
              <ol className="list-decimal pl-5 space-y-3 text-text-muted leading-relaxed text-sm">
                <li>To make God's Word fun, accessible, and rewarding for every child through school quizzes, tech-driven learning, and mentorship — preparing them to be spiritual and societal leaders.</li>
                <li>To creatively embed God's Word in the hearts of children through interactive Bible competitions, digital games, and ongoing discipleship, rewarding diligence with opportunities that shape their spiritual and academic futures.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">What We Stand For</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-border-col rounded-2xl p-6 hover:shadow-bp-md hover:-translate-y-1 transition-all duration-300 reveal">
                <div className="w-12 h-12 bg-light-blue rounded-xl flex items-center justify-center text-2xl mb-4">{icon}</div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-blue py-16 px-[5vw]">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ n: '12,000+', l: 'Children Reached' }, { n: '38', l: 'Communities' }, { n: '6', l: 'Programs' }, { n: '7+', l: 'Years of Impact' }].map(({ n, l }) => (
            <div key={l} className="reveal">
              <div className="font-heading text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-white leading-none mb-2">{n}</div>
              <div className="text-sm text-white/70 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-[5vw]">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <span className="inline-block text-primary-blue text-xs font-semibold tracking-[0.1em] uppercase mb-3">The People</span>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight">Meet Our Team</h2>
            <p className="text-text-muted mt-3 leading-relaxed">A passionate group of educators, ministers, and community leaders committed to transforming lives through scripture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
            {team.map(({ name, role, photo, featured }) => (
              <div key={name} className={`text-center bg-white border border-border-col rounded-2xl hover:shadow-bp-lg hover:-translate-y-2 transition-all duration-300 reveal group ${featured ? 'p-10 shadow-bp-sm scale-105' : 'p-8'}`}>
                {photo ? (
                  <div className={`rounded-full overflow-hidden mx-auto mb-5 border-4 border-light-blue group-hover:border-primary-blue transition-all duration-300 group-hover:scale-105 ${featured ? 'w-48 h-48' : 'w-40 h-40'}`}>
                    <img src={photo} alt={name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                ) : (
                  <div className={`rounded-full bg-light-blue flex items-center justify-center text-4xl mx-auto mb-5 group-hover:scale-105 transition-all duration-300 ${featured ? 'w-48 h-48' : 'w-40 h-40'}`}>👨‍🏫</div>
                )}
                <h4 className={`font-semibold text-gray-900 mb-1 ${featured ? 'text-lg' : ''}`}>{name}</h4>
                <span className="text-sm text-text-muted">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-blue py-20 px-[5vw] text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-white mb-3">Join us in transforming lives</h2>
          <p className="text-white/75 mb-8 leading-relaxed">Whether you volunteer, donate, or partner with us — every contribution moves us closer to our vision.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/donate" className="inline-flex items-center gap-2 bg-primary-gold text-gray-900 font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-gold-dark transition-all duration-200">Donate Now ✦</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold text-sm px-6 py-3 rounded-lg no-underline hover:bg-white/10 transition-all duration-200">Get Involved</Link>
          </div>
        </div>
      </section>
    </>
  )
}
