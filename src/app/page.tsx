import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
