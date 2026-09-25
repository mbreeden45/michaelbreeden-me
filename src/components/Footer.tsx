export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 py-14 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Let's talk</h2>
        <p className="mb-6 mt-1.5 text-slate-500 dark:text-slate-400">
          Happy to walk through any of this in more detail.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>© {new Date().getFullYear()} Michael Breeden</span>
          <span className="flex gap-3">
            <a
              href="mailto:michaelcbreeden@gmail.com"
              className="text-slate-600 hover:underline dark:text-slate-300"
            >
              michaelcbreeden@gmail.com
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://linkedin.com/in/michaelcbreeden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:underline dark:text-slate-300"
            >
              LinkedIn
            </a>
          </span>
        </div>
        <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
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
