import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import PriceCalculator from "./components/PriceCalculator";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import RevealOnScroll from "./components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <PriceCalculator />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton floating />
      <RevealOnScroll />
    </>
  );
}
