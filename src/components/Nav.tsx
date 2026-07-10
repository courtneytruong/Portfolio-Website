import { useEffect, useState } from 'react'
import { NAV_LINKS, NAV_SECTION_IDS } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'

const linkFocusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(NAV_SECTION_IDS)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-paper-100/10 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className={`rounded-sm font-mono text-sm text-paper-100 ${linkFocusRing}`}
        >
          courtneytruong<span className="text-accent-500">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-sm font-mono text-section-label uppercase tracking-wide transition-colors ${linkFocusRing} ${
                    isActive
                      ? 'text-accent-500'
                      : 'text-paper-400 hover:text-paper-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-sm p-2 text-paper-100 md:hidden ${linkFocusRing}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-paper-100/10 px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={`block rounded-sm py-2 font-mono text-section-label uppercase tracking-wide ${linkFocusRing} ${
                    isActive ? 'text-accent-500' : 'text-paper-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Nav
