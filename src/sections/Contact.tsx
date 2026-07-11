import SectionShell from '../components/SectionShell'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/icons'

const contactLinkStyles =
  'inline-flex items-center gap-2 rounded-full border border-paper-100/15 px-5 py-2.5 font-mono text-sm text-paper-100 transition-colors hover:border-accent-500/40 hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function Contact() {
  return (
    <SectionShell id="contact" index={5} label="Contact">
      <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:courtneybtruong@gmail.com"
          className={contactLinkStyles}
        >
          <MailIcon className="h-4 w-4" />
          courtneybtruong@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/courtneybtruong"
          target="_blank"
          rel="noreferrer"
          className={contactLinkStyles}
        >
          <LinkedinIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href="https://github.com/courtneytruong"
          target="_blank"
          rel="noreferrer"
          className={contactLinkStyles}
        >
          <GithubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </SectionShell>
  )
}

export default Contact
