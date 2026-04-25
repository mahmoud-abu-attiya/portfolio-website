"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Briefcase, Code, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import AboutImage from "../../public/about.jpeg"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"

const About = () => {
  const t = useTranslations("About")

  const stats = [
    {
      icon: <User className="h-5 w-5 text-primary" />,
      label: "Experience",
      value: "2+ Years",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      label: "Projects",
      value: "20+",
    },
    {
      icon: <Code className="h-5 w-5 text-primary" />,
      label: "Technologies",
      value: "15+",
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-6 gap-8 items-center">
          <div className="img col-span-2 hidden md:block relative h-full">
            <div className="relative rounded-xl h-full">
              <Image
                src={AboutImage}
                alt={t("image_alt")}
                className="object-cover h-full rounded-md"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                {t("title")}
              </h2>
              <p className="text-lg leading-6 my-2">
                {t.rich("intro", {
                  span: (chunks) => <span className="text-primary font-bold">{chunks}</span>
                })}
              </p>

              <p className="text-lg leading-6 my-2">{t("motivation")}</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">{t("highlights_title")}</p>

              {(t.raw("highlights") as string[]).map((highlight, index) => (
                <p key={index} className="text-lg leading-6 text-muted-foreground my-2">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
