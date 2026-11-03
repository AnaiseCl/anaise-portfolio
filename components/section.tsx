import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section aria-labelledby={id} className="border-t border-border pt-8">
      <h2
        id={id}
        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
      >
        <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}
