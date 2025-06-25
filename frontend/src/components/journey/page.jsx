import { React } from "react";
import { motion } from 'framer-motion';

const events = [
    {
        date: "August 2022",
        title: "Started College at Cal Poly Pomona",
        description: "My journey in Computer Science began at Cal Poly Pomona, sparked by a deep curiosity for how things work and a passion for building meaningful technology. From the start, I was drawn to the intersection of AI and software development, eager to learn and turn creative ideas into something real.",
        image: "/assets/img/events/college.png",
    },
    {
        date: "August 2023 - December 2023",
        title: "HTGR Project",
        description: "A year into college, I joined the Software Engineering Association (SEA) club and took on a leadership role in the HTGR project. I led a team of five to develop and fine-tune a Support Vector Machine (SVM) model to predict driving behaviors using time-series sensor data. With careful hyperparameter tuning and validation, we reached an 84.09% test accuracy—my first real taste of applied machine learning and collaborative development.",
        image: "assets/img/events/htgr.png"
    },
    {
        date: "May 2024 - August 2024",
        title: "Machine Learning Research Intern",
        description: "Selected for the STARS Program at Cal Poly Pomona, I had the opportunity to work under Dr. Hao Ji on a cutting-edge research project. We explored multi-view geometry and markerless human pose estimation using calibrated camera setups. I built a full-stack Django web application to automate the EasyMocap pipeline, from camera calibration to 3D pose reconstruction—bringing research to life through real code and meaningful impact.",
        image: "assets/img/events/stars.png"
    },
    {
        date: "August 2024 - Current",
        title: "Student Research Assistant",
        description: "After the STARS internship, I was hired to continue working with Dr. Hao Ji as a Student Research Assistant in the Computational Intelligence Lab. I developed automation tools to control multi-camera GoPro systems using Python and the OpenGoPro API, along with REST APIs to manage recordings and data transfer. Now, I’m focused on integrating tools like EasyMocap and Pose2Sim to build a streamlined and accurate 3D motion capture and reconstruction pipeline.",
        image: "assets/img/events/assistant.jpg"
    },
    {
        date: "May 2025 - Current",
        title: "AesthetiqAI",
        description: "Using tools I developed in my software engineering class, I created a startup prototype called AesthetiqAI — an AI-powered custom phone case platform where users can generate images from text prompts and preview them on phone cases. Built with Django and React, it supports real-time image overlay and user customization. I plan to expand it with more image generation features and offer additional customizable accessories in the future—maybe even turn it into a business one day!",
        image: "assets/img/events/phonecase.jpg"
    },
    {
        date: "June 2025 - Current",
        title: "Sloka – AI-Powered Educational Platform",
        description: "As Summer began, I joined Sloka — a startup dedicated to transforming education through AI by creating personalized, emotionally adaptive learning experiences for children. The platform features tools like an AI learning companion, a social-emotional learning coach, and immersive imagination-based lessons to engage students in a fun, meaningful way. I'm currently working closely with Sloka's AI engineer and leading the development of the frontend to bring these features to life.",
        image: "assets/img/events/sloka.png"
    },
    {
        date: "December 2025",
        title: "Graduation from Cal Poly Pomona",
        description: "After years of learning, coding, and creating, I’ll be graduating from Cal Poly Pomona with a degree in Computer Science. This journey has shaped who I am—someone who loves to build, lead, and solve real-world problems through technology. I’m excited to take all I’ve learned into the next chapter.",
        image: "assets/img/events/calpolypomona.jpeg"       
    },
    {
        date: "2026",
        title: "Master's in Artificial Intelligence",
        description: "Following graduation, I plan to pursue a Master’s in Artificial Intelligence to deepen my knowledge and sharpen my skills. My goal is to push the boundaries of what’s possible with AI, from research to product development, and continue creating tech that matters.",
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