import Hero from '../components/sections/Hero/Hero'
import Services from '../components/sections/Services/Services'
import Portfolio from '../components/sections/Portfolio/Portfolio'
import Process from '../components/sections/Process/Process'
import Contact from '../components/sections/Contact/Contact'
import Footer from '../components/Layout/Footer/Footer'
import Header from '../components/Layout/Header/Header'
import './App.scss'

function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
