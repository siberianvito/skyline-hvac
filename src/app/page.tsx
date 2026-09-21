import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FrostDivider from "@/components/FrostDivider";
import Credibility from "@/components/Credibility";
import WhySkyline from "@/components/WhySkyline";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import CityDirectory from "@/components/CityDirectory";
import TrustedByBar from "@/components/TrustedByBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <main>
        <Hero />
        <TrustSection />
        <Credibility />
        <FrostDivider />
        <WhySkyline />
        <FrostDivider flip />
        <About />
        <FrostDivider />
        <Gallery />
        <CityDirectory />
        <TrustedByBar />
        <Footer />
      </main>
    </>
  );
}
