import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior AI Engineer",
    company: "Tech Innovations Inc.",
    description:
      "Leading AI infrastructure development and building production ML systems. Architecting scalable solutions that process millions of requests daily.",
  },
  {
    period: "2022 — 2024",
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    description:
      "Built and shipped multiple features using Next.js and Python. Implemented automated workflows that reduced manual processes by 70%.",
  },
  {
    period: "2021 — 2022",
    title: "Software Developer",
    company: "Digital Solutions Co.",
    description:
      "Developed web applications and RESTful APIs. Collaborated with cross-functional teams to deliver client projects on time.",
  },
  {
    period: "2020 — 2021",
    title: "Started Learning Journey",
    company: "Self-taught",
    description:
      "Began with web fundamentals, then dove deep into React, Node.js, and eventually AI/ML. Built dozens of personal projects to solidify understanding.",
  },
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-border">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

          <Card className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-primary font-medium mb-3">{exp.company}</p>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </Card>
        </div>
      ))}
    </div>
  )
}
