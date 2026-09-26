function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent = false,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  accent?: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={accent ? 'var(--color-hot)' : 'var(--color-paper)'}
        stroke="var(--color-ink)"
        strokeWidth={1.5}
        className={accent ? '' : 'dark:fill-[#1a1a1a]'}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="Archivo Black"
        fontSize="9"
        fill={accent ? 'var(--color-paper)' : 'var(--color-ink)'}
        className={accent ? '' : 'dark:fill-[#ececec]'}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + w / 2}
          y={y + h / 2 + 11}
          textAnchor="middle"
          fontFamily="Space Mono"
          fontSize="7"
          fill="var(--color-ink-soft)"
          className="dark:fill-[#8a8a8a]"
        >
          {sub}
        </text>
      ) : null}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-ink)" strokeWidth={1.5} className="dark:stroke-[#8a8a8a]" markerEnd="url(#arrowhead)" />
    </g>
  )
}

const ArrowheadDefs = () => (
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" className="dark:stroke-[#8a8a8a]" />
    </marker>
  </defs>
)

function CaseSyncDiagram() {
  return (
    <svg viewBox="0 0 300 110" className="w-full">
      <ArrowheadDefs />
      <Box x={8} y={40} w={80} h={36} label="SLACK" sub="case thread" />
      <Box x={212} y={40} w={80} h={36} label="SALESFORCE" sub="Case record" />
      <Box x={110} y={40} w={90} h={36} label="SYNC SERVICE" accent />
      <Arrow x1={88} y1={50} x2={110} y2={50} />
      <Arrow x1={110} y1={66} x2={88} y2={66} />
      <Arrow x1={200} y1={50} x2={212} y2={50} />
      <Arrow x1={212} y1={66} x2={200} y2={66} />
      <text x={150} y={95} textAnchor="middle" fontFamily="Space Mono" fontSize="7" fill="var(--color-ink-soft)" className="dark:fill-[#8a8a8a]">
        bidirectional · real-time thread ↔ case sync
      </text>
    </svg>
  )
}

function AnalyticsDiagram() {
  return (
    <svg viewBox="0 0 300 150" className="w-full">
      <ArrowheadDefs />
      <Box x={12} y={54} w={76} h={36} label="SLACK" sub="channel activity" />
      <Box x={112} y={54} w={76} h={36} label="ENGINE" accent />
      <Box x={212} y={16} w={80} h={36} label="DASHBOARD" sub="custom Slack app" />
      <Box x={212} y={92} w={80} h={36} label="MCP SERVER" sub="Slackbot Q&A" />
      <Arrow x1={88} y1={72} x2={112} y2={72} />
      <Arrow x1={188} y1={64} x2={212} y2={40} />
      <Arrow x1={188} y1={80} x2={212} y2={104} />
      <text x={150} y={140} textAnchor="middle" fontFamily="Space Mono" fontSize="7" fill="var(--color-ink-soft)" className="dark:fill-[#8a8a8a]">
        same data, two surfaces: live dashboard + conversational query
      </text>
    </svg>
  )
}

function TriviaDiagram() {
  return (
    <svg viewBox="0 0 300 110" className="w-full">
      <ArrowheadDefs />
      <Box x={8} y={40} w={70} h={36} label="PLAYERS" sub="Slack Block Kit" />
      <Box x={100} y={38} w={90} h={40} label="TRIVIA ENGINE" sub="scoring · anti-cheat" accent />
      <Box x={212} y={40} w={80} h={36} label="LEADERBOARD" sub="live standings" />
      <Arrow x1={78} y1={58} x2={100} y2={58} />
      <Arrow x1={190} y1={58} x2={212} y2={58} />
      <text x={150} y={95} textAnchor="middle" fontFamily="Space Mono" fontSize="7" fill="var(--color-ink-soft)" className="dark:fill-[#8a8a8a]">
        real-time scoring with server-side timing validation
      </text>
    </svg>
  )
}

const DIAGRAMS = {
  caseSync: CaseSyncDiagram,
  analytics: AnalyticsDiagram,
  trivia: TriviaDiagram,
}

export type DiagramKey = keyof typeof DIAGRAMS

export default function ArchDiagram({ name }: { name: DiagramKey }) {
  const Diagram = DIAGRAMS[name]
  return (
    <div className="mb-4 border border-dashed border-[var(--color-ink)]/40 p-3 dark:border-[#3a3a3a]">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
        Architecture (client details redacted)
      </p>
      <Diagram />
    </div>
  )
}
