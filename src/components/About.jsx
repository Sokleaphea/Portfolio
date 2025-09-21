import React from "react";
import Photo from "../assets/photo.jpg"


const About = () => {
    return (
        
        <div className="m-10">
            <div className="flex justify-between items-center p-10">
                <div className="">
                    <h1 className="text-[32px] font-bold">About Me</h1>
                    <p className="text-[18px]">Hello, I'm Leaphea,a sophomore Computer Science student specializing in software engineering.</p>
                    <p className="text-[18px]">I'm interested in web, mobile and game development.</p>
                    <p className="text-[18px]">I've worked on projects using React, Javascript, Node.js, Tailwind CSS, C++, C and Java.</p>
                    <p className="text-[18px]">I'm currently learning React Native, Unity , and Flutter.</p>
                </div>
                <div>
                    <img src={Photo} alt="About Me" className="w-60 h-60 object-cover rounded-full"/>
                </div>
            </div>
        </div>
    )
}
export default About;