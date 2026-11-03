export function CardHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div
        aria-hidden="true"
        className="flex size-20 items-center justify-center rounded-full border border-gold/60 bg-blush font-serif text-4xl text-secondary-foreground"
      >
        A
      </div>
      <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-balance md:text-6xl">
        Anaïse
      </h1>
      <div aria-hidden="true" className="mt-4 flex items-center gap-3">
        <span className="h-px w-10 bg-gold/70" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="h-px w-10 bg-gold/70" />
      </div>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
        Cybersecurity student with a background in office operations, team leadership, and
        process improvement.
      </p>
    </header>
  )
}
