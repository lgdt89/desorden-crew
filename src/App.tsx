import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo.png'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header logoSrc={viteLogo} navItems={[{label:"Home", url:"/"}]}/>
    </>
  )
}

export default App
