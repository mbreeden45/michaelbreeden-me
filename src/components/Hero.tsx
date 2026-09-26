import { motion } from 'framer-motion'
import headshot from '../assets/headshot.png'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 sm:flex-row sm:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <p className="mb-3 inline-flex items-center gap-1.5 -rotate-1 bg-[var(--color-ink)] px-2 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-paper)] dark:bg-[#ececec] dark:text-[var(--color-ink)]">
            <span className="h-2 w-2 bg-[var(--color-hot)]" />
            Solution Architect · Slack (Salesforce)
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
                className="absolute -bottom-1 left-0 h-3 w-full text-[var(--color-hot)]"
              >
                <path d="M2 10 Q75 2 150 8 T298 6" stroke="currentColor" strokeWidth="6" fill="none" />
              </svg>
            </span>
            <br />
            them work.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
            10+ years designing and delivering enterprise technical solutions, and the
            last six months building hands-on with Slack Bolt, MCP servers, and the
            Salesforce Agentforce platform — the most enjoyable stretch of my career so far.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--color-paper)] shadow-[3px_3px_0_var(--color-hot)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-hot)] dark:border-[#ececec] dark:bg-[#ececec] dark:text-[var(--color-ink)]"
            >
              See what I've built
            </a>
            <a
              href="mailto:michaelcbreeden@gmail.com"
              className="border-2 border-[var(--color-ink)] px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] dark:border-[#ececec] dark:text-[#ececec] dark:hover:bg-[#ececec] dark:hover:text-[var(--color-ink)]"
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
          initial={{ opacity: 0, rotate: -5, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative flex shrink-0 flex-col justify-center border-4 border-[var(--color-ink)] bg-[var(--color-paper)] p-3 shadow-[7px_7px_0_var(--color-ink)] dark:border-[#ececec] dark:bg-[#1a1a1a] dark:shadow-[7px_7px_0_#000]"
        >
          <div
            aria-hidden
            className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 border border-black/20 bg-white/80 shadow-sm"
          />
          <div className="relative h-56 w-48 overflow-hidden sm:h-72 sm:w-64">
            <img
              src={headshot}
              alt="Portrait of Michael Breeden"
              className="halftone-photo h-full w-full object-cover"
              style={{ objectPosition: '50% 15%' }}
            />
            <div className="halftone-dots" />
          </div>
          <p className="stamp mt-2 -rotate-1 text-center text-sm">Los Angeles, CA</p>
        </motion.div>
      </div>
    </section>
  )
}
