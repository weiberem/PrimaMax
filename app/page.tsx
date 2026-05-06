import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import PriceCalculator from "./components/PriceCalculator";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileCta from "./components/StickyMobileCta";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Trust />
        <Services />
        <Pricing />
        <Contact />
        <FAQ />
        <Booking />
        <PriceCalculator />
      </main>
      <Footer />
      <WhatsAppButton floating />
      <StickyMobileCta />
      <RevealOnScroll />
    </>
  );
}
