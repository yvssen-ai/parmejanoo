import logo from '../assets/images/parmejano-logo-mark.jpg'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-parm-black px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-parm-cream/10 pb-10 sm:flex-row sm:justify-between">
          <div className="flex items-start gap-4">
            <img src={logo} alt="Parmejano" className="h-16 w-auto object-contain" />
            <div>
              <p className="font-display text-lg font-semibold text-parm-cream">Parmejano</p>
              <p className="mt-1 max-w-xs font-body text-sm text-parm-cream/55">
                True Neapolitan mastery. Wood-fired pizza, built your way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-parm-cream/40">
                Explore
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-parm-cream/70">
                <li><a href="#menu" className="hover:text-parm-red-light">Menu</a></li>
                <li><a href="#build" className="hover:text-parm-red-light">Build Your Own</a></li>
                <li><a href="#story" className="hover:text-parm-red-light">Our Story</a></li>
                <li><a href="#order" className="hover:text-parm-red-light">Order</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-parm-cream/40">
                Visit
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-parm-cream/70">
                <li>123 Via Roma</li>
                <li>Open daily 11:00–22:00</li>
                <li>hello@parmejano.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-parm-cream/40">
            © {new Date().getFullYear()} Parmejano. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-xs text-parm-cream/50 hover:text-parm-red-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
