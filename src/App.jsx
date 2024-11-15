import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import ToolBar from "./components/ToolBar"

function App() {

  return (
    <>
        <ToolBar/>

        <div>
            <section id="about">
                <About />
            </section>

            <section id="skills">
                <Skills />
            </section>

            <section id="projects">
            <   Projects />
            </section>

            <section id="contact">
                <Contact />
            </section>
      </div>
    </>
  )
}

export default App
