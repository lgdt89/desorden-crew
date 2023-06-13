import viteLogo from "./assets/desorden.gif";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

function App() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Work", url: "/work" },
  ];
  return (
    <>
      <Header logoSrc={viteLogo} navItems={navLinks} />
      <ContactUs/>
      <Outlet />
    </>
  );
}

export default App;
