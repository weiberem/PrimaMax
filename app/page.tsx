import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import PriceCalculator from "./components/PriceCalculator";
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
        <Pricing />
        <Contact />
        <Booking />
        <PriceCalculator />
      </main>
      <Footer />
      <WhatsAppButton floating />
      <RevealOnScroll />
    </>
  );
}
