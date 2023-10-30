import About from './components/About'
import Experiences from './components/Experiences'
import Features from './components/Features'
import Home from './components/Home'
import HowWeWork from './components/HowWeWork'
import ServicesSection from './components/ServicesSection'
// import { useTranslations } from "next-intl"
// import {useLocale} from 'next-intl';
// import NavBar from "./components/NavBar";
// import Layout from "./layout";

export default function App() {
  return (
    <>
      <Home />
      <Experiences />
      <About />
      <ServicesSection />
      <Features />
      <HowWeWork />
    </>
  )
}
