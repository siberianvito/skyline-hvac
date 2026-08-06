import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import FrostDivider from "@/components/FrostDivider";
import Credibility from "@/components/Credibility";
import WhySkyline from "@/components/WhySkyline";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <TopBar />
      <main>
        <Hero />
        <Credibility />
        <FrostDivider />
        <WhySkyline />
        <FrostDivider flip />
        <About />
        <FrostDivider />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
