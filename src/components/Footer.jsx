import { Link } from 'react-router-dom'

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/>
  </svg>
)
const YouTubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)
const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white/70 pt-16 pb-8 px-[5vw]">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex mb-4">
            <img
              src="/assets/images/logo/Biblepeedia.png"
              alt="Biblepeedia"
              style={{ width: 200, height: 68, objectFit: 'cover', objectPosition: 'center center', background: '#fff', borderRadius: 8 }}
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs mt-3">
            Empowering communities through scripture education, outreach, and Bible literacy across Nigeria and beyond.
          </p>
          <div className="flex gap-2.5 mt-5">
            {[
              { Icon: FacebookIcon, label: 'Facebook', href: '#' },
              { Icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/biblepeediainternational/' },
              { Icon: YouTubeIcon, label: 'YouTube', href: '#' },
              { Icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@biblepeedia' },
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 no-underline hover:bg-primary-gold hover:text-gray-900 hover:border-primary-gold transition-all duration-200">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Organization */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-4">Organization</h4>
          <ul className="list-none space-y-2.5">
            {[['About Us', '/about'], ['Our Team', '/about'], ['Partners', '/contact'], ['Annual Report', '/about']].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-white/60 no-underline text-sm hover:text-primary-gold transition-colors duration-200">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-4">Get Involved</h4>
          <ul className="list-none space-y-2.5">
            {[['Volunteer', '/contact'], ['Partner With Us', '/contact'], ['Donate', '/donate'], ['Events', '/events']].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-white/60 no-underline text-sm hover:text-primary-gold transition-colors duration-200">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
          <ul className="list-none space-y-2.5">
            {[['Events', '/events'], ['Donate', '/donate'], ['Contact', '/contact'], ['Volunteer', '/contact']].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="text-white/60 no-underline text-sm hover:text-primary-gold transition-colors duration-200">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 text-xs text-white/40">
        <span>© 2025 Biblepeedia NGO. All rights reserved.</span>
        <span>Built with faith &amp; purpose</span>
      </div>
    </footer>
  )
}
