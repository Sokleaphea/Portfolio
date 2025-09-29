// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = ({ refs }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const handleNavClick = (route, ref) => {
//     navigate(route);
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const navItems = [
//     { label: "About", route: "/about", ref: refs.aboutRef },
//     { label: "Projects", route: "/project", ref: refs.projectRef },
//     { label: "Skills", route: "/skills", ref: refs.skillRef },
//   ];
//   return (
//     <nav className="bg-white shadow-md p-5 flex justify-center">
//       <ul className="flex space-x-4 items-center font-bold">
//         {navItems.map((item) => (
//             <li key={item.route}>
//                 <button
//                     className={
//                         location.pathname === item.route
//                         ? "text-gray-900"
//                         : "text-gray-600 hover:text-gray-900" 
//                     }
//                     onClick={() => handleNavClick(item.route, item.ref)}
//                 >
//                     {item.label}
//                 </button>

//             </li>
//         ))}
//       </ul>
//     </nav>
//   )
// }
// export default Navbar;