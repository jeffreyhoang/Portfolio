import { React } from "react";
import { motion } from 'framer-motion';

const events = [
    {
        date: "August 2022",
        title: "Started College at Cal Poly Pomona",
        description: "My journey in Computer Science began at Cal Poly Pomona, driven by curiosity and a passion for building meaningful technology.",
        image: "/assets/img/events/college.png",
    },
    {
        date: "August 2023 - December 2023",
        title: "Software Engineering Assocation - HTGR Project",
        description: "I directed the development of the Software Engineering Association's HTGR project, an initiative designed to introduce students to fundamental machine learning concepts through real-world models such as Random Forest, Long Short-Term Memory, and Support Vector Machines.",
        image: "assets/img/events/htgr.png"
    },
    {
        date: "May 2024 - August 2024",
        title: "STARS: Machine Learning Research Intern",
        description: "Selected for the STARS Program at Cal Poly Pomona, I worked with Dr. Hao Ji on multi-view geometry and markerless human pose estimation, developing a Django web app to automate EasyMocap from calibration to pose estimation to 3D reconstruction",
        image: "assets/img/events/stars.png"
    },
    {
        date: "August 2024 - Current",
        title: "Student Research Assistant",
        description: "After the STARS Program, I was hired by Dr. Hao Ji as a Student Research Assistant at the Computational Intelligence Lab to explore advanced computer vision methods, progressing towards training deep neural networks and developing physics-based modeling for precise 3D human motion analysis.",
        image: "assets/img/events/assistant.jpg"
    },
    {
        date: "May 2025 - Current",
        title: "AesthetiqAI",
        description: "Using tools from my software engineering class, I built AesthetiqAI, an AI-powered custom phone case platform where users generate and preview designs in real time using Django and React.",
        image: "assets/img/events/phonecase.jpg"
    },
    {
        date: "June 2025 - Current",
        title: "Sloka – AI Education Startup",
        description: "I currently direct the development of Sloka, an adaptive AI education platform focused on personalized and social-emotional learning. Through Cal Poly Pomona’s Project Hatchery, I secured $5,000 in seed funding and faculty support, and my team is now piloting the platform with schools in Pomona and Chino Hills to promote inclusive, AI-driven learning environments.",
        image: "assets/img/events/sloka.png"
    },
    {
        date: "December 2025",
        title: "Graduation from Cal Poly Pomona",
        description: "I am graduating from Cal Poly Pomona with a degree in Computer Science, ready to apply my experience in building, leading, and solving real-world problems through technology.",
        image: "assets/img/events/calpolypomona.jpeg"       
    },
    {
        date: "2026",
        title: "Master's in Artificial Intelligence",
        description: "I plan to pursue a Master’s in Artificial Intelligence to advance my skills and create AI technologies that drive real-world impact.",
        image: "assets/img/events/masters.jpg"       
    }
]

const leftVariants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
        },
    }),
};

const rightVariants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 0.8,
        },
    }),
};


const Journey = () => {
    return (
        <section className="relative flex flex-col bg-gradient-to-b from-black to-blue-900 px-8 py-20 gap-8 overflow-hidden">
            {/* Background image (behind content) */}
            <img 
                src="/assets/img/background2.png" 
                alt="" 
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-full object-right pointer-events-none select-none z-0 object-cover"
            />
            <img 
                src="/assets/img/spaceship.png" 
                alt="" 
                aria-hidden="true"
                className="absolute rotate-340 top-25 right-5 h-40 sm:top-60 sm:left-5 md:top-40 md:left-10 md:h-50 lg:left-25 object-cover"
            />
            <img 
                src="/assets/img/planets.png" 
                alt="" 
                aria-hidden="true"
                className="absolute rotate-15 top-290 left-5 sm:top-200 lg:top-150"
            />
            <img 
                src="/assets/img/rocket.png" 
                alt="" 
                aria-hidden="true"
                className="absolute rotate-345 scale-x-[-1] h-100 bottom-30 right-[-50px] md:bottom-180 md:right-15 lg:bottom-100 xl:right-40 2xl:right-100"
            />

            {/* Title Section */}
            <div className="flex items-center justify-center gap-4 z-10">
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-left"></div>
                <h2 className="text-white text-3xl sm:text-4xl font-semibold whitespace-nowrap">
                    My Journey
                </h2>
                <div className="w-20 sm:w-24 h-2 bg-white clip-point-right"></div>
            </div>

            {/* Timeline Section */}
            <div className="relative container mx-auto px-6 flex flex-col space-y-8">
                <div className="absolute z-0 w-2 h-full bg-white shadow-md text-white left-17 md:mx-auto md:left-0 md:right-0"></div>
                {events.map((event, idx) => (
                    <div key={idx} className="relative z-10">
                        <img src={event.image} alt="" className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white sm:absolute md:mx-auto md:left-0 md:right-0"/>
                        <motion.div 
                            key={idx}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={idx}
                            variants={idx % 2 === 0 ? rightVariants : leftVariants}
                            className={`relative pt-2 sm:pl-28 sm:pt-0 md:w-1/2 ${idx % 2 === 0 ? `md:ml-auto md:pl-16 md:pl-0` : `md:mr-auto md:pr-16 md:pl-0`}`}
                        >
                            <div 
                                className={`absolute top-0 left-10 h-4 w-4 transform rotate-45 bg-white sm:left-26 sm:top-10 ${idx % 2 === 0 ? `md:left-14` : `md:right-14 md:left-auto`}`}
                                aria-hidden="true"
                            ></div>
                            <div className="bg-white p-6 flex flex-col space-y-1 rounded-md shadow-md">
                                <h2 className="text-sm font-medium text-blue-600">{event.date}</h2>
                                <h1 className="text-xl font-semibold">{event.title}</h1>
                                <p className="text-sm">{event.description}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

        </section>
    )
};

export default Journey;