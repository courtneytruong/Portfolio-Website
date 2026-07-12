import SectionShell from '../components/SectionShell'

function About() {
  return (
    <SectionShell id="about" index={1} label="About">
      <div className="mx-auto mt-8 max-w-content space-y-6 text-left text-paper-400">
        <p>
          I spent several years in quality control at a federal contractor,
          where my job was to find what was wrong before it became a bigger
          problem — tracing defects back to root causes, documenting them
          precisely, and making sure fixes actually held. When that role ended
          in 2023, I realized the instinct behind it — systematic thinking,
          attention to edge cases, not trusting "it probably works" — was the
          same instinct that makes a good developer.
        </p>
        <p>
          I went through Code:You, a Kentucky-based bootcamp, to build my
          technical foundation, and I'm continuing there now with coursework
          spanning CI/CD pipelines, containerization, AWS cloud architecture,
          and generative AI — both using AI as a development tool and building
          AI-driven solutions from scratch with RAG and MCP servers. I learn
          best by building real projects rather than isolated exercises, so most
          of what I know came from shipping things, hitting real errors, and
          figuring out why they happened.
        </p>
        <p>
          Today I build full-stack applications with C#, ASP.NET Core, React,
          and TypeScript, backed by PostgreSQL and Docker. I'm drawn to the
          parts of development that overlap with my QC background most directly
          — architecture decisions, testing, and the discipline of a solid CI/CD
          pipeline — and I'm currently looking for a fully remote role where
          that combination is useful.
        </p>
      </div>
    </SectionShell>
  )
}

export default About
