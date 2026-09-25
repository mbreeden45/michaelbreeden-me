import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Stat } from '../data/projects'

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 900
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return <span ref={ref}>{display.toLocaleString()}</span>
}

export default function StatTile({ stat, index }: { stat: Stat; index: number }) {
  const numeric = Number(stat.num.replace(/,/g, ''))
  const isNumeric = !Number.isNaN(numeric) && stat.num.trim() !== ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 dark:border-[#3a352a] dark:bg-[#1f1b14]"
    >
      <div className="font-display text-2xl text-[var(--color-hot)]">
        {isNumeric ? <AnimatedNumber value={numeric} /> : stat.num}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8270]">
        {stat.label}
      </div>
    </motion.div>
  )
}
