import { React } from "react";
import Navbar from "/src/components/navbar/page";
import Homepage from "/src/components/homepage/page";
import About from "/src/components/about/page";
import Journey from "/src/components/journey/page";
import Projects from "/src/components/projects/page";
import Contact from "/src/components/contact/page";

function App() {
  return (
    <div>
      <Navbar />
      <main>

        <section>
          <Homepage />
        </section>

        <section>
          <About />
        </section>

        <section>
          <Journey />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Contact />
        </section>

      </main>
    </div>
  );
}

export default App
