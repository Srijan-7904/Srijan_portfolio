import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/Srijan-7904',
    },
    publisher: {
      '@type': 'Person',
      name: 'Srijan Jaiswal',
      url: 'https://github.com/Srijan-7904',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Srijan Jaiswal',
    description: "Portfolio and projects by Srijan Jaiswal — Full Stack Developer, DevOps Engineer and UI/UX Designer.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Srijan Jaiswal',
      url: 'https://github.com/Srijan-7904',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Srijan Jaiswal',
    url: 'https://github.com/Srijan-7904',
    sameAs: [
      'https://github.com/Srijan-7904',
      'https://x.com/Srijanj7904',
      'https://linkedin.com/in/srijan-jaiswal-937477253',
      'https://www.instagram.com/srijanjaiswal7904',
    ],
    jobTitle: 'Full Stack Developer & DevOps Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Lovely Professional University',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
