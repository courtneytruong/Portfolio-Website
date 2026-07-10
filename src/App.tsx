import Nav from './components/Nav'
import Hero from './sections/Hero'
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
        <Hero />
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
