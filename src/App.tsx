import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
