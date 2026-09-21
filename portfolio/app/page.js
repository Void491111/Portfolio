import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <Projects />
      <Contact />
    </main>
  );
}