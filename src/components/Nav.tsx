import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#beyond', label: 'Beyond Work' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-[var(--color-ink)] bg-[var(--color-paper)]/95 backdrop-blur-sm dark:border-[#3a3a3a] dark:bg-[var(--color-paper-dark)]/95">
      <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap bg-[var(--color-ink)] px-2 py-1 font-display text-sm text-[var(--color-paper)] dark:bg-[var(--color-paper)] dark:text-[var(--color-ink)]"
        >
          M. BREEDEN
        </a>
        <nav className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto sm:justify-center sm:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-[var(--color-ink)] underline decoration-2 decoration-transparent underline-offset-4 transition hover:decoration-[var(--color-hot)] dark:text-[#ececec]"
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
