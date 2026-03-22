"use client"

import { FormEvent, useState } from "react"
import emailjs from "@emailjs/browser"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

type FormStatus = "idle" | "sending" | "success" | "error"

type ContactFormProps = {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error")
      setMessage("Contact form is not configured yet. Please set EmailJS environment variables.")
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    const templateParams = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      to_name: "Srijan",
    }

    try {
      setStatus("sending")
      setMessage("Sending your message...")

      await emailjs.send(serviceId, templateId, templateParams, { publicKey })

      form.reset()
      setStatus("success")
      setMessage("Message sent successfully. I will get back to you soon.")
    } catch {
      setStatus("error")
      setMessage("Could not send message right now. Please try again in a moment.")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-3 rounded-2xl border border-border/60 bg-card/30 p-4 sm:p-5", className)}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Direct Message</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          name="from_name"
          placeholder="Your name"
          required
          className="h-10 border-border/70 bg-background/60 font-mono text-sm"
        />
        <Input
          name="from_email"
          type="email"
          placeholder="Your email"
          required
          className="h-10 border-border/70 bg-background/60 font-mono text-sm"
        />
      </div>

      <Input
        name="subject"
        placeholder="Subject"
        required
        className="h-10 border-border/70 bg-background/60 font-mono text-sm"
      />

      <textarea
        name="message"
        placeholder="Write your message"
        required
        rows={5}
        className="w-full resize-y rounded-md border border-border/70 bg-background/60 px-3 py-2 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "sending..." : "send message"}
        </button>

        {message && (
          <p
            className={`font-mono text-[11px] ${
              status === "success" ? "text-primary" : status === "error" ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  )
}
