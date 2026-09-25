import { motion } from 'framer-motion'
import headshot from '../assets/headshot.png'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 sm:flex-row sm:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <p className="mb-3 inline-block -rotate-1 bg-[var(--color-hot)] px-2 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-paper)]">
            Solutions Architect · Slack (Salesforce)
          </p>
          <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl">
            I build agentic
            <br />
            solutions,
            <br />
            <span className="relative inline-block">
              then stay to see
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full text-[var(--color-blaze)]"
              >
                <path d="M2 10 Q75 2 150 8 T298 6" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            <br />
            them work.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c2b2]">
            10+ years designing and delivering enterprise technical solutions, and the
            last six months building hands-on with Slack Bolt, MCP servers, and the
            Salesforce Agentforce platform — the most enjoyable stretch of my career so far.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--color-paper)] shadow-[3px_3px_0_var(--color-hot)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-hot)] dark:border-[#e8e2d3] dark:bg-[#e8e2d3] dark:text-[var(--color-ink)]"
            >
              See what I've built
            </a>
            <a
              href="mailto:michaelcbreeden@gmail.com"
              className="border-2 border-[var(--color-ink)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] dark:border-[#e8e2d3] dark:text-[#e8e2d3] dark:hover:bg-[#e8e2d3] dark:hover:text-[var(--color-ink)]"
            >
              Get in touch
            </a>
            <a
              href="/Michael-Breeden-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2.5 text-sm font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
            >
              Résumé ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, rotate: -3, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative shrink-0 border-4 border-[var(--color-ink)] bg-[var(--color-paper)] p-2.5 shadow-[6px_6px_0_var(--color-ink)] dark:border-[#e8e2d3] dark:bg-[#1f1b14] dark:shadow-[6px_6px_0_#000]"
        >
          <div
            aria-hidden
            className="absolute -top-3 left-1/2 h-6 w-14 -translate-x-1/2 -rotate-2 bg-[var(--color-blaze)]/80"
          />
          <div className="relative h-40 w-40 overflow-hidden sm:h-48 sm:w-48">
            <img
              src={headshot}
              alt="Portrait of Michael Breeden"
              className="h-full w-full object-cover"
              style={{ filter: 'grayscale(1) contrast(1.15)' }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{ backgroundColor: 'var(--color-hot)', opacity: 0.35 }}
            />
          </div>
          <p className="stamp mt-2 -rotate-1 text-center text-sm">Los Angeles, CA</p>
        </motion.div>
      </div>
    </section>
  )
}
