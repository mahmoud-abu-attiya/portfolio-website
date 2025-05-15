"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Briefcase, Code, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import AboutImage from "../../public/about.jpeg"
import Link from "next/link"

const About = () => {

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
            <div className="absolute z-10 w-full left-0 bottom-0 flex justify-center gap-4 items-center p-4">
              <Link
                href="https://www.instagram.com/mida.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-primary/50 backdrop-blur-sm text-primary/50 hover:scale-105 transition shadow-md">
                <Instagram />
              </Link>
            </div>
            <div className="relative rounded-xl h-full">
              <Image
                src={AboutImage}
                alt="About Me, Frontend Developer | React.js | Next.js | TypeScript | Tailwind CSS | Passionate About UI/UX & SEO & Performance"
                className="object-cover h-full rounded-md"
              />
            </div>
          </div>

          <div className="col-span-4">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold">
                About Me
              </h2>
              <p className="text-lg leading-6 my-2">My Name is Mahmoud Abu-Attiya but you can call me <span className="text-primary font-bold">Mida</span>.I'm a frontend developer who loves making intuitive and beautiful interfaces out of most complex problems. My specialization is in developing responsive, fast, and accessible web apps with Next.js, React, TypeScript, and Tailwind CSS.</p>

              <p className="text-lg leading-6 my-2">What motivates me is writing clean code that works but also feels right in its use. Whether it's in a team setting or a feature build that I'm leading, I really care about seamless interfaces that take the experience to a step higher.</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">Highlights:</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">Built and launched several modern UIs with Next.js performance-oriented and scalable libraries.</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">Developed a digital menu platform for restaurants with dynamic theming, QR code generation, and item management capabilities.</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">Highly passionate about neat architecture, reusable components, and pixel-pushing precision.</p>

              <p className="text-lg leading-6 text-muted-foreground my-2">I usually like to catch up on football, discover current UI trends, and learn something new to keep up with this fast-paced industry.</p>

              {/* <p className="text-lg leading-6 text-muted-foreground my-2">Currently looking for opportunities, where I can contribute, grow, and help bring engaging products to life.
                Let's connect with one another-I would love to catch up with you about frontend, product ideas, or just football ⚽.</p> */}
            </div>

            {/* <div className="grid md:grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="pt-6">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">{stat.icon}</div>
                    <h3 className="font-medium">{stat.label}</h3>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
