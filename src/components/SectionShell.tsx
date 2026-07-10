import type { ReactNode } from 'react'

interface SectionShellProps {
  id: string
  index: number
  label: string
  children?: ReactNode
}

function SectionShell({ id, index, label, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen scroll-mt-20 items-center justify-center px-6"
    >
      <div className="mx-auto max-w-content text-center">
        <p className="font-mono text-section-label text-accent-500 uppercase">
          {`// ${String(index).padStart(2, '0')} — ${label.toLowerCase()}`}
        </p>
        <h2 className="font-display text-hero text-paper-100">{label}</h2>
        {children}
      </div>
    </section>
  )
}

export default SectionShell
