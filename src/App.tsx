import Nav from './components/Nav'
import Intro from './sections/Intro'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Nav />
      <main className="bg-ink-950">
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App
