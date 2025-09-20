// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Projects from "./components/Project";
// import Skills from "./components/Skill";
// import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#6930c3] min-h-screen">
          <Navbar/>
          <Routes>
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
