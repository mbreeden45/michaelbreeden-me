import { motion } from 'framer-motion'
import headshot from '../assets/headshot.png'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-[#2f5c8a]/20 blur-3xl dark:bg-[#6f9fd6]/10"
      />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#2f5c8a] dark:text-[#6f9fd6]">
            Solutions Architect · Slack (Salesforce)
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            I build <span className="gradient-text">agentic solutions</span>,
            <br />
            then stay to see them work.
          </h1>
          <p className="mt-5 max-w-md text-lg text-slate-600 dark:text-slate-300">
            10+ years designing and delivering enterprise technical solutions, and the
            last six months building hands-on with Slack Bolt, MCP servers, and the
            Salesforce Agentforce platform — the most enjoyable stretch of my career so far.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-lg bg-[#2f5c8a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#274b70]"
            >
              See what I've built
            </a>
            <a
              href="mailto:michaelcbreeden@gmail.com"
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-600"
            >
              Get in touch
            </a>
            <a
              href="/Michael-Breeden-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-500 underline-offset-4 transition hover:underline dark:text-slate-400"
            >
              Download résumé
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative shrink-0"
        >
          <div className="absolute inset-0 -z-10 scale-105 rounded-full bg-gradient-to-br from-[#2f5c8a] to-[#8ec5f0] opacity-30 blur-xl" />
          <img
            src={headshot}
            alt="Portrait of Michael Breeden"
            className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg sm:h-48 sm:w-48 dark:border-slate-900"
          />
        </motion.div>
      </div>
    </section>
  )
}
