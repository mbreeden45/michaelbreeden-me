export default function TornDivider() {
  return (
    <div aria-hidden className="relative h-5 w-full overflow-hidden">
      <svg
        viewBox="0 0 400 20"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-[var(--color-paper)] dark:text-[var(--color-paper-dark)]"
      >
        <polygon
          points="0,0 8,14 16,2 24,16 32,4 40,12 48,0 56,15 64,3 72,13 80,1 88,17 96,5 104,11 112,0 120,14 128,2 136,16 144,4 152,12 160,0 168,15 176,3 184,13 192,1 200,17 208,5 216,11 224,0 232,14 240,2 248,16 256,4 264,12 272,0 280,15 288,3 296,13 304,1 312,17 320,5 328,11 336,0 344,14 352,2 360,16 368,4 376,12 384,0 392,15 400,3 400,20 0,20"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
