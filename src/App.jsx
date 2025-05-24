import '@fortawesome/fontawesome-free/css/all.css'
import { useState, useEffect } from 'react'
import { ThemeProvider } from "@/components/ui/theme-provider.jsx"
import HomepageDesktop from './introPageDesktop'
import HomepageMobile from './HomepageMobile'
import ProjectPage from './ProjectPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            path="/home"
            element={windowWidth < 1024 ? <HomepageMobile /> : <HomepageDesktop />}
          />
          {/* Example additional route if you want */}
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
