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
import BlogSection from '@/components/BlogSection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="flex justify-center my-8">
        <iframe src="https://www.trip.com/partners/ad/SB15266995?Allianceid=7974128&SID=300882170&trip_sub1=%E7%BE%85%E8%A8%A5%E6%B2%B3%E5%8F%A3" style={{width: '728px', height: '90px', border: 'none'}} frameBorder="0" scrolling="no" id="SB15266995"></iframe>
      </div>
      <About />
      <div className="flex justify-center my-8">
        <iframe src="https://www.trip.com/partners/ad/SB15271426?Allianceid=7974128&SID=300882170&trip_sub1=" style={{width: '728px', height: '90px', border: 'none'}} frameBorder="0" scrolling="no" id="SB15271426"></iframe>
      </div>
      <Gallery />
      <div className="flex justify-center my-8">
        <iframe src="https://www.trip.com/partners/ad/SB15271076?Allianceid=7974128&SID=300882170&trip_sub1=%E7%AC%AC%E6%AF%94%E5%88%A9%E6%96%AF" style={{width: '728px', height: '90px', border: 'none'}} frameBorder="0" scrolling="no" id="SB15271076"></iframe>
      </div>
      <Reviews />
      <Guide />
      <BlogSection />
      <MapEmbed />
      <Sources />
      <Footer />
    </main>
  );
}
