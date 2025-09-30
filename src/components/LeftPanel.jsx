import React, { use } from "react";
import Photo from "../assets/photo.jpg"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const name = "Aspiring Game Developer";

const LeftPanel = () => {
    return (
        <div className="fixed flex flex-col shadow-md h-screen bg-[#000000]">
            <div className="bg-[#303030] text-white m-10 h-full flex flex-col justify-between ">
                <div className="space-y-3">
                    <div className="items-center flex flex-col space-y-3 mb-10">
                        <div className="w-100 h-100">
                            <img src={Photo} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[32px] font-bold mt-5">
                            <h1>Sokleaphea PHON</h1>
                        </div>
                        <div className="max-w-xs break-words text-center mx-auto">
                            <div className="space-y-3">
                                <h1 className="text-[20px] font-bold">Software Engineering Student</h1>
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
                            <button className="hover:animate-bounce cursor-pointer flex flex-row items-center space-x-2 hover:text-[#82eefd]">
                                <FaGithub className="w-5 h-5"/>
                                <h1>GitHub</h1>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="#contact"
                            className="transition-all duration-300 hover:animate-bounce cursor-pointer flex flex-row items-center space-x-2 hover:text-[#82eefd]"
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