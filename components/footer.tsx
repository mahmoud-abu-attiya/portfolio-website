
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: "https://github.com/mahmoud-abu-attiya", icon: <Github className="h-5 w-5" /> },
    { href: "https://linkedin.com/in/mahmoud-abu-attiya", icon: <Linkedin className="h-5 w-5" /> },
    { href: "https://www.instagram.com/mahmoud_abu_attiya/", icon: <Instagram className="h-5 w-5" /> },
    { href: "mailto:mahmoud.abuattiya106@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ]

  return (
    <footer className="bg-muted py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold text-primary">Mahmoud Abu-Attiya</h3>
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
