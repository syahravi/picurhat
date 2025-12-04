import { Hero } from '@/components/sections/Hero';
import { Testimonials } from '@/components/sections/Testimonials';
import { ValuePropositions } from '@/components/sections/ValuePropositions';
import { About } from '@/components/sections/About';
import { Pricing } from '@/components/sections/Pricing';
import { Booking } from '@/components/sections/Booking';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <ValuePropositions />
      <About />
      <Pricing />
      <Booking />
      <FAQ />
      <Footer />
    </>
  );
}
