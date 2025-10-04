import React from "react";
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.jpg"
import figma from "../assets/figma.jpg"
import postgreSQL from "../assets/postgreSQL.jpg"
import typescript from "../assets/ts.jpg"
import html from "../assets/html.jpg"
import css from "../assets/css.jpg"

const ProjectCard = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 justify-center items-center mx-auto">
                <div className="p-10 rounded-2xl shadow-md transition duration-300 hover:scale-105 bg-[#303030]">
                    <a
                        href="https://github.com/Sokleaphea/McDonald-Clone"
                        target="_blank"
                        className="flex flex-col justify-center items-center space-y-3 "
                    >
                        McDonald Clone
                        <p>Tech Used:</p>
                        <div className="w-40 h-10 flex flex-row justify-center items-center rounded-full space-x-3 overflow-hidden">
                            <img src={html} alt="html" className="w-8 h-8 object-contain "/>
                            <img src={css} alt="css" className="w-8 h-8 object-contain"/>
                        </div>

                    </a>
                </div>
                <div className="p-10 rounded-2xl shadow-md transition duration-300 hover:scale-105 bg-[#303030]">
                    <a 
                        href="https://github.com/Sokleaphea/Quiz" 
                        target="_blank"
                        className="flex flex-col justify-center items-center space-y-3"
                    >
                        Quiz App
                        <p>Tech Used:</p>
                        <div className="w-40 h-10 overflow-visible flex flex-row max-w-xs object-cover justify-center items-center rounded-full space-x-3">
                            <img src={react} alt="react" className="w-8 h-8 object-contain rounded-full shadow-md bg-white "/>
                        </div>
                    </a>
                </div>
                <div className="p-10 rounded-2xl shadow-md transition duration-300 hover:scale-105 bg-[#303030]">
                    <a 
                        href="https://baycanteen.vercel.app/" 
                        target="_blank"
                        className="flex flex-col justify-center items-center space-y-3"
                    >
                        Meal Voting
                        <p>Tech Used:</p>
                        <div className="w-40 h-10 overflow-visible flex flex-row max-w-xs object-cover justify-center items-center rounded-full space-x-3">
                            <img src={react} alt="react" className="w-8 h-8 object-contain rounded-full shadow-md bg-white"/>
                            <img src={nodejs} alt="node.js" className="w-8 h-8 object-contain rounded-full shadow-md bg-white"/>
                            <img src={figma} alt="figma" className="w-8 h-8 object-contain rounded-full shadow-md bg-white"/>
                            <img src={postgreSQL} alt="postgreSQL" className="w-8 h-8 object-contain rounded-full shadow-md bg-white"/>
                            <img src={typescript} alt="typescript" className="w-8 h-8 object-contain rounded-full shadow-md bg-white"/>
                        </div>
                    </a>
                </div>
                <div className="p-10 rounded-2xl shadow-md transition duration-300 hover:scale-105 bg-[#303030]">
                    <a 
                        href="https://github.com/Sokleaphea/Portfolio" 
                        target="_blank"
                        className="flex flex-col justify-center items-center space-y-3"
                    >
                        Portfolio
                        <p>Tech Used:</p>
                        <div className="w-40 h-10 overflow-visible flex flex-row max-w-xs object-cover justify-center items-center rounded-full space-x-3">
                            <img src={react} alt="react" className="w-8 h-8 object-contain rounded-full shadow-md bg-white "/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard