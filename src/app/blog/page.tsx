'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <Header />
      <div className="py-12">
        <BlogSection />
      </div>
      <Footer />
    </main>
  );
}