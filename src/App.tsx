import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Help from './components/Help'
import Experience from './components/Experience'
import BeyondWork from './components/BeyondWork'
import Credentials from './components/Credentials'
import Skills from './components/Skills'
import AiPractice from './components/AiPractice'
import AskMichael from './components/AskMichael'
import Faq from './components/Faq'
import Footer from './components/Footer'
import WorkIndex from './components/WorkIndex'
import ProjectPage from './components/ProjectPage'
import { customerProjects } from './data/projects'

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Help />
        <Experience />
        <BeyondWork />
        <Credentials />
        <Skills />
        <AiPractice />
        <AskMichael />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

/** Tiny path router: every page is pre-rendered at build time (see scripts/prerender.mjs). */
function App({ path }: { path: string }) {
  if (path === '/work') return <WorkIndex />
  const m = path.match(/^\/work\/([^/]+)$/)
  if (m && customerProjects.some((p) => p.slug === m[1])) return <ProjectPage slug={m[1]} />
  return <Home />
}

export default App
