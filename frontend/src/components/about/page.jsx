import { React } from "react";
import { motion } from "motion/react"

const skills = [
    
    {
        skill: "CSS",
        icon: "/assets/img/skills/css.png",
    },
    {
        skill: "Python",
        icon: "/assets/img/skills/python.png",
    },
    {
        skill: "React",
        icon: "/assets/img/skills/react.png",
    },    
    {
        skill: "HTML",
        icon: "/assets/img/skills/html.png",
    },
    {
        skill: "Java",
        icon: "/assets/img/skills/java.png",
    },
    {
        skill: "PostgreSQL",
        icon: "/assets/img/skills/postgresql.svg",
    },
    {
        skill: "Tailwind",
        icon: "/assets/img/skills/tailwind.png",
    },
    {
        skill: "Javascript",
        icon: "/assets/img/skills/java-script.png",
    },
    {
        skill: "Rest APIs",
        icon: "/assets/img/skills/api.png",
    },
    {
        skill: "Django",
        icon: "/assets/img/skills/django.png",
    },
]

const fadeInVariants = {
    offscreen: { opacity: 0 },
    onscreen: (i) => ({
        opacity: 1,
        transition: {
            duration: 0.8,
        },
    }),
}

const About = () => {
    return (
        <section className="relative bg-[url('/assets/img/background1.png')] bg-cover bg-right bg-no-repeat bg-black flex flex-col gap-8 px-8 py-20">
            {/* Title Section */}
            <div className="flex items-center justify-center gap-4 z-10">
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-left"></div>
                <h2 className="text-white text-3xl sm:text-4xl font-semibold whitespace-nowrap">
                    About Me
                </h2>
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-right"></div>
            </div>

            {/* About Section */}
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3}}
                variants={fadeInVariants}
                className="= flex gap-10 flex-col md:flex-row items-center md:items-start z-10 self-center"
            >

                {/* Left */}
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-sky-400 to-white">
                    <img 
                        src="/assets/img/profile.jpg" 
                        alt="" 
                        className="max-h-100 md:max-h-125 object-contain w-auto rounded-xl"
                    />
                </div>
                                    
                {/* Right */}
                <div className="flex flex-col gap-8 md:justify-between max-w-100 lg:max-w-175">
                    <div className="flex flex-col gap-4 md:gap-2">
                        <p className="text-zinc-400 text-base md:text-lg text-center md:text-start">
                            Born and raised in Sacramento, California, my college journey has pushed my 
                            passion for creating meaningful technology. I am especially interested in integrating 
                            artificial intelligence into efficient, user-friendly software products that 
                            positively impact people's lives.
                        </p>
                        <p className="text-zinc-400 text-base md:text-lg text-center md:text-start">
                            After graduation, I plan to continue my journey by pursuing a master's degree in AI 
                            to deepen my expertise and expand the possibilities of what I can build.
                        </p>
                    </div>

                    {/* Skills container */}
                    <div className="flex flex-col gap-2 md:gap-4">
                        {/* First row */}
                        <div className="flex flex-row gap-2 md:gap-4 w-full justify-center">
                            {skills.filter((_, i) => i % 3 === 1).map((skill, idx) => (
                                <div key={idx} className="p-[2px] rounded-xl bg-gradient-to-r from-sky-400 to-white w-1/5">
                                    <div className="flex flex-col justify-center items-center p-2 lg:px-8 lg:py-2 gap-1 border border-black rounded-xl bg-black">
                                        <img 
                                            src={skill.icon} 
                                            alt=""
                                            className="w-10" 
                                        />
                                    <h3 className="text-[10px] lg:text-base text-white whitespace-nowrap">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second row */}
                        <div className="flex flex-row gap-2 lg:gap-4 w-full justify-center">
                            {skills.filter((_, i) => i % 3 === 0).map((skill, idx) => (
                                <div key={idx} className="p-[2px] rounded-xl bg-gradient-to-r from-white to-sky-400 w-1/5">
                                    <div className="flex flex-col justify-center items-center p-2 lg:px-8 lg:py-2 gap-1 border border-black rounded-xl bg-black">
                                        <img 
                                            src={skill.icon} 
                                            alt=""
                                            className="w-10" 
                                        />
                                    <h3 className="text-[10px] lg:text-base text-white whitespace-nowrap">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Third row */}
                        <div className="flex flex-row gap-2 lg:gap-4 w-full justify-center">
                            {skills.filter((_, i) => i % 3 === 2).map((skill, idx) => (
                                <div key={idx} className="p-[2px] rounded-xl bg-gradient-to-r from-white to-sky-400 w-1/5">
                                    <div className="flex flex-col justify-center items-center p-2 lg:px-8 lg:py-2 gap-1 border border-black rounded-xl bg-black">
                                        <img 
                                            src={skill.icon} 
                                            alt=""
                                            className="w-10" 
                                        />
                                    <h3 className="text-[10px] lg:text-base text-white whitespace-nowrap">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3}}
                variants={fadeInVariants}
                className="flex w-full md:w-7/10 justify-around z-10 self-center"
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">Fall 2025</h1>
                    <p className="text-sm md:text-base font-semibold text-white text-center">Graduation</p>
                </div>
                <div className="w-[2px] height-16 bg-zinc-400"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">3.91</h1>
                    <p className="text-sm md:text-base font-semibold text-white text-center">GPA</p>
                </div>
                <div className="w-[2px] height-16 bg-zinc-400"></div>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent">10+</h1>
                    <p className="text-sm md:text-base font-semibold text-white text-center">Projects</p>
                </div>
            </motion.div>
        </section>
    )
};

export default About;