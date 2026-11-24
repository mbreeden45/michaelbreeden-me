import { customerProjects } from '../data/projects'
import PageShell from './PageShell'
import PersonalProjects from './PersonalProjects'

export default function WorkIndex() {
  return (
    <PageShell>
      <p className="font-mono text-xs uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
        <a href="/" className="underline underline-offset-4">Home</a> / Work
      </p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl">Work</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
        Proofs of concept built from customer calls: Slackbot skills, MCP servers, Slack–Salesforce integrations and a
        Tableau Next brief. Customer details are redacted, and each write-up says what is proven and what is not.
      </p>
      <ul className="mt-8 grid gap-5">
        {customerProjects.map((p) => (
          <li
            key={p.slug}
            className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
              {p.tag} · {p.status}
            </p>
            <h2 className="mt-1 font-display text-lg">
              <a href={`/work/${p.slug}`} className="underline decoration-2 decoration-transparent underline-offset-4 hover:decoration-[var(--color-hot)]">
                {p.title}
              </a>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{p.why}</p>
            <a
              href={`/work/${p.slug}`}
              className="mt-3 inline-block text-sm font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
            >
              Read the write-up →
            </a>
          </li>
        ))}
      </ul>
      <PersonalProjects />
    </PageShell>
  )
}
