import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import InteractiveHoverButton from "./InteractiveHoverButton";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#marathon", label: "Марафон" },
  { href: "#schedule", label: "Расписание" },
  { href: "#reviews", label: "Отзывы" },
];

const TELEGRAM_LINK = "#"; // TODO: Заменить на реальную ссылку

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-dark">
            Анастасия Петухова
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-text hover:text-coral transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton text="Записаться" size="sm" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-gray-text hover:text-coral transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="mt-2">
                <InteractiveHoverButton text="Записаться" className="w-full" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
