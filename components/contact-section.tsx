import { Mail, MessageCircle, Send } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  // WhatsApp link - update with your actual WhatsApp number (include country code, e.g., +91XXXXXXXXXX)
  const whatsappLink = "https://wa.me/919628180970?text=Hi%20Srijan%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you"
  
  return (
    <section id="contact" className="scroll-mt-28 border-y border-border/30 px-4 py-20 sm:px-6 sm:py-28 animate-section-enter">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-linear-to-br from-primary/12 via-card/80 to-accent/8 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 items-center">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Contact</p>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl text-balance">
                Let&apos;s talk about your
                <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> next build</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-lg">
                Share your idea, role, or collaboration goal. I usually respond quickly to direct messages.
              </p>

              <div className="flex flex-col gap-3 sm:gap-3.5">
                <a
                  href="mailto:srijanjaiswal7904@gmail.com"
                  className="group inline-flex items-center justify-between overflow-hidden rounded-xl border border-border/60 px-6 py-4 font-mono text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>✉ email direct</span>
                  </span>
                  <Send className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between overflow-hidden rounded-xl border border-border/60 px-6 py-4 font-mono text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>💬 whatsapp message</span>
                  </span>
                  <Send className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </a>

                <a
                  href="https://linkedin.com/in/srijan-jaiswal-937477253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between overflow-hidden rounded-xl border border-border/60 px-6 py-4 font-mono text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>💼 linkedin message</span>
                  </span>
                  <Send className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/40 p-3 sm:p-4">
              <ContactForm className="border-none bg-transparent p-3 sm:p-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
