import Photo from "../assets/photo.jpg"
import { FaGithub } from "react-icons/fa";

const name = "Aspiring Game Developer";

const LeftPanel = () => {
    return (
        <div className="lg:fixed lg:p-5 flex flex-col shadow-md lg:h-screen bg-[#000000]">
            <div className="bg-[#303030] text-white h-auto lg:ml-5 lg:h-full lg:justify-between flex flex-col">
                <div className="space-y-3">
                    <div className="items-center flex flex-col space-y-3 mb-10 sm:mb-5">
                        <div className="lg:w-100 lg:h-100">
                            <img src={Photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h1 className="font-bold px-4 text-[24px] sm:text-[30px] md:text-[36px]">Sokleaphea PHON</h1>
                        </div>
                        <div className="max-w-xs break-words text-center mx-auto">
                            <div className="space-y-3">
                                <h1 className="text-[20px] font-bold px-4 sm:text-[16px] md:text-[24px]">Software Engineering Student</h1>
                                <p className="text-[16px] flex justify-center tracking-wide items-center text-[#82eefd]">
                                    {name.split("").map((char, i) => (
                                        <span 
                                            key={i}
                                            className="typewriter"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly mb-6">
                    <div>
                        <a 
                            href="https://github.com/Sokleaphea"
                            target="_blank"
                        >
                            <button className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer flex flex-row items-center space-x-2 hover:text-[#82eefd]">
                                <FaGithub className="w-5 h-5"/>
                                <h1>GitHub</h1>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="#contact"
                            className="transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer flex flex-row items-center space-x-2 hover:text-[#82eefd]"
                        >
                            <h1>Contact Me</h1>
                           
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeftPanel;