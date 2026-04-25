import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl?: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "DG Menus",
      description: t("items.dg_menu.description"),
      image: "/Projects/dg-menu.png?height=380&width=600",
      technologies: [
        "Next.js",
        "i18n",
        "TypeScript",
        "Tailwind CSS",
        "Context API",
      ],
      liveUrl: "https://dgmenus.com",
      githubUrl: "https://github.com/mahmoud-abu-attiya/dg-menu",
    },
    {
      id: 2,
      title: "Staker Rat",
      description: t("items.stalker_rat.description"),
      image: "/Projects/stalker-rat.png?height=380&width=600",
      technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://staker-rat-v2.vercel.app/",
      githubUrl: "https://github.com/mahmoud-abu-attiya/staker-rat-v2",
    },
    {
      id: 3,
      title: "LAMA e-commerce",
      description: t("items.lama.description"),
      image: "/Projects/lama.png?height=380&width=600",
      technologies: [
        "Next.js",
        "Zustand",
        "TypeScript",
        "WIX API",
        "Tailwind CSS",
      ],
      liveUrl: "https://lama-beta-seven.vercel.app/",
      githubUrl: "https://github.com/mahmoud-abu-attiya/next-ecommerce",
    },
    {
      id: 4,
      title: "BrainWave",
      description: t("items.brainwave.description"),
      image: "/Projects/brainwave.png?height=380&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://beack.vercel.app/",
      githubUrl: "https://github.com/mahmoud-abu-attiya/beack",
    },
    {
      id: 5,
      title: t("items.arab_center.title"),
      description: t("items.arab_center.description"),
      image: "/Projects/center.png?height=380&width=600",
      technologies: ["Next.js", "Axios", "Redux Toolkit", "Tailwind CSS"],
      liveUrl: "https://arab-centre.vercel.app/",
    },
    {
      id: 6,
      title: "NEES",
      description: t("items.nees.description"),
      image: "/Projects/nees.png?height=380&width=600",
      technologies: ["React", "JavaScript", "Material UI"],
      liveUrl: "https://nees.vercel.app/dashboard",
      githubUrl: "https://github.com/mahmoud-abu-attiya/dashboard",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="border-2 border-primary transition-all group mesh-2 rounded-xl"
            >
              <div className="relative h-44 overflow-hidden mx-4 -mt-4 rounded-lg shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex gap-4 items-center mt-auto">
                <Button
                  asChild
                  className="bg-white text-primary rounded-lg grow hover:opacity-90 hover:bg-white"
                >
                  <Link
                    href={project.liveUrl}
                    aria-label={`View ${project.title} live demo.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("live_demo")}
                  </Link>
                </Button>
                {project.githubUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-lg grow hover:opacity-90 bg-slate-900 border-slate-700 text-white hover:bg-slate-900 hover:text-white"
                  >
                    <Link
                      href={project.githubUrl}
                      aria-label={`Go to github to see ${project.title} source code.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t("source_code")}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    disabled
                    variant="outline"
                    title={t("private_code")}
                    className="rounded-lg grow hover:opacity-90 bg-slate-900 border-slate-700 text-white hover:bg-slate-900 hover:text-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {t("source_code")}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          asChild
          variant="outline"
          className="rounded-lg mt-10 mx-auto block w-fit"
        >
          <Link
            href={"https://github.com/mahmoud-abu-attiya?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center hover:shadow-md hover:border-white"
          >
            {t("more_projects")} <Github className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
