import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/desorden.gif'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)
  const navLinks = [{label:"About", url:"/about"}, {label:"Services", url:"/services"},{label:"work", url:"/work"}]
  return (
    <>
      <Header logoSrc={viteLogo} navItems={navLinks} />
      <HeroSection/>
    </>
  )
}

export default App
