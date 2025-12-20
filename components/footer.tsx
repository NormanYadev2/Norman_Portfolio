"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© Norman Yadev</p>
          <div className="flex gap-6">
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
