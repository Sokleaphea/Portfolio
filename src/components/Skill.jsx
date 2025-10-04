import HTML from "../assets/html.jpg"
import CSS from "../assets/css.jpg"
import JS from "../assets/javascript.png"
import SQL from "../assets/mySQL.png"
import Cplusplus from "../assets/c++.png"
import C from "../assets/c.png"
import Java from "../assets/java.jpg"
import Node from "../assets/nodejs.jpg"
import React from "../assets/react.png"
import Figma from "../assets/figma.jpg"
import Mongo from "../assets/mongoDB.png"
import Unity from "../assets/unity.jpg"
import Flutter from "../assets/flutter.png"
const Skill = () => {
    return (
        <div>
            <div className="space-y-3 lg:m-10">
                <div>
                    <h1 className="text-[32px] font-bold">Tech Stack</h1>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#000000] border-white border rounded-full"></div>
                    <hr className="w-10"/>  
                </div>
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 font-bold">
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={HTML} alt="HTML" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">HTML</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={CSS} alt="CSS" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">CSS</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={JS} alt="JavaScript" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={SQL} alt="SQL" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">SQL</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={C} alt="C" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">C</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={Cplusplus} alt="C++" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">C++</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={Java} alt="Java" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">Java</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={Node} alt="Node.js" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={Figma} alt="Figma" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">Figma</span>
                        </div>
                        <div className="flex flex-col items-center transition duration-300 hover:scale-105">
                            <img src={React} alt="React" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">React</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="">
                        <h1 className="text-[32px] font-bold">Learning/Improve</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-[#000000] border-white border rounded-full"></div>
                        <hr className="w-10"/>  
                    </div>
                        <div className="overflow-x-hidden font-bold max-w-xl mx-auto shadow-md m-4 rounded-2xl">
                            <div className="marquee gap-4 py-4">
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Mongo} alt="MongoDB" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">MongoDB</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Flutter} alt="Flutter" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Flutter</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Unity} alt="Unity" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Unity</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={React} alt="React" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">React Native</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Cplusplus} alt="C++" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">C++</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Java} alt="Java" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Java</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Mongo} alt="MongoDB" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">MongoDB</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Flutter} alt="Flutter" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Flutter</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Unity} alt="Unity" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Unity</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={React} alt="React" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">React Native</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Cplusplus} alt="C++" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">C++</span>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <img src={Java} alt="Java" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                                    <span className="text-center mt-2">Java</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}   
export default Skill;