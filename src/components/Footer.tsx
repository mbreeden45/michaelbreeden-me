import TornDivider from './TornDivider'

export default function Footer() {
  return (
    <footer id="contact" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-14">
        <h2 className="font-display text-2xl">Let's talk</h2>
        <p className="mb-6 mt-1.5 text-sm text-[var(--color-ink-soft)] dark:text-[#c9c2b2]">
          Happy to walk through any of this in more detail.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm dark:text-[#c9c2b2]">
          <span className="font-mono text-xs">© {new Date().getFullYear()} Michael Breeden</span>
          <span className="flex gap-3 font-bold uppercase tracking-wide">
            <a
              href="mailto:michaelcbreeden@gmail.com"
              className="underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
            >
              Email
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://linkedin.com/in/michaelcbreeden"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
            >
              LinkedIn
            </a>
          </span>
        </div>
        <p className="mt-4 font-mono text-xs text-[var(--color-ink-soft)]/70 dark:text-[#8a8270]">
          Last updated{' '}
          {new Date(__LAST_UPDATED__).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </footer>
  )
}
