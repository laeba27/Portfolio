import { HoverEffect } from "../_Ui/card-hover-effect";

export function Skill() {
    return (
        <div className="bg-black">
            <div className="p-8 max-w-[1300px]  mx-auto">
            <h1 className='text-white  font-extrabold text-6xl'>Skills</h1>
            <HoverEffect items={skill} />
        </div>
        </div>
        
    );
}
export const skill = [
    {
        title: "HTML5",
        image: "https://img.icons8.com/color/96/000000/html-5.png"
    },
    {
        title: "CSS3",
        image: "https://img.icons8.com/color/96/000000/css3.png"
    },
    {
        title: "JavaScript",
        image: "https://img.icons8.com/color/96/000000/javascript--v1.png"
    },
    {
        title: "React.js",
        image: "https://img.icons8.com/color/96/000000/react-native.png"
    },
    {
        title: "Tailwind",
        image: "https://img.icons8.com/color/48/tailwind_css.png"
    },
    

    {
        title: "Bootstrap",
        image: "https://img.icons8.com/color/96/000000/bootstrap.png"
    },
    {
        title: "Next.js",
        image: "https://img.icons8.com/color/48/nextjs.png"

    },
   
    {
        title: "Node.js",
        image: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
    },
    {
        title: "Mongo db",
        image: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
    },
    {
        title: "Figma",
        image: "https://img.icons8.com/color/96/000000/figma--v1.png"
    },
    {
        title: "Express js",
        image: "https://img.icons8.com/?size=100&id=z228V7A9QyTv&format=png&color=000000"
    },
    
    {
        title: "Firebase",
        image: "https://img.icons8.com/color/96/000000/firebase.png"
    }
];

export default Skill;
