import React, { useRef, useState, useEffect } from "react";
import Navbar from "/src/components/navbar/page";
import Homepage from "/src/components/homepage/page";
import About from "/src/components/about/page";
import Journey from "/src/components/journey/page";
import Projects from "/src/components/projects/page";
import Contact from "/src/components/contact/page";

function App() {
    const [active, setActive] = useState("Home");

    const refs = {
        Home: useRef(null),
        About: useRef(null),
        Experience: useRef(null),
        Projects: useRef(null),
        Contact: useRef(null),
    };

    useEffect(() => {
        const observers = [];

        Object.entries(refs).forEach(([key, ref]) => {
            if (!ref.current) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(key);
                    }
                },
                {
                    threshold: 0, // triggers as soon as top hits rootMargin area
                    rootMargin: "-40% 0px -60% 0px", // top hits 60% of viewport
                }
            );

            observer.observe(ref.current);
            observers.push(observer);
        });

        // Cleanup all observers
        return () => observers.forEach((observer) => observer.disconnect());
    }, []);

    return (
        <div>
        <Navbar refs={refs} active={active} setActive={setActive} />

        <main>
            <section ref={refs.Home}>
                <Homepage />
            </section>
            <section ref={refs.About}>
                <About />
            </section>
            <section ref={refs.Experience}>
                <Journey />
            </section>
            <section ref={refs.Projects}>
                <Projects />
            </section>
            <section ref={refs.Contact}>
                <Contact />
            </section>
        </main>
        </div>
    );
}

export default App;
