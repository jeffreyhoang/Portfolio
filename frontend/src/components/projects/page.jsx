import { React } from "react";
import { motion } from "motion/react"

const projects = [
    {
        title: "Sloka",
        description: "Full-stack web app reimagining K–12 education with AI-driven, personalized learning experiences.",
        image: "/assets/img/projects/sloka.png",
        link: "https://sloka.vercel.app/",
    }, 
    {
        title: "Aesthetiq AI",
        description: "Full-stack e-commerce app using React, Django, and AI to generate and sell custom phone case designs.",
        image: "/assets/img/projects/aesthetiqai.png",
        link: "https://aesthetiq-ai.vercel.app/",
    },
    {
        title: "Flix4You",
        description: "Full-stack streaming site for classic films with custom profiles and tailored UI using React and Django.",
        image: "/assets/img/projects/flix4you.jpg",
        link: "https://flix4you.onrender.com/",
    },
    {
        title: "Human Motion Reconstruction",
        description: "Django-based full-stack app for automated 3D motion capture from multi-view videos using EasyMocap.",
        image: "/assets/img/projects/human-motion.png",
        link: "https://github.com/jeffreyhoang/Human-Motion-Reconstruction",
    }
]

const cardVariants = {
    offscreen: { opacity: 0, y: 60 },
    onscreen: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
            delay: i * 0.2,
        },
    }),
};


const Projects = () => {
    return (
        <section className="relative px-8 py-20 flex flex-col gap-8 bg-gradient-to-b from-blue-900 to-sky-600"> 

            {/* Background image (behind content) */}
            <img 
                src="/assets/img/background2.png" 
                alt="" 
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-full object-right pointer-events-none select-none z-0 object-cover"
            />    

            {/* Title Section */}
            <div className="flex items-center justify-center gap-4 z-10">
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-left"></div>
                <h2 className="text-white text-3xl sm:text-4xl font-semibold whitespace-nowrap">
                    Featured Projects
                </h2>
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-right"></div>
            </div>      

            {/* Container for Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 max-w-5xl mx-auto z-10">
                {/* Left Column */}
                <div className="space-y-10">
                    {projects.filter((_, i) => i % 2 === 0).map((project, index) => (
                        <motion.a 
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index}
                            variants={cardVariants}
                            href={project.link} 
                            target="_blank" 
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.9)] hover:scale-105 transition-all"
                        >
                            <img 
                                src={project.image} 
                                alt=""
                                className="w-full h-[16rem] object-cover rounded-xl" 
                            />
                            <h1 className="text-xl font-bold text-blue-600">{project.title}</h1>
                            <p className="text-gray-600">{project.description}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-10 mt-10 md:mt-40">
                    {projects.filter((_, i) => i % 2 === 1).map((project, index) => (
                        <motion.a 
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index}
                            variants={cardVariants}
                            href={project.link} 
                            target="_blank" 
                            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.9)] hover:scale-105 transition-all"
                        >
                            <img 
                                src={project.image} 
                                alt=""
                                className="w-full h-[16rem] object-cover rounded-xl" 
                            />
                            <h1 className="text-xl font-bold text-blue-600">{project.title}</h1>
                            <p className="text-gray-600">{project.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>  
        </section>
    )
};

export default Projects;