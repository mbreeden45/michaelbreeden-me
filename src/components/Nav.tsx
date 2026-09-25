import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-3.5">
        <a href="#top" className="whitespace-nowrap text-sm font-bold tracking-tight">
          Michael Breeden
        </a>
        <nav className="order-3 flex w-full items-center justify-center gap-4 sm:order-none sm:w-auto sm:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#2f5c8a] dark:text-slate-300 dark:hover:text-[#6f9fd6]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
