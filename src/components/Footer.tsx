import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

const iconLinkStyles =
  'rounded-sm text-paper-400 transition-colors hover:text-accent-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950'

function Footer() {
  return (
    <footer className="border-t border-paper-100/10 bg-ink-950 px-6 py-8">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-paper-400">
          © {new Date().getFullYear()} Courtney Truong. Built with React &amp;
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:courtneybtruong@gmail.com"
            aria-label="Email Courtney Truong"
            className={iconLinkStyles}
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/courtneybtruong"
            target="_blank"
            rel="noreferrer"
            aria-label="Courtney Truong on LinkedIn"
            className={iconLinkStyles}
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/courtneytruong"
            target="_blank"
            rel="noreferrer"
            aria-label="Courtney Truong on GitHub"
            className={iconLinkStyles}
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#top"
            className={`${iconLinkStyles} font-mono text-xs uppercase tracking-wide`}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
