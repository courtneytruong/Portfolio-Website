export interface NavLink {
  id: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const NAV_SECTION_IDS = NAV_LINKS.map((link) => link.id)
