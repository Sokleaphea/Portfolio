import React from "react";
import Photo from "../assets/photo.jpg"

const LeftPanel = () => {
    return (
        <div className="h-[100vh] fixed flex flex-col shadow-md">
            <div className="items-center flex flex-col top-24 left-10 z-40 m-10">
                <div className="w-100 h-100">
                    <img src={Photo} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="">
                    <h1 className="text-[32px] font-bold m-5">Sokleaphea PHON</h1>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    )
}
export default LeftPanel;