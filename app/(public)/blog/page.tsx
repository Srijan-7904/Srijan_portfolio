import { BlogHero } from "@/components/public/blog/blog-hero";
import { BlogList } from "@/components/public/blog/blog-list";
import { BlogSidebar } from "@/components/public/blog/blog-sidebar";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://srijan-7904.github.io';

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles, experiments, and insights from Srijan Jaiswal. Exploring full-stack development, DevOps, AI, and UI/UX design.",
  openGraph: {
    title: "Blog — Srijan Jaiswal",
    description: "Technical articles, experiments, and insights from Srijan Jaiswal.",
    url: `${baseUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-blog.png`,
        width: 1200,
        height: 630,
        alt: "Srijan Jaiswal Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Srijan Jaiswal",
    description: "Technical articles, experiments, and insights from Srijan Jaiswal.",
    images: [`${baseUrl}/og-image-blog.png`],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogHero />
      <section className="px-4 sm:px-6 py-16 sm:py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <BlogList />
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
