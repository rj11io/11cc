import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const EMAIL = "ricardojorgexyz@gmail.com"

const mailto = (subject: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

const tracks = [
  {
    title: "For individuals",
    kicker: "From non-technical to AI power user",
    body: "You don't need a CS degree to build with AI. You need someone who has done it, sitting next to you.",
    bullets: [
      "Zero to power user: prompts, tools, and habits that stick",
      "Pair programming and vibe coding sessions: build real things together",
      "Bespoke workflows: automate the boring parts of your work",
      "Continuous support: when something on the frontier actually matters, you hear it from me, with a take and a next step. No firehose.",
    ],
    cta: "Start learning",
    subject: "AI Coaching (Individual)",
  },
  {
    title: "For companies",
    kicker: "Bring your team up to speed, without disruption",
    body: "Your team doesn't need another mandate to “use AI more”. It needs working examples, guardrails, and someone who has rolled this out before. Non-disruptive by design: it fits your stack and your schedule.",
    bullets: [
      "Team training on frontier tools, infrastructure, and best practices",
      "Adoption that fits your stack and your schedule, not the other way around",
      "Bespoke solutions and automations built for your operation",
      "Advisory retainer: a standing line to someone tracking the frontier",
    ],
    cta: "Upskill your team",
    subject: "AI Consulting (Company)",
  },
]

const reasons = [
  "I've built with AI since the first releases of Copilot and ChatGPT",
  "I ship AI products for B2B clients: agents, automations, data extraction pipelines, chat experiences (b2b.rj11.io)",
  "I've trained teams before: onboarding programs, playbooks, and weekly tech talks as a team lead",
  "I publish open-source AI skills and workflows (ai.rj11.io)",
]

const steps = [
  {
    title: "Intro call",
    body: "You tell me where you are and where you want to be.",
  },
  {
    title: "Plan",
    body: "Sessions, cadence, and outcomes that fit your pace.",
  },
  {
    title: "Build",
    body: "Every session produces something you keep: a skill, a workflow, an automation.",
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
          <a href="/" className="font-mono text-sm tracking-widest">
            cc.rj11.io
          </a>
          <nav className="flex items-center gap-4">
            <a
              href="https://www.rj11.io"
              className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline"
            >
              rj11.io
            </a>
            <a
              href="https://www.cv.rj11.io"
              className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline"
            >
              cv
            </a>
            <Button
              size="sm"
              nativeButton={false}
              render={<a href={mailto("AI Coaching")} />}
            >
              <Mail data-icon="inline-start" />
              Get in touch
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto w-full max-w-5xl px-6 pt-24 pb-20">
          <Eyebrow>Coaching · Consulting · Advisory</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Keep up with AI. Without the overwhelm.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            The AI frontier moves weekly and most advice is noise. I&apos;m RJ:
            I build with these tools every day, and I teach people and teams to
            use them properly. Calm, practical, at your pace.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={mailto("AI Coaching")} />}
            >
              Book a first session
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href="#tracks" />}
            >
              See how it works
            </Button>
          </div>
        </section>

        <Separator />

        <section id="tracks" className="mx-auto w-full max-w-5xl px-6 py-20">
          <Eyebrow>Two tracks</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance">
            Whether it&apos;s you or your whole team.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Same coach, same method: hands-on sessions that leave something
            working behind.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <Card key={track.title} className="flex flex-col">
                <CardHeader>
                  <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                    {track.kicker}
                  </p>
                  <CardTitle className="text-2xl">{track.title}</CardTitle>
                  <CardDescription className="text-base leading-7">
                    {track.body}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-8">
                  <ul className="space-y-3">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 bg-primary"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    nativeButton={false}
                    render={<a href={mailto(track.subject)} />}
                  >
                    {track.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <Eyebrow>Why me</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance">
            I teach what I ship.
          </h2>
          <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {reasons.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance">
            Three steps, at your pace.
          </h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border border-border p-6">
                <p className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <Separator />

        <section className="mx-auto w-full max-w-5xl px-6 py-20">
          <Eyebrow>About</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance">
            Ricardo Jorge. Call me RJ.
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            Ten years of professional product engineering, most of them as the
            first frontend hire: the person who sets up the architecture, the
            tooling, and the playbooks, then teaches the team to run them. I
            went all-in on AI when the first tools appeared, and now the
            teaching half of my work has a name: this.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Full profile at{" "}
            <a
              href="https://www.rj11.io"
              className="text-primary underline underline-offset-4"
            >
              rj11.io
            </a>
            , full CV at{" "}
            <a
              href="https://www.cv.rj11.io"
              className="text-primary underline underline-offset-4"
            >
              cv.rj11.io
            </a>
            .
          </p>
          <p className="mt-8 max-w-2xl border border-border bg-accent-surface p-4 text-sm leading-6">
            Need it built rather than taught? I also take full product
            engineering engagements at{" "}
            <a
              href="https://b2b.rj11.io"
              className="text-primary underline underline-offset-4"
            >
              b2b.rj11.io
            </a>
            .
          </p>
        </section>

        <Separator />

        <section className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Start where you are.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell me what you want to be able to do with AI. I&apos;ll tell you
            what it takes and we&apos;ll build the path together.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={mailto("AI Coaching")} />}
            >
              <Mail data-icon="inline-start" />
              {EMAIL}
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            AI / Software / Product / Engineering / Technology
          </p>
          <nav className="flex gap-4 font-mono text-xs text-muted-foreground">
            <a href="https://www.rj11.io" className="hover:text-foreground">
              rj11.io
            </a>
            <a href="https://www.cv.rj11.io" className="hover:text-foreground">
              cv.rj11.io
            </a>
            <a href="https://b2b.rj11.io" className="hover:text-foreground">
              b2b.rj11.io
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
