import About from './components/About'
import Clients from './components/Clients'
import Experiences from './components/Experiences'
import Features from './components/Features'
import Home from './components/Home'
import HowWeWork from './components/HowWeWork'
import ServicesSection from './components/ServicesSection'

export default function App() {
  return (
    <>
      <Home />
      <About />
      <ServicesSection />
      <Features />
      <HowWeWork />
      <Clients />
    </>
  )
}
