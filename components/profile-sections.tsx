import {
  Award,
  Cloud,
  Database,
  Hammer,
  Landmark,
  Medal,
  Monitor,
  Server,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Monitor,
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    items: [
      { name: "React", level: 83 },
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 84 },
      { name: "Tailwind CSS", level: 81 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 83 },
      { name: "REST APIs", level: 81 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    items: [
      { name: "MongoDB", level: 84 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "DevOps",
    icon: Wrench,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    items: [
      { name: "Docker", level: 83 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 82 },
      { name: "Nginx", level: 80 },
    ],
  },
  {
    category: "Cloud",
    icon: Cloud,
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    items: [
      { name: "AWS", level: 83 },
      { name: "Netlify", level: 84 },
      { name: "Vercel", level: 81 },
    ],
  },
  {
    category: "Tools",
    icon: Hammer,
    accent: "from-pink-500/20 via-rose-500/10 to-transparent",
    items: [
      { name: "Git", level: 82 },
      { name: "GitHub", level: 83 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 81 },
    ],
  },
]

function getSkillTier(level: number) {
  if (level >= 90) return "Expert"
  if (level >= 80) return "Advanced"
  return "Intermediate"
}

const certifications = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    year: "2025",
    credentialUrl: "https://coursera.org/share/6b788c395d9e25de390c4997ce87e5d5",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman Academy",
    year: "2025",
    credentialUrl: "https://drive.google.com/file/d/1f8cRdrzaZazsY9QTRXvgxzmVfw0yxLKC/view?usp=sharing",
  },
  {
    title: "Cloud Computing AWS",
    issuer: "CipherSchools",
    year: "2025",
    credentialUrl: "https://drive.google.com/file/d/1Dsu0uEXocvjIflLfdHx11q8N2mdR1Hhe/view",
  },
]

const achievements = [
  {
    title: "PSCST - Government of Punjab Project Grant",
    highlight: "INR 75,000 Grant",
    icon: Landmark,
    accent: "from-emerald-500/25 to-teal-500/20",
    description:
      "Selected for an innovation project under the Department of Science, Technology and Environment, Government of Punjab, and awarded an INR 75,000 research and development grant for a technology-driven solution.",
  },
  {
    title: "Agrithon 2.0 - 1st Rank",
    highlight: "1st among 300+ teams",
    icon: Trophy,
    accent: "from-amber-500/25 to-orange-500/20",
    description:
      "Secured 1st Rank among 300+ teams in Agrithon 2.0, organized by the Department of Student Welfare Wing, Lovely Professional University, for presenting an innovative agriculture technology solution.",
  },
  {
    title: "AIU Anveshan 2025 - Zonal Round",
    highlight: "Represented LPU",
    icon: Medal,
    accent: "from-sky-500/25 to-cyan-500/20",
    description:
      "Represented Lovely Professional University at the AIU Anveshan 2025 Zonal Round held at G. B. Pant University of Agriculture and Technology, Uttarakhand, and secured 4th Rank.",
  },
  {
    title: "Smart India Hackathon 2025 - Finalist",
    highlight: "2nd Rank at LPU",
    icon: Award,
    accent: "from-fuchsia-500/25 to-pink-500/20",
    description:
      "Secured 2nd Rank at Lovely Professional University among 400+ participating teams during Smart India Hackathon 2025 selections.",
  },
  {
    title: "Inno Tech 2025 - 1st Runner-Up",
    highlight: "Startup Hackathon Winner",
    icon: Sparkles,
    accent: "from-violet-500/25 to-indigo-500/20",
    description:
      "Awarded 1st Runner-Up for presenting an innovative fitness-based technology solution in a startup-focused hackathon.",
  },
]

export function ProfileSections() {
  return (
    <>
      <section id="skills" className="scroll-mt-28 border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28 animate-section-enter">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 sm:mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Skills</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Core Stack</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A capability map across engineering domains, with proficiency levels for each core skill.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((group) => (
              <article
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${group.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative z-10 mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50">
                      <group.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{group.category}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Capability Zone</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-primary/35 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary/80">
                    {Math.round(group.items.reduce((acc, item) => acc + item.level, 0) / group.items.length)}% avg
                  </span>
                </div>

                <ul className="relative z-10 space-y-2.5">
                  {group.items.map((item, idx) => (
                    <li
                      key={item.name}
                      className="group/skill rounded-xl border border-border/40 bg-background/40 p-3 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
                    >
                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <span className="font-mono text-xs text-foreground transition-transform duration-300 group-hover/skill:translate-x-0.5">
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                            {getSkillTier(item.level)}
                          </span>
                          <span className="rounded-md border border-primary/35 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                            {item.level}%
                          </span>
                        </div>
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/80">
                        <div
                          className={`h-full rounded-full bg-linear-to-r from-primary to-accent animate-progress ${
                            idx === 0 ? "stagger-1" : idx === 1 ? "stagger-2" : idx === 2 ? "stagger-3" : idx === 3 ? "stagger-4" : "stagger-5"
                          }`}
                          style={{ "--skill-level": `${item.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary via-accent to-primary transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-28 border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28 animate-section-enter">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 sm:mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Certifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Verified Learning</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Curated certifications focused on modern frontend engineering, API tooling, and cloud foundations.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/12 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="rounded-md border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                      {item.year}
                    </p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Certified</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.issuer}</p>

                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center rounded-md border border-primary/35 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    view credential
                  </a>

                  <div className="mt-4 flex items-center gap-2 font-mono text-xs text-primary opacity-0 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
                    <span>{">"}</span>
                    <span>credential verified</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="scroll-mt-28 border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28 animate-section-enter">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 space-y-3 sm:mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Achievements</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Milestones</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Competitive wins, grants, and institutional recognition across innovation and applied technology.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement, index) => (
              <li
                key={achievement.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${achievement.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:border-primary/60">
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-md border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                      {achievement.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug tracking-tight transition-colors duration-300 group-hover:text-foreground sm:text-lg">
                    {achievement.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>

                  <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>{">"}</span>
                    <span>recognized impact</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="mt-6 h-px w-full bg-linear-to-r from-primary/50 via-primary/80 to-primary/50" />
        </div>
      </section>

      <section id="resume" className="scroll-mt-28 border-y border-border/30 px-4 py-20 sm:px-6 sm:py-28 animate-section-enter">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-linear-to-br from-primary/12 via-card/80 to-accent/8 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 items-center">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Professional Resume</p>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl text-balance">
                  Professional
                  <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Snapshot</span>
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-lg">
                  Looking for detailed experience, projects, and impact? Download the latest resume copy to explore my full background.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-3.5">
                <a
                  href="https://drive.google.com/uc?export=download&id=16o2sNvsS4xIu5OQtVtvazVcn8IHKrJhW"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="group relative inline-flex items-center justify-between overflow-hidden rounded-xl border border-primary bg-primary/15 px-6 py-4 font-mono text-sm font-medium text-primary transition-all duration-300 hover:border-primary/80 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>↓ download resume</span>
                  </span>
                  <span className="relative z-10 text-xs opacity-75">PDF</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/16o2sNvsS4xIu5OQtVtvazVcn8IHKrJhW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between rounded-xl border border-border/60 px-6 py-4 font-mono text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary hover:bg-primary/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>👁 open view</span>
                  </span>
                  <span className="relative z-10 text-xs opacity-75">browser</span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-between rounded-xl border border-border/60 px-6 py-4 font-mono text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-foreground/60 hover:text-foreground hover:bg-secondary/60"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>✉ inquire</span>
                  </span>
                  <span className="relative z-10 text-xs opacity-75">contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}