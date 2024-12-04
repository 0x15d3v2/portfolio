import Hero from "../components/hero.tsx";
import Projects from "../components/projects.tsx";
import Skills from "../components/skills.tsx";
import Contact from "../components/contact.tsx";
import Header from "../components/header.tsx";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
