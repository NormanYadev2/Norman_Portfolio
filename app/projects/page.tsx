"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

type Category = "all" | "n8n" | "ml" | "dl" | "agentic"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")

  const categories = [
    { id: "all" as Category, label: "All Projects" },
    { id: "n8n" as Category, label: "n8n Automations" },
    { id: "ml" as Category, label: "Machine Learning" },
    { id: "dl" as Category, label: "Deep Learning" },
    { id: "agentic" as Category, label: "Agentic AI" },
  ]

  const projects = {
    n8n: [
      {
        title: "Multi-Channel Marketing Automation",
        description:
          "Built automated workflows connecting Email, Slack, and CRM systems. Reduced manual tasks by 70% and improved lead response time by 3x.",
        tech: ["n8n", "Webhooks", "API Integration", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Content Publishing Pipeline",
        description:
          "Automated content distribution across social platforms, blogs, and newsletters. Schedule posts, resize images, and track engagement automatically.",
        tech: ["n8n", "Twitter API", "WordPress", "Buffer"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Customer Support Ticketing System",
        description:
          "Integrated support emails with ticket management, automated routing based on sentiment analysis, and customer priority classification.",
        tech: ["n8n", "Gmail", "Notion", "OpenAI API"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "E-commerce Order Fulfillment",
        description:
          "Synchronized orders between Shopify, inventory management, and shipping providers. Automated order confirmation and tracking updates.",
        tech: ["n8n", "Shopify", "Airtable", "ShipStation"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Data Backup & Sync Workflow",
        description:
          "Created automated backups across cloud storage platforms with versioning and scheduled syncs. Ensures data redundancy and accessibility.",
        tech: ["n8n", "Google Drive", "Dropbox", "AWS S3"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
    ml: [
      {
        title: "Predictive Maintenance System",
        description:
          "Built ML models to predict equipment failures before they occur. Reduced downtime by 45% and maintenance costs by 30% for manufacturing clients.",
        tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Customer Churn Prediction",
        description:
          "Developed ensemble models to identify at-risk customers with 89% accuracy. Enabled proactive retention strategies that improved retention by 25%.",
        tech: ["Python", "Random Forest", "LightGBM", "Flask"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Fraud Detection Engine",
        description:
          "Created real-time anomaly detection system for financial transactions. Processes 100K+ transactions daily with 95% precision and minimal false positives.",
        tech: ["Python", "Isolation Forest", "Redis", "FastAPI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Demand Forecasting Model",
        description:
          "Built time-series forecasting models for retail inventory optimization. Improved stock accuracy by 40% and reduced excess inventory by 28%.",
        tech: ["Python", "Prophet", "ARIMA", "Plotly"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Recommendation System",
        description:
          "Implemented collaborative filtering and content-based algorithms for personalized product recommendations. Increased conversion rates by 32%.",
        tech: ["Python", "TensorFlow", "ALS", "PostgreSQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
    dl: [
      {
        title: "Computer Vision Quality Control",
        description:
          "Deployed CNN models for automated defect detection in manufacturing. Achieved 97% accuracy detecting microscopic flaws in real-time production.",
        tech: ["PyTorch", "ResNet", "OpenCV", "Docker"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Natural Language Processing API",
        description:
          "Built transformer-based models for sentiment analysis, entity extraction, and text classification. Handles 50K+ requests daily with sub-100ms latency.",
        tech: ["TensorFlow", "BERT", "FastAPI", "Kubernetes"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Medical Image Segmentation",
        description:
          "Developed U-Net architecture for tumor detection in MRI scans. Collaborated with radiologists to achieve 94% segmentation accuracy.",
        tech: ["PyTorch", "U-Net", "MONAI", "Python"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Speech Recognition System",
        description:
          "Created end-to-end automatic speech recognition model supporting multiple languages. Achieved 92% word accuracy for conversational speech.",
        tech: ["PyTorch", "Wav2Vec2", "Whisper", "FastAPI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Generative Art Platform",
        description:
          "Built GAN-based system for creating unique digital artwork. Users provide style preferences and the model generates custom, high-resolution images.",
        tech: ["TensorFlow", "StyleGAN", "Next.js", "AWS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
    agentic: [
      {
        title: "Multi-Agent Research Assistant",
        description:
          "Created autonomous agents that collaborate to research topics, synthesize information, and generate comprehensive reports with citations.",
        tech: ["LangChain", "GPT-4", "CrewAI", "Supabase"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Autonomous Code Review Agent",
        description:
          "Built AI agent that analyzes pull requests, identifies bugs, suggests improvements, and ensures coding standards. Reduced review time by 60%.",
        tech: ["Claude", "GitHub API", "LangGraph", "TypeScript"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Task Planning & Execution System",
        description:
          "Developed agents that break down complex goals into actionable tasks, delegate to specialized sub-agents, and coordinate execution workflows.",
        tech: ["AutoGPT", "LangChain", "Redis", "FastAPI"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Customer Service AI Agent",
        description:
          "Created conversational agent with memory, tool usage, and escalation capabilities. Handles 80% of inquiries autonomously with 4.7/5 satisfaction.",
        tech: ["Vercel AI SDK", "RAG", "Pinecone", "Next.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
      {
        title: "Data Analysis Agent Pipeline",
        description:
          "Built agent system that explores datasets, generates insights, creates visualizations, and writes analytical reports. Automates 90% of routine analysis.",
        tech: ["Python", "Pandas", "LangChain", "Streamlit"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
      },
    ],
  }

  const getFilteredProjects = () => {
    if (selectedCategory === "all") {
      return [...projects.n8n, ...projects.ml, ...projects.dl, ...projects.agentic]
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
