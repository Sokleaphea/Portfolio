// App.jsx
import React, { useRef, useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
// import About from "./components/About";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
// import Skill from "./components/Skill";
// import Projects from "./components/Project";

// function MainPage() {
//   const navigate = useNavigate();
//   const aboutRef = useRef();
//   const skillRef = useRef();
//   const projectRef = useRef();

//   useEffect(() => {
//     const sections = [
//       { ref: aboutRef, route: "/about" },
//       { ref: projectRef, route: "/projects" },
//       { ref: skillRef, route: "/skills" },
//     ];

//     const observer = new window.IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const section = sections.find((s) => s.ref.current === entry.target);
//             if (section) navigate(section.route, { replace: true });
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     sections.forEach((s) => observer.observe(s.ref.current));
//     return () => observer.disconnect();
//   }, [navigate]);

//   return (
//     <div>
//       <section ref={aboutRef} id="about" className="h-screen">
//         <About />
//       </section>
//       <section ref={projectRef} id="project" className="h-screen">
//         <Projects />
//       </section>
//       <section ref={skillRef} id="skills" className="h-screen">
//         <Skill />
//       </section>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <MainPage />
//     </BrowserRouter>
//   );
// }
function App() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex flex-col">
        <LeftPanel />
      </div>
      <div className="w-2/3 overflow-y-scroll">
        <RightPanel />
      </div>
    </div>
  )
}

export default App;
