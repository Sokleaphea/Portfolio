// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
// import Projects from "./components/Project";
// import Skills from "./components/Skill";
// import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
          <Navbar/>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skills" element={<Skill/>}/>
            {/* <Route path="/project" element={<Project />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
