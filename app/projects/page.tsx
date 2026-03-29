"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

type Category = "all" | "n8n"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const categories = [
    { id: "all" as Category, label: "All Projects" },
    { id: "n8n" as Category, label: "n8n Automations" },
  ]

  const projects = {
    n8n: [
      {
        title: "Multi-Agentic Chatbot",
        description:
          "A chatbot powered by multiple autonomous agents, capable of handling complex queries, delegating tasks, and providing intelligent responses across domains.",
        tech: ["n8n", "OpenAI", "Webhooks", "API Integration"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Multi-Agentic Voice Bot",
        description:
          "A voice assistant integrating multiple agentic workflows for voice-based task automation, information retrieval, and conversational AI.",
        tech: ["n8n", "Speech-to-Text", "OpenAI", "API Integration"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Cold Outreach Email & LinkedIn Automation",
        description:
          "Automates personalized cold outreach campaigns via email and LinkedIn, leveraging agentic AI for message crafting, scheduling, and follow-ups.",
        tech: ["n8n", "LinkedIn API", "Email Automation", "OpenAI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
  }

  const getFilteredProjects = () => {
    if (selectedCategory === "all") {
      return [...projects.n8n]
    }
    return projects[selectedCategory]
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore my work across different domains of AI and automation
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {getFilteredProjects().map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
