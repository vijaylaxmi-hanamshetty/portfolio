import About from "../About";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../Myportfolio";
import MySkill from "../MySkill";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkill />
      <About />
      <MyPortfolio />
     <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
