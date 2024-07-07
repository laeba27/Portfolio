"use client";

import React from "react";
import { BackgroundGradient } from "../_Ui/background-gradient";
import Image from "next/image";
import project1 from "../../public/swiggy.png";
import project2 from "../../public/meeting.png";
import project3 from "../../public/UIForge.png";
function Projects() {
  return (
    <div className="bg-black p-8   mx-auto">
    <h2 className="text-white  font-extrabold px-10 text-6xl">Projects</h2>
         <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-10 ">

<div className="flex justify-center items-center min-h-screen bg-black ">
<BackgroundGradient className="rounded-[22px] max-w-sm p-5 sm:p-10 bg-black dark:bg-zinc-900">
<Image
  src={project1}
  alt="jordans"
  height={700}
  width={700}
  className="object-contain transition-transform transform hover:scale-95 duration-300"
/>
<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
  Swiggy Clone
</p>
<p className="text-sm text-neutral-600 dark:text-neutral-400">
Integrated Swiggy API to fetch and display real-time data for restaurants, menus, and user orders.Implemented Tailwind CSS for efficient and consistent styling across the application.Managed global state using context API to ensure seamless data flow and user experience.Ensured high performance and optimized loading times through code splitting and lazy loading. Technologies Used: Swiggy API, React.js, Tailwind CSS.
</p>
{/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
  <span>Buy now </span>
  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
    $100
  </span>
</button> */}
</BackgroundGradient>

</div>
<div className="flex justify-center items-center min-h-screen bg-black ">
<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
<Image
  src={project2}
  alt="jordans"
  height={400}
  width={400}
  className="object-contain"
/>
<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
Meeting Scheduler
</p>
<p className="text-sm text-neutral-600 dark:text-neutral-400">
This application is a web platform allowing users to log in, schedule meetings on any video conference website, and manage URLs, timings, and calendar dates. The application features user authentication through Kinde, ensuring secure access. Built with Next.js, Tailwind CSS, Firebase, and Shadcn, it provides a seamless user experience with real-time data updates and responsive design.
</p>
{/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
  <span>Buy now </span>
  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
    $100
  </span>
</button> */}
</BackgroundGradient>

</div>
<div className="flex justify-center items-center min-h-screen bg-black ">
<BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
<Image
  src={project3}
  alt="jordans"
  height={400}
  width={400}
  className="object-contain"
/>
<p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
UiForge
</p>
<p className="text-sm text-neutral-600 dark:text-neutral-400">
I've developed a platform tailored for UI designers and developers, featuring a vast collection of open-source UI components. Users can upload, showcase, and explore various UI components, fostering a collaborative and innovative community. Built with Next.js and Tailwind CSS, the platform ensures a seamless and responsive user experience.  making it an essential resource for enhancing and sharing UI design skills.
</p>
{/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
  <span>Buy now </span>
  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
    $100
  </span>
</button> */}
</BackgroundGradient>

</div>
</div>
    </div>
   
    
  );
}

export default Projects;
