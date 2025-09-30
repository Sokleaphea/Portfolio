import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div className="m-10 space-y-3">
            <div>
                <h1 className="text-[32px] font-bold">My Project</h1>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#000000] border-white border rounded-full"></div>
                <hr className="w-1/3"/>  
            </div>
            <div>
                <ProjectCard />
            </div>
        </div>
    );
}
export default Project;