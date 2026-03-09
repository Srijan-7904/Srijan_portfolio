import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://srijandev.netlify.app'),
  title: {
    default: "Srijan Jaiswal — Full Stack Developer & DevOps Engineer",
    template: "%s | Srijan Jaiswal",
  },
  description:
    "I am a driven and adaptable Full Stack Developer and DevOps Engineer passionate about continuous learning. Experiments, projects, and open-source artifacts by Srijan Jaiswal.",
  keywords: ["Full Stack Developer", "DevOps Engineer", "UI/UX Designer", "React", "Node.js", "Python", "Docker", "AWS", "Web Development", "Software Engineering"],
  authors: [{ name: "Srijan Jaiswal", url: "https://github.com/Srijan-7904" }],
  creator: "Srijan Jaiswal",
  publisher: "Srijan Jaiswal",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Srijan Jaiswal — Full Stack Developer & DevOps Engineer",
    description: "I am a driven and adaptable Full Stack Developer and DevOps Engineer passionate about continuous learning. Projects and experiments by Srijan Jaiswal.",
    siteName: "Srijan Jaiswal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srijan Jaiswal — Full Stack Developer & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Jaiswal — Full Stack Developer & DevOps Engineer",
    description: "Full Stack Developer, DevOps Engineer and UI/UX Designer building impactful digital solutions.",
    creator: "@Srijanj7904",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
