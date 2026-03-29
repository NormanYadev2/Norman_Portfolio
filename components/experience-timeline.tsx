import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "Sep 2025 – Present · 7 mos",
    title: "AI Intern",
    company: "Standord · Internship",
    Location: "Sri Lanka · Remote",
    description:
      "Agentic AI, Generative AI, Prompt Engineering and n8n Workflow Automation",
  },
  {
    period: "Feb 2024 – Sep 2024 · 8 mos",
    title: "Senior Data Management Executive",
    company: "Fozzie · Full-time",
    Location: "United States · Remote",

    description:
      "Data Analysis, Data Management, cold email outreach, campaign management, and email integrations",
  },
  {
    period: "Aug 2022 – Feb 2024 · 1 yr 7 mos",
    title: "Data Management Specialist",
    company: "Cliently · Full-time",
    Location: "United States · Remote",
    description:
      "Data Analysis, Data Management and cold email outreach",
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
            <p className="text-primary font-medium mb-1">{exp.company}</p>
            <p className="text-muted-foreground text-sm mb-3">{exp.Location}</p>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </Card>
        </div>
      ))}
    </div>
  )
}
