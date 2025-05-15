import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {

  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      date: "2021 - Present",
      description:
        "Led the development of responsive web applications using React and Next.js. Implemented state management with Redux and Context API. Collaborated with designers to create pixel-perfect UI components.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      position: "Frontend Developer",
      company: "Digital Innovations",
      date: "2019 - 2021",
      description:
        "Developed and maintained multiple client websites. Implemented responsive designs and ensured cross-browser compatibility. Worked with REST APIs and integrated third-party services.",
      skills: ["JavaScript", "React", "CSS3", "REST API"],
    },
    {
      position: "Web Developer",
      company: "Creative Agency",
      date: "2017 - 2019",
      description:
        "Created responsive websites for various clients. Collaborated with the design team to implement UI/UX designs. Maintained existing websites and implemented new features.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    },
    {
      position: "Junior Developer",
      company: "Startup Hub",
      date: "2016 - 2017",
      description:
        "Assisted in the development of web applications. Learned modern web development practices and tools. Participated in code reviews and team meetings.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
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
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.date}</span>
                      </div>
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
