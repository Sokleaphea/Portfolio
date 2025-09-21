import { use, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <nav className="bg-white shadow-md p-5 flex justify-center">
            <div className="font-bold">
                <ul className="hidden md:flex space-x-6 items-center">
                    <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                    <li><Link to="/skill" className="text-gray-600 hover:text-gray-900">Skills</Link></li>
                    <li><Link to="/project" className="text-gray-600 hover:text-gray-900">Project</Link></li>
                    <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
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