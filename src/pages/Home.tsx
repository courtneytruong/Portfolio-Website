import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Intro from '../sections/Intro'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import Resume from '../sections/Resume'
import Contact from '../sections/Contact'

function Home() {
  const location = useLocation()

  // Arriving here via a router Link with a hash (e.g. the case study page's
  // "Back to projects" link) doesn't trigger the browser's native anchor
  // scroll, since this is a client-side route change rather than a page
  // load — so scroll to the target section ourselves once it's mounted.
  useEffect(() => {
    if (!location.hash) return
    document.getElementById(location.hash.slice(1))?.scrollIntoView()
  }, [location.hash])

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
      <Footer />
    </>
  )
}

export default Home
