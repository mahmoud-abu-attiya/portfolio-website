import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {

  interface Project {
    id: number
    title: string
    description: string
    fullDescription: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with cart and checkout functionality.",
      fullDescription:
        "A comprehensive e-commerce solution built with Next.js and Tailwind CSS. Features include product listings, search functionality, shopping cart, user authentication, and secure checkout process. The application is fully responsive and optimized for all devices.",
      image: "/project_dg-menu.png?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "Stripe"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and deadlines.",
      fullDescription:
        "A task management application that helps users organize their work and increase productivity. Features include task creation, project categorization, deadline tracking, and progress visualization. The app includes a drag-and-drop interface for easy task management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TypeScript", "Material UI", "Firebase", "React DnD"],
      liveUrl: "https://example.com/taskmanager",
      githubUrl: "https://github.com/username/taskmanager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts and interactive maps.",
      fullDescription:
        "A weather dashboard that provides real-time weather information and forecasts for locations worldwide. The app features interactive maps, temperature graphs, and detailed weather conditions. Users can save favorite locations and receive weather alerts.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "Leaflet", "Styled Components"],
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/username/weather",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media performance.",
      fullDescription:
        "A comprehensive dashboard for tracking and analyzing social media performance across multiple platforms. Features include engagement metrics, follower growth, content performance, and customizable reporting. The dashboard provides actionable insights to improve social media strategy.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Social Media APIs"],
      liveUrl: "https://example.com/socialdashboard",
      githubUrl: "https://github.com/username/socialdashboard",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Search and discover recipes based on ingredients and dietary preferences.",
      fullDescription:
        "A recipe finder application that allows users to search for recipes based on available ingredients, dietary restrictions, and meal preferences. The app provides detailed cooking instructions, nutritional information, and user reviews. Users can save favorite recipes and create meal plans.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "CSS Modules", "Spoonacular API", "Context API", "PWA"],
      liveUrl: "https://example.com/recipefinder",
      githubUrl: "https://github.com/username/recipefinder",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills and projects.",
      fullDescription:
        "A personal portfolio website built with Next.js and Tailwind CSS. The website features a responsive design, dark mode support, and smooth animations. It showcases skills, experience, and projects in an elegant and user-friendly interface.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "i18n"],
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/username/portfolio",
    },
  ]

  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="border-2 border-primary transition-all group mesh-2 rounded-xl"
            >
              <div className="relative h-48 overflow-hidden mx-4 -mt-4 rounded-lg shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gary-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4 items-center">
                <Button asChild className="bg-white text-primary rounded-lg grow hover:opacity-90 hover:bg-white">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-lg grow hover:opacity-90 hover:bg-black">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
