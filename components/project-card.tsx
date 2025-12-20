import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, tech, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        <div className="flex gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View source code"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
