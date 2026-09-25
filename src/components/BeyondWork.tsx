import { motion } from 'framer-motion'

export default function BeyondWork() {
  return (
    <section id="beyond" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Beyond the day job</h2>
        <p className="mb-8 mt-1.5 max-w-xl text-slate-500 dark:text-slate-400">
          The work that doesn't fit on a resume but says a lot about how I show up.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
        >
          <span className="mb-2.5 inline-block rounded-md bg-[#2f5c8a]/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2f5c8a] dark:bg-[#6f9fd6]/15 dark:text-[#6f9fd6]">
            Founding Member · Slack Admin
          </span>
          <h3 className="mb-2 text-lg font-semibold">ALStogether</h3>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Founding member and Slack Admin of a community connecting people living with ALS,
            caregivers, and supporters. I launched and manage the workspace — from initial setup
            to ongoing moderation, onboarding workflows, and enablement materials — building a
            safe, active space for people navigating one of the hardest things a person can face.
            It's the same skill set I use at work — Slack administration, community design, adoption
            strategy — pointed at something that has nothing to do with a paycheck.
          </p>
          <a
            href="https://www.alstogether.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#2f5c8a] hover:underline dark:text-[#6f9fd6]"
          >
            alstogether.org →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
