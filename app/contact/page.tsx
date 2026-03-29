import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Work Together</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <a href="mailto:yadevrv@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/normanyadev/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center gap-3 p-6 bg-muted/30 rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:yadevrv@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
                  yadevrv@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-muted/30 rounded-lg">
                <Linkedin className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/normanyadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Connect with me
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-muted/30 rounded-lg">
                <Github className="h-8 w-8 text-primary" />
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/NormanYadev2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  View my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
