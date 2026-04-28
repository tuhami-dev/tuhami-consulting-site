import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogosMarquee from '@/components/LogosMarquee';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav overVideo />
      <main>
        <Hero />
        <LogosMarquee />
        <HowItWorks />
        <Services />
        <CaseStudies />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
