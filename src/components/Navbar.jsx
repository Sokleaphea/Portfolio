import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <nav className="bg-white shadow-md p-5 flex justify-center">
            <div className="font-bold">
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <NavLink
                            to="/about"
                            className= {({ isActive}) => 
                                isActive 
                                ? "text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className= {({ isActive}) => 
                                isActive 
                                ? "text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>        
                        <NavLink
                            to="/skills"
                            className={({ isActive}) => 
                                isActive
                                ? "text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => 
                                isActive
                                ? "text-gray-900"
                                : "text-gray-600 hover:text-gray-900"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen}
                </button>
            </div>
        </nav>
    )
};

export default Navbar;