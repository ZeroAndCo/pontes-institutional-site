import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWeAct from "@/components/HowWeAct";
import Stats from "@/components/Stats";
import Pillars from "@/components/Pillars";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <HowWeAct />
        <Stats />
        <Pillars />
        <Team />
        <Testimonials />
        {/* <Partners /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
