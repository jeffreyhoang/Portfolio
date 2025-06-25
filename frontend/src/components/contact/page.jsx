import { React, useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

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


const Contact = () => {
    // Email submission
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fb386c33-d8d5-401f-9697-cac4aaf945c5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert(result);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="bg-gradient-to-b from-sky-600 md:h-screen overflow-hidden">
            <div className="relative px-8 pt-20 flex flex-col gap-4 md:gap-8">

                {/* Title Section */}
                <div className="flex items-center justify-center gap-4 z-1">
                    <div className="w-20 sm:w-24 h-2 bg-white clip-point-left"></div>
                    <h2 className="text-white text-3xl sm:text-4xl font-semibold whitespace-nowrap">
                        Get in Touch
                    </h2>
                    <div className="w-20 sm:w-24 h-2 bg-white clip-point-right"></div>
                </div>

                <div className="container mx-auto flex flex-col gap-6 md:gap-12 items-center md:items-start md:justify-center md:flex-row z-10">
                    {/* Let's Talk Section */}
                    <motion.div 
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3}}
                        variants={leftVariants}
                        className="flex-1 flex flex-col gap-3 max-w-125"
                    >
                        <h1 className="text-3xl font-bold text-center md:text-start">Let's talk</h1>
                        <p className="text-xl self-center text-center w-4/5 md:self-start md:text-start md:w-9/10">I'm currently open to taking on new projects so feel free to reach out.</p>
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3 self-center md:self-start">
                                <FontAwesomeIcon icon={faEnvelope} className="text-2xl md:text-3xl" />
                                <p className="text-lg md:text-xl">jeffreyhoang@yahoo.com</p>
                            </div>
                            <div className="flex items-center gap-3 self-center md:self-start">
                                <FontAwesomeIcon icon={faPhone} className="text-2xl md:text-3xl" />
                                <p className="text-lg md:text-xl">+916-627-5487</p>
                            </div>
                            <div className="flex items-center gap-3 self-center md:self-start">
                                <FontAwesomeIcon icon={faLocationDot} className="text-2xl md:text-3xl" />
                                <p className="text-xl">California</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.form 
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3}}
                        variants={rightVariants}
                        onSubmit={onSubmit}
                        className="flex-1 flex flex-col items-start gap-3 self-center w-4/5 max-w-125"
                    >
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="text-md md:text-lg">Your Name:</label>
                            <input className="border-1 border-black rounded-md py-1 px-2 bg-white text-md md:text-lg" type="text" placeholder="Enter your name" name="name" required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="text-md md:text-lg">Your Email:</label>
                            <input className="border-1 border-black rounded-md py-1 px-2 bg-white text-md md:text-lg" type="email" placeholder="Enter your email" name="email" required />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="" className="text-md md:text-lg">Write your message here:</label>
                            <textarea className="border-1 border-black rounded-md py-1 px-2 bg-white text-md md:text-lg" name="message" rows="5" placeholder="Enter your message here"></textarea>
                        </div>
                        <button type="submit" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-sky-600 px-6 py-3 text-white transition hover:scale-105 cursor-pointer border-1 border-black">
                            <span>Send Message</span>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/20"></div>
                            </div>
                        </button>                    
                    </motion.form>
                </div>
            </div>
            {/* Background image (behind content) */}
            <img 
                src="/assets/img/earth.png" 
                alt="" 
                aria-hidden="false"
                className=" mt-4 select-none pointer-events-none bottom-0 left-0 w-screen z-0"
            />
        </div>
    )
};

export default Contact;