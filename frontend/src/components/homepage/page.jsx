import { React } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ReactTyped } from "react-typed";


const Homepage = () => {
    return (
        <section className="h-[calc(100vh-80px)] bg-[url(/assets/img/background.jpg)] bg-cover bg-center bg-no-repeat px-8 md:px-16 2xl:px-24">
            <div className="flex flex-row h-full">
                {/* Left: Text */}
                <div className="flex-3 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5 md:pr-10">
                    <h2 className="md:self-start text-blue-600 text-xl sm:text-2xl 2xl:text-3xl py-1 px-5 bg-blue-500/20 rounded-md border-2 border-blue-600">
                        Welcome to my Portfolio!
                    </h2>
                    <h1 className="text-white font-bold text-4xl sm:text-5xl 2xl:text-6xl text-center md:text-left drop-shadow-[0_8px_8px_theme('colors.blue.600')]">
                        <ReactTyped
                            strings={["Hello! My name is Jeffrey Hoang"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                    <p className="text-zinc-400 text-center md:text-left text-lg 2xl:text-xl w-9/10">
                        I'm a software developer passionate about developing and integrating AI into scalable, 
                        efficient, and user-friendly products that make a positive impact on people's 
                        lives.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://github.com/jeffreyhoang" target="_blank" rel="noopener noreferrer" className="homepage-link">
                            <FontAwesomeIcon icon={faGithub} className="homepage-link-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jeffrey-hoang-095664260" target="_blank" rel="noopener noreferrer" className="homepage-link">
                            <FontAwesomeIcon icon={faLinkedin} className="homepage-link-icon" />
                        </a>
                        <a href="mailto:hoangjeffrey04@gmail.com" target="_blank" rel="noopener noreferrer" className="homepage-link">
                            <FontAwesomeIcon icon={faEnvelope} className="homepage-link-icon" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="homepage-arrow-button">
                            <span className="">Lets Connect </span>
                            <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="homepage-arrow-button-icon" />
                        </button>
                        <button className="homepage-arrow-button" onClick={() =>window.open("/resume.pdf")}>
                            <span className="homepage-arrow-button">View Resume </span>
                            <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="homepage-arrow-button-icon" />
                        </button>
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="hidden flex-2 md:flex flex-col justify-center items-center">
                    <img 
                        src="/assets/img/astronaut.png" 
                        alt="" 
                        className="homepage-astronaut-image"
                    />
                </div>
            </div>
        </section>
    )
};

export default Homepage;