"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { TerminalAbout } from "@/components/terminal-about"
import { Footer } from "@/components/footer"

export default function Home() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const dynamicTexts = ["Hey there I'm Norman", "I like coffee", "I build AI systems", "I love automation"]

  useEffect(() => {
    const currentText = dynamicTexts[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentText) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timer)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length)
      return
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1)
        } else {
          return currentText.slice(0, prev.length + 1)
        }
      })
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, currentIndex, isDeleting])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="fixed top-8 left-8 flex gap-6 z-10">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>

      <div className="fixed top-8 right-8 z-10">
        <Link
          href="/contact"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="text-sm tracking-wide uppercase">Get in Touch</span>
        </Link>
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Concentric circles background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[300px] h-[300px] rounded-full border border-border/30" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-border/20" />
          <div className="absolute w-[700px] h-[700px] rounded-full border border-border/15" />
          <div className="absolute w-[900px] h-[900px] rounded-full border border-border/10" />
          <div className="absolute w-[1100px] h-[1100px] rounded-full border border-border/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/male-ai-ml-engineer-professional-headshot.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">AI / ML Engineer</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-12 min-h-[80px] flex items-center justify-center">
            <span>
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Scroll Down Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={scrollToAbout}
              className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Scroll to About section"
            >
              <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      <section id="about-section" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <TerminalAbout />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">About</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-balance">Here is a little background</h3>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a Software / Machine Learning Engineer currently based in the United Kingdom. I did my
                  undergraduate in Mechatronic Engineering in South Africa, and later completed my Masters degree in
                  Computer Science with Artificial Intelligence at the University of Nottingham in the United Kingdom.
                </p>
                <p>
                  I absolutely love all things to do with AI, robots and code. I specialize in building intelligent
                  systems that leverage deep learning, automation workflows, and agentic AI to solve real-world
                  problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research, experimenting with n8n
                  automations, or contributing to open-source projects in the ML community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
