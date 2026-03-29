"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const skillCategories = [
    {
      category: "Automation & Tools",
      skills: [
        { name: "n8n", level: 98 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 80 },
        { name: "Crew AI", level: 90 },
        { name: "Google ADK", level: 70 },
      ],
    },
    {
      category: "Deep Learning",
      skills: [
        { name: "Neural Networks", level: 92 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 80 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 70 },
        { name: "SQL", level: 85 },
        { name: "R", level: 65 },
      ],
    },
    
    
    {
      category: "Cloud & Databases",
      skills: [
        { name: "AWS", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "Qdrant", level: 85 },
      ],
    },
  ]

  const filteredCategories =
    activeFilter === "All" ? skillCategories : skillCategories.filter((cat) => cat.category === activeFilter)

  const categories = ["All", ...skillCategories.map((cat) => cat.category)]

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Skills & Technologies</h1>
            <p className="text-lg text-muted-foreground mb-8">My technical expertise across different domains</p>

            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-12">
              {filteredCategories.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary">{category.category}</h2>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Certifications & Learning</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Associate AI Engineer for Developers From Datacamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AWS Cloud Practitioner (CLF-C02) From Datacamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Machine Learning Engineer From Datacamp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
