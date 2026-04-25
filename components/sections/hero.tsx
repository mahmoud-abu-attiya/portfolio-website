import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex items-center justify-center text-center py-16 mesh">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted"
      ></div>

      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-3xl mx-auto">
          <div className="flex-1">
          <p className="text-muted-foreground mb-6 uppercase tracking-widest">{t("role")}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {t("title")}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">{t("subtitle")}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="#contact">{t("contact")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">{t("projects")}</Link>
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
