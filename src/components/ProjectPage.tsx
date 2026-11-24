import { customerProjects } from '../data/projects'
import ArchDiagram from './ArchDiagram'
import PageShell from './PageShell'
import { EMAIL } from '../data/site'

export default function ProjectPage({ slug }: { slug: string }) {
  const p = customerProjects.find((x) => x.slug === slug)
  if (!p) return null
  const others = customerProjects.filter((x) => x.slug !== slug)

  return (
    <PageShell>
      <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
        <a href="/" className="underline underline-offset-4">Home</a> /{' '}
        <a href="/work" className="underline underline-offset-4">Work</a> / {p.title}
      </p>
      <span className="mt-4 inline-block -rotate-1 bg-[var(--color-hot)] px-2 py-1 font-display text-[11px] font-bold uppercase tracking-wide text-[var(--color-paper)]">
        {p.tag}
      </span>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl">{p.title}</h1>
      <p className="mt-4 border-l-4 border-[var(--color-hot)] pl-3 text-base font-bold leading-snug">{p.why}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <div className="border border-[var(--color-ink)] px-2.5 py-1.5 dark:border-[#3a3a3a]">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">Status</p>
          <p className="font-display text-xs">{p.status}</p>
        </div>
        <div className="border border-[var(--color-ink)] px-2.5 py-1.5 dark:border-[#3a3a3a]">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">{p.timeLabel}</p>
          <p className="font-display text-xs">{p.buildTime}</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-xl">The need</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{p.need}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl">What I built</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{p.built}</p>
        <div className="mt-4 max-w-md">
          <ArchDiagram name={p.diagram} />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl">How it works</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
          {p.howItWorks.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl">What I learned, and what is not claimed</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
          {p.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="border border-[var(--color-ink)] px-2 py-0.5 text-xs uppercase tracking-wide dark:border-[#3a3a3a] dark:text-[#c9c9c9]">
            {s}
          </span>
        ))}
      </div>

      <section className="mt-12 border-t-2 border-[var(--color-ink)] pt-6 dark:border-[#3a3a3a]">
        <h2 className="font-display text-lg">More work</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {others.map((o) => (
            <li key={o.slug}>
              <a href={`/work/${o.slug}`} className="font-bold underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]">
                {o.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          Want to talk about something like this?{' '}
          <a href={`mailto:${EMAIL}`} className="font-bold underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]">
            Get in touch
          </a>{' '}
          or <a href="/#ask" className="font-bold underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]">ask the agent</a>.
        </p>
      </section>
    </PageShell>
  )
}
