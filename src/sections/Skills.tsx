import SectionShell from '../components/SectionShell'
import { SKILL_CATEGORIES } from '../data/skills'

function Skills() {
  return (
    <SectionShell id="skills" index={3} label="Skills">
      <div className="mx-auto mt-8 max-w-content space-y-8 text-left">
        {SKILL_CATEGORIES.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-section-label uppercase tracking-wide text-accent-500">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-paper-100/15 px-3 py-1 font-mono text-sm text-paper-100"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

export default Skills
