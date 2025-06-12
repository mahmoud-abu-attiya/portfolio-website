
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Logo from "/public/logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Github" ,href: "https://github.com/mahmoud-abu-attiya", icon: <Github className="h-5 w-5" /> },
    { name: "Linkedin" ,href: "https://www.linkedin.com/in/mahmoud-abu-attiya-978496210/", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Instagram" ,href: "https://www.instagram.com/mahmoud_abu_attiya/", icon: <Instagram className="h-5 w-5" /> },
    { name: "Email" ,href: "mailto:mahmoud.abuattiya106@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ]

  return (
    <footer className="bg-muted py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start flex flex-col items-center md:items-start">
              <Image src={Logo} alt="Logo" width={40} height={40} className="inline-block" />
              <span className="font-bold text-primary mt-2">Mahmoud Abu-Attiya</span>
            <p className="text-sm text-muted-foreground">Frontend Developer</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`A link to Mahmoud ${link.name}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Mahmoud Abu-Attiya. Frontend.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
