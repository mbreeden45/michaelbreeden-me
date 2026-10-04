import { personalProjects } from '../data/projects'

export default function PersonalProjects() {
  return (
    <div className="mt-12">
      <h3 className="mb-1 font-display text-lg">Personal builds</h3>
      <p className="mb-4 text-sm text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
        Live and clickable. This is how I keep learning.
      </p>
      <ul className="border-t-2 border-[var(--color-ink)] dark:border-[#3a3a3a]">
        {personalProjects.map((p) => (
          <li
            key={p.title}
            className="grid gap-2 border-b border-dashed border-[var(--color-ink)]/40 py-4 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6 dark:border-[#3a3a3a]"
          >
            <div>
              <h4 className="font-display text-sm">{p.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
                {p.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-[var(--color-ink)] px-2 py-0.5 text-xs uppercase tracking-wide dark:border-[#3a3a3a] dark:text-[#c9c9c9]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline decoration-2 hover:text-[var(--color-hot)]"
            >
              LIVE DEMO →
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
