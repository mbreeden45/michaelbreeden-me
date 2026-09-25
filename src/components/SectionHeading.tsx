export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-8 flex items-start gap-3">
      <span className="font-display text-sm text-[var(--color-hot)]">{index}</span>
      <div>
        <h2 className="font-display text-2xl">{title}</h2>
        <p className="mt-1.5 max-w-xl text-sm text-[var(--color-ink-soft)] dark:text-[#c9c2b2]">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
