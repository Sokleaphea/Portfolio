import HTML from "../assets/HTML.png"
import CSS from "../assets/css.jpg"
import JS from "../assets/javascript.png"
import SQL from "../assets/mySQL.png"
import Cplusplus from "../assets/c++.png"
import C from "../assets/c.png"
import Java from "../assets/java.jpg"
import Node from "../assets/nodejs.jpg"
import React from "../assets/react.png"
import Figma from "../assets/figma.jpg"
const Skill = () => {
    return (
        <div>
            <div className="m-10">
                <div className="text-center p-10">
                    <h1 className="text-[32px] font-bold">Tech Stack</h1>
                </div>
                <div className="p-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-2 font-bold shadow-md m-4 rounded-2xl">
                        <div className="flex flex-col items-center">
                            <img src={HTML} alt="HTML" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={CSS} alt="CSS" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={JS} alt="JavaScript" className="h-24 w-24 m-4"/>
                            <span className="text-center mt-2">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={SQL} alt="SQL" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">SQL</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={C} alt="C" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">C</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Cplusplus} alt="C++" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">C++</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Java} alt="Java" className="h-24 w-24 m-4 bg-white shadow-md rounded-full"/>
                            <span className="text-center mt-2">Java</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Node} alt="Node.js" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={Figma} alt="Figma" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">Figma</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={React} alt="React" className="h-24 w-24 m-4 bg-white shadow-md rounded-full" />
                            <span className="text-center mt-2">React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default Skill;