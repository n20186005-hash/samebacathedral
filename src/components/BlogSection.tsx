'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function BlogSection() {
  const { t } = useTranslation();

  const posts = [
    { slug: 'history-of-sameba' },
    { slug: 'visitor-tips' }
  ];

  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight">
              {t('blog.title', 'Latest Blog Posts')}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              {t('blog.subtitle', 'Discover more stories and travel tips about Sameba Cathedral')}
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors shrink-0"
          >
            {t('blog.viewAll', 'View All Posts')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-xs font-medium text-accent mb-4">
                {t(`blog.posts.${post.slug}.date`)}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-accent transition-colors">
                {t(`blog.posts.${post.slug}.title`)}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-1">
                {t(`blog.posts.${post.slug}.excerpt`)}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white group-hover:text-accent transition-colors mt-auto">
                {t('blog.readMore', 'Read More')}
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}