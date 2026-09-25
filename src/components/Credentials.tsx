import { badges, stats } from '../data/projects'
import StatTile from './StatTile'

export default function Credentials() {
  return (
    <section id="credentials" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Platform credentials</h2>
        <p className="mb-8 mt-1.5 max-w-xl text-slate-500 dark:text-slate-400">
          Trailhead and certification history on the Salesforce platform.
        </p>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatTile key={s.label} stat={s} index={i} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
