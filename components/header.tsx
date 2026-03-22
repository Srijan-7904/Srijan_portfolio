"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github, Twitter, Linkedin } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { ThemeChanger } from "./theme-changer"
import Link from "next/link"
import Image from "next/image"

const quickLinkItems = [
  { label: "Home", href: "/#home" },
  { label: "Introduction", href: "/introduction" },
  { label: "Blog", href: "/blog" },
  { label: "Notes", href: "/notes" },
  { label: "Projects Page", href: "/projects" },
  { label: "Workbench Page", href: "/workbench" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Srijan-7904", icon: Github },
  { label: "Twitter", href: "https://x.com/Srijanj7904", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/in/srijan-jaiswal-937477253", icon: Linkedin },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.includes("#")) return href === "/#home" && pathname === "/"
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent",
      )}
    >
      <div className="w-full pl-4 pr-2 sm:pl-6 sm:pr-4 py-4">
        <nav className="flex items-center justify-between gap-3">
          <Link href="/" className="group relative flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-primary/50 bg-primary/10 font-mono text-sm text-primary transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
              <Image
                src="/HeroImage.jfif"
                alt="Srijan logo"
                fill
                sizes="36px"
                className="pointer-events-none rounded-lg object-cover object-[center_18%] transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
            <span className="font-mono text-sm tracking-tight">
              SRJ
              <span className="bg-linear-to-l from-primary/50 to-accent bg-clip-text text-transparent font-semibold">
                .DEV
              </span>
            </span>
            <div className="pointer-events-none absolute left-0 top-[calc(100%+0.3rem)] z-40 hidden w-64 max-w-[calc(100vw-2rem)] origin-top-left overflow-hidden rounded-2xl border border-border/70 bg-card/95 opacity-0 shadow-xl shadow-primary/10 ring-1 ring-primary/15 transition-all duration-300 md:block translate-y-1 scale-95 group-hover:-translate-y-2 group-hover:scale-100 group-hover:opacity-100">
              <div className="relative h-44 w-full bg-muted/10">
                <Image src="/HeroImage.jfif" alt="Srijan hero preview" fill sizes="256px" className="object-cover object-[center_16%]" />
              </div>
              <div className="border-t border-border/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Portfolio Snapshot
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
            <div className="flex w-full max-w-3xl items-center justify-center gap-1.5 overflow-x-auto whitespace-nowrap px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {quickLinkItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-300",
                    isActive(item.href)
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden items-center gap-1 sm:flex">
              <div className="flex items-center gap-1.5 mr-1">
                <ThemeChanger />
                <ThemeToggle />
              </div>

              <div className="h-5 w-px bg-border" />

              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10"
                >
                  <link.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-bottom-9 pointer-events-none shadow-lg">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="hidden h-5 w-px bg-border sm:block" />

            <div className="hidden items-center gap-2.5 font-mono text-xs text-muted-foreground sm:flex px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>status: building</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden transition-colors hover:bg-secondary"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-3.5 bg-foreground transition-all duration-300",
                    isMobileMenuOpen && "opacity-0 translate-x-2",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            " transition-all duration-400 md:hidden bg-background",
            isMobileMenuOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-1 border-t border-border/50 pt-4">
            <div className="px-4 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Quick Links
            </div>

            {quickLinkItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all duration-200 active:bg-secondary hover:text-foreground hover:bg-secondary/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary">{">"}</span>
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-4 px-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors active:bg-secondary hover:border-primary/50 hover:text-primary hover:bg-primary/10"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50">
                <ThemeChanger />
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50">
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2.5 px-4 py-3 font-mono text-xs text-muted-foreground bg-secondary/30 rounded-lg mx-4 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>status: building</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
