import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
const RightPanel = () => {
    return (
        <div className="lg:p-5 bg-[#000000]">
            <div className="text-white">
                <section id="about"><About /></section>
                <section id="skills"><Skill /></section>
                <section id="projects"><Project /></section>
                <section id="contact"><Contact /></section>
            </div>
        </div>
    )
}
export default RightPanel;