import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skillsData = [
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "OpenAI API", "Hugging Face"],
  },
  {
    category: "Backend & Infrastructure",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    category: "Frontend & UI",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Automation",
    skills: ["Git", "CI/CD", "Kafka", "Zapier", "n8n", "Make"],
  },
]

export function SkillsSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skillsData.map((group) => (
        <Card key={group.category} className="p-6">
          <h3 className="text-lg font-bold mb-4">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
