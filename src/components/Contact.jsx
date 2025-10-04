const Contact = () => {
    return (
        <div className="space-y-3 lg:m-10 pt-8">
            <h1 className="text-[32px] font-bold">Contact Me</h1>
            <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#000000] border-white border rounded-full"></div>
                <hr className="w-10"/>  
            </div>
            <div className="flex flex-row space-x-2">
                <p className="text-[#82eefd]">Email: </p>
                <p>sokleapheaphon@gmail.com</p>
            </div>
            <div className="flex flex-row space-x-2">
                <p className="text-[#82eefd]">Phone: </p>
                <p>+85595505009</p>
            </div>
        </div>
    );
};

export default Contact;
