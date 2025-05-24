import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {

  const experiences = [
    {
      position: "Frontend Developer",
      company: "Wesam Elagah (Full time REMOTE)",
      date: ["APR 2023 - OCT 2023"],
      description:
        "Refactored legacy frontend codebases using Next.js, reducing technical debt and improving maintainability. Integrated RESTful APIs and collaborated closely with backend engineers to ensure accurate data flow and error handling. Enhanced UX and scalability by implementing responsive layouts, Performance, and SEO-friendly routing.",
      skills: ["Next.js", "Tailwind CSS", "REST API", "JavaScript", "Vercel"],
    },
    {
      position: "Frontend Developer",
      company: "Orizon PR & Marketing",
      date: [ 
        "JUN 2022 - OCT 2023 (Freelance REMOTE)",
        "JUN 2021 - JUN 2022 (Full time REMOTE)" 
      ],
      description:
        "Translated Figma and PSD designs into fully responsive, cross-browser-compatible web pages using HTML, SCSS, and JS. Delivered 10+ client-facing websites on time by maintaining agile communication with designers and backend teams.",
      skills: ["HTML", "JavaScript", "React", "Next.js", "CSS3", "REST API", "Bootstrap", "Tailwind CSS", "Vercel"],
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
        Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                {/* Content */}
                <div className="w-1/2 px-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{exp.company}</span>
                      </div>
                      {exp.date.map((date, i) => 
                      (<div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span key={i} className="block">{date}</span>
                      </div>)
                    )}
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
