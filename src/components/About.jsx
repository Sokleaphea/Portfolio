import React from "react";
import Photo from "../assets/photo.jpg"


const About = () => {
    return (
        <div className="text-white">
            <div className="m-10">
                <div className="space-y-3">
                    <h1 className="text-[32px] font-bold">About Me</h1>
                    <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#000000] border-white border rounded-full"></div>
                    <hr className="w-1/3"/> 
                </div>
                    <p>Sophomore Computer Science student studying at CADT. I'm passionate about building interactive and creative digital experiences, with a strong interest in game design and development.</p>
                    <p>I'm currently learning Unity, React Native, and Flutter, while also exploring algorithms and data structures. My goal is to grow as a developer and contribute to the real world through innovative projects and eventually create games that combine creativity and storytelling.</p>
                </div>
            </div>
            <div className="flex justify-start space-x-40 mt-5 space-y-3 m-10">
                <div className="">
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Name: </h1>
                        <p>Sokleaphea PHON</p>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Email: </h1>
                        <p>sokleapheaphon@gmail.com</p>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Academy: </h1>
                        <p>Cambodia Academy of Digital Technology</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Birthday: </h1>
                        <p>May, 19 2005</p>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Phone: </h1>
                        <p>+85595505009</p>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <h1 className="text-[#82eefd]">Address: </h1>
                        <p>Phnom Penh, Cambodia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;