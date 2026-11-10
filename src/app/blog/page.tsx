'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import I18nProvider from '@/components/I18nProvider';

function BlogIndexPageContent() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <Header />
      <div className="py-12">
        <BlogSection indexPage />
      </div>
      <Footer />
    </main>
  );
}

export default function BlogIndexPage() {
  return (
    <I18nProvider>
      <BlogIndexPageContent />
    </I18nProvider>
  );
}
