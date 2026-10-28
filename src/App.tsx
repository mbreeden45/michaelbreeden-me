import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import BeyondWork from './components/BeyondWork'
import Credentials from './components/Credentials'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <BeyondWork />
        <Credentials />
        <Skills />
      </main>
      <Footer />
    </>
  )
}

export default App
