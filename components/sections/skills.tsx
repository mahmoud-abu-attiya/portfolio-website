import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layers, Database, PenTool, GitBranch, Terminal, Globe, Cpu, Palette, LayoutGrid } from "lucide-react"
import { useTranslations } from "next-intl"

const Skills = () => {
  const t = useTranslations("Skills")

  const skillCategories = [
    {
      title: t("categories.frontend"),
      icon: <Code2 className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      title: t("categories.ui_frameworks"),
      icon: <Layers className="h-6 w-6" />,
      skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Shadcn UI"],
    },
    {
      title: t("categories.tools"),
      icon: <PenTool className="h-6 w-6" />,
      skills: ["VS Code", "Webpack", "Vite"],
    },
    {
      title: t("categories.version_control"),
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub"],
    },
    {
      title: t("categories.i18n"),
      icon: <Globe className="h-6 w-6" />,
      skills: ["i18next", "next-intl", "next-translate", "RTL Support"],
    },
    {
      title: t("categories.performance"),
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Lighthouse", "Web Vitals", "Code Splitting", "Lazy Loading"],
    },
    {
      title: t("categories.design"),
      icon: <Palette className="h-6 w-6" />,
      skills: [t("items.responsive"), t("items.mobile_first"), t("items.ui_ux"), t("items.accessibility")],
    },
    {
      title: t("categories.architecture"),
      icon: <LayoutGrid className="h-6 w-6" />,
      skills: [t("items.component_design"), t("items.state_management"), t("items.clean_code"), t("items.design_patterns")],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
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
