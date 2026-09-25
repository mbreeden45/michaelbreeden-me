import { skills } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Technical skills</h2>
        <p className="mb-6 mt-1.5 max-w-xl text-slate-500 dark:text-slate-400">
          Demonstrated through shipped applications, not just training.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-sm text-slate-500 dark:text-slate-400">
          Delivery: 10+ years of enterprise customer-facing delivery, program management,
          and adoption strategy across Fortune 500 accounts.
        </p>
      </div>
    </section>
  )
}
