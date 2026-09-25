import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function BeyondWork() {
  return (
    <section id="beyond" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="03"
          title="Beyond the day job"
          subtitle="The work that doesn't fit on a resume but says a lot about how I show up."
        />

        <motion.div
          initial={{ opacity: 0, y: 14, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="relative border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-6 shadow-[5px_5px_0_var(--color-hot)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[5px_5px_0_var(--color-hot)]"
        >
          <span className="mb-2.5 inline-block rotate-1 bg-[var(--color-ink)] px-2 py-1 font-display text-[11px] text-[var(--color-paper)] dark:bg-[#ececec] dark:text-[var(--color-ink)]">
            Founding Member · Slack Admin
          </span>
          <h3 className="mb-2 font-display text-lg">ALStogether</h3>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
            Founding member and Slack Admin of a community connecting people living with ALS,
            caregivers, and supporters. I launched and manage the workspace — from initial setup
            to ongoing moderation, onboarding workflows, and enablement materials — building a
            safe, active space for people navigating one of the hardest things a person can face.
            It's the same skill set I use at work — Slack administration, community design,
            adoption strategy — pointed at something that has nothing to do with a paycheck.
          </p>
          <a
            href="https://www.alstogether.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
          >
            alstogether.org →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
