
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolios from "@/components/Portfolios";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Portfolios />
      <Contact />
    </div>
  );
};

export default Index;
