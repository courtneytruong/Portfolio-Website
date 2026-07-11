import SectionShell from '../components/SectionShell'
import Button from '../components/Button'

function Resume() {
  return (
    <SectionShell id="resume" index={4} label="Resume">
      <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-6">
        <p className="text-paper-400">
          Grab a copy for your records, or view it directly in your browser.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/resume.pdf"
            download="Courtney-Truong-Resume.pdf"
            variant="primary"
          >
            Download PDF
          </Button>
          <Button
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            View in Browser
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}

export default Resume
