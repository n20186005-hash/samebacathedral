'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guide from '@/components/Guide';
import MapEmbed from '@/components/MapEmbed';
import Sources from '@/components/Sources';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Guide />
      <MapEmbed />
      <Sources />
      <Footer />
    </main>
  );
}
