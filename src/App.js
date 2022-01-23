import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.component";
import AboutMe from "./pages/about-me/about-me.component";
import Skills from "./pages/skills/skills.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import desk from "./assets/desk.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${desk})` }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
