import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExperienceTimeline } from "@/components/experience-timeline"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Experience & Journey</h1>
            <p className="text-lg text-muted-foreground mb-12">My professional growth and learning path</p>

            <ExperienceTimeline />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
