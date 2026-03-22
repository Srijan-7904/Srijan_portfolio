import { Code2, Layers, FileText, Zap, Bot, Globe, Trophy, Star, Rocket, Users, Brain, Award } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Welcome to my Portfolio
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Srijan Jaiswal
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Full Stack Developer, DevOps Engineer, and UI/UX Designer currently pursuing B.Tech in Computer Science at
              Lovely Professional University (CGPA 8.7). Passionate about continuous learning, hackathons, and building
              impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Driven by Passion, Defined by Code
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a driven and adaptable individual with a strong passion for continuous learning and
                self-improvement. I approach every challenge with enthusiasm and a commitment to excellence. With a
                positive attitude and a proactive mindset, I strive to deliver impactful results and contribute
                meaningfully to any team or project I am part of.
              </p>

              <p>
                Currently pursuing a Bachelor&apos;s degree in Computer Science and Engineering at Lovely Professional
                University, Phagwara (CGPA: 8.7). I have actively participated in multiple hackathons — qualifying for
                the Smart India Hackathon (SIH) finale and serving as Tech Lead at Club 20 LPU, where I oversee web
                infrastructure and technical initiatives.
              </p>

              <p>
                My technical journey spans full-stack web development with React, Node.js, and Python, cloud and DevOps
                with AWS, Docker, Kubernetes and more, along with UI/UX design in Figma. I believe the best way to grow
                is to build, ship, and learn from real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Areas of Expertise
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I Work With
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Full Stack Dev",
                description:
                  "Building end-to-end web applications with React, Node.js, Express, and databases like MongoDB, PostgreSQL and MySQL.",
              },
              {
                icon: Layers,
                title: "DevOps Engineering",
                description:
                  "CI/CD pipelines, containerization with Docker & Kubernetes, cloud deployments on AWS and Google Cloud, and monitoring with Prometheus & Grafana.",
              },
              {
                icon: Zap,
                title: "UI/UX Design",
                description:
                  "Designing intuitive, responsive interfaces in Figma with attention to design systems, prototyping, and user experience best practices.",
              },
              {
                icon: Bot,
                title: "AI & ML",
                description:
                  "Building ML models with Python, TensorFlow, and Keras. Achieved 99.2% accuracy in a brain tumor detection system using VGG16.",
              },
              {
                icon: Globe,
                title: "Cloud & Infrastructure",
                description:
                  "AWS, GCP, Docker, Nginx, Jenkins, and Kubernetes for scalable, production-ready infrastructure.",
              },
              {
                icon: FileText,
                title: "Hackathons & Leadership",
                description:
                  "Qualified for SIH finale, AIU Anveshan 2025. Tech Lead at Club 20 LPU driving web development and digital innovation.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Milestones
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I&apos;ve Achieved
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              A snapshot of the work, competitions, and contributions that have shaped my journey as a fresher developer.
            </p>
          </div>

          {/* Stats Row */}
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "8.7", label: "CGPA at LPU", sub: "B.Tech CSE" },
              { value: "9+", label: "Projects Shipped", sub: "Live & deployed" },
              { value: "3+", label: "Hackathons", sub: "Won / Finalist" },
              { value: "2+", label: "Years Coding", sub: "Since 2023" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded border border-border/50 bg-card/50 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="text-3xl font-bold tracking-tight text-primary">{stat.value}</div>
                <div className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">{stat.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Trophy,
                badge: "National Level",
                title: "SIH Finale — Smart India Hackathon",
                desc: "Qualified for the SIH finale with an AI-powered Smart Farming System integrating IoT, computer vision, and a real-time web dashboard for crop disease detection.",
              },
              {
                icon: Award,
                badge: "Zonal Level",
                title: "AIU Anveshan 2025 — Finalist",
                desc: "Competed at AIU Anveshan 2025 presenting the Smart Farming System. Recognized for innovation in AgriTech and AI-driven disease diagnostics.",
              },
              {
                icon: Users,
                badge: "Leadership Role",
                title: "Tech Lead — Club 20 LPU",
                desc: "Promoted to Tech Lead at Club 20 LPU. Lead the club's web infrastructure, manage a technical team, and drive digital initiatives for 100+ members.",
              },
              {
                icon: Brain,
                badge: "AI / ML",
                title: "Brain Tumor Detection — 99.2% Accuracy",
                desc: "Built a deep learning model using VGG16, TensorFlow and Keras to detect brain tumors from MRI scans. Served via Flask API with a React frontend.",
              },
              {
                icon: Rocket,
                badge: "Full Stack",
                title: "9 Live Deployed Projects",
                desc: "Shipped 9 production projects including DecisionHub, Trackify, Podstream, Vexa, and Smart Farming System — across web apps, ML apps, and Figma designs.",
              },
              {
                icon: Star,
                badge: "Academic",
                title: "8.7 CGPA — Lovely Professional University",
                desc: "Maintaining 8.7 CGPA across 4 semesters of B.Tech CSE at LPU while leading Club 20, building projects, and competing in hackathons.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  {item.badge}
                </p>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
