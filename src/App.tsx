import viteLogo from "./assets/LOGO DESORDEN.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./utils";

function App() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Work", url: "/work" },
  ];
  return (
    <>
    <ScrollToTop/>
      <Header logoSrc={viteLogo} navItems={navLinks} />
      <Outlet />
      <ContactUs/>
    </>
  );
}

export default App;
