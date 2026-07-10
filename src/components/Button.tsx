import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-section-label uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-500 text-ink-950 hover:bg-accent-300',
  secondary:
    'border border-paper-100/20 text-paper-100 hover:border-accent-500 hover:text-accent-500',
}

function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Button
