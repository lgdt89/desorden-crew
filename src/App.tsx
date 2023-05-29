import viteLogo from './assets/desorden.gif'
import './App.css'
import Header from './components/Header'
import { Outlet } from "react-router-dom";


function App() {
  const navLinks = [{label:"Home", url:"/"},{label:"About", url:"/about"}, {label:"Services", url:"/services"},{label:"Work", url:"/work"}]
  return (
    
    <>
      <Header logoSrc={viteLogo} navItems={navLinks} />
       <Outlet />
    </>
  )
}

export default App
