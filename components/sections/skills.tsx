import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layers, Database, PenTool, GitBranch, Terminal, Globe, Cpu, Palette, LayoutGrid } from "lucide-react"

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      title: "UI Frameworks",
      icon: <Layers className="h-6 w-6" />,
      skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Shadcn UI"],
    },
    // {
    //   title: "Backend",
    //   icon: <Database className="h-6 w-6" />,
    //   skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST API", "GraphQL"],
    // },
    {
      title: "Tools",
      icon: <PenTool className="h-6 w-6" />,
      skills: ["VS Code", "Webpack", "Vite"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"],
    },
    // {
    //   title: "Testing",
    //   icon: <Terminal className="h-6 w-6" />,
    //   skills: ["Jest", "React Testing Library", "Cypress", "Playwright"],
    // },
    {
      title: "Internationalization",
      icon: <Globe className="h-6 w-6" />,
      skills: ["i18next", "next-intl", "next-translate", "RTL Support"],
    },
    {
      title: "Performance",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Lighthouse", "Web Vitals", "Code Splitting", "Lazy Loading"],
    },
    {
      title: "Design",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Responsive Design", "Mobile First", "UI/UX Principles", "Accessibility"],
    },
    {
      title: "Architecture",
      icon: <LayoutGrid className="h-6 w-6" />,
      skills: ["Component Design", "State Management", "Clean Code", "Design Patterns"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary transition-all mesh-2 rounded-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 text-white">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
