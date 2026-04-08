'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPostPage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = params.slug as string;

  // Render a simple 404 if the post doesn't exist (basic check)
  const title = t(`blog.posts.${slug}.title`, { defaultValue: '' });
  if (!title) {
    return (
      <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20 flex flex-col justify-between">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-accent hover:underline">
              {t('blog.backToBlog', 'Back to Blog')}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const content = t(`blog.posts.${slug}.content`, { defaultValue: '' });

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <Header />
      <article className="max-w-3xl mx-auto px-6 py-24 sm:py-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors mb-12"
        >
          <svg className="w-4 h-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          {t('blog.backToBlog', 'Back to Blog')}
        </Link>
        
        <header className="mb-12">
          <div className="text-sm font-medium text-accent mb-4">
            {t(`blog.posts.${slug}.date`)}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {t(`blog.posts.${slug}.excerpt`)}
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-neutral max-w-none">
          {content.split('\n').map((paragraph, index) => (
            paragraph.trim() ? <p key={index}>{paragraph}</p> : <br key={index} />
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}