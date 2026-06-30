import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <Services />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
