import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center text-center py-16 mesh">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted"
      ></div>

      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-3xl mx-auto">
          <div className="flex-1">
          <p className="text-muted-foreground mb-6 uppercase tracking-widest">frontend developer</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Crafting seamless digital experiences with passion and precision. Bridging the gap between code and creativity.
            </h1>
            <p className="text-muted-foreground text-lg mb-6">Mahmoud Abu-Attiya a passionate Frontend Developer with experience in building responsive and interactive web applications.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">Contact</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">Projects</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll down">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
