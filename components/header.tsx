"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@/i18n/routing";
import logo from "/public/logo.svg";
import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="overlay w-screen h-screen bg-black/50 fixed top-0 left-0 z-10 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <header
        className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? "bg-background" : "bg-transparent"}`}
      >
        <div className="container flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            <Image
              src={logo}
              alt="Logo"
              width={40}
              height={40}
              className="inline-block mr-2"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
            <nav className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
