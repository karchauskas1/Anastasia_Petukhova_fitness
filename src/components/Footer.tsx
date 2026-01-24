import { MapPin, Mail, Send, Youtube, Instagram } from "lucide-react";

// TODO: Заменить на реальные ссылки
const socialLinks = [
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Анастасия Петухова</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Фитнес-тренер с 7-летним опытом. Помогаю женщинам обрести гармонию
              с телом через осознанный подход к тренировкам.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-coral" />
                Санкт-Петербург
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-coral" />
                  contact@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Социальные сети</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-coral transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              &copy; {currentYear} Анастасия Петухова. Все права защищены.
            </p>
            <p className="text-xs">
              * Instagram принадлежит компании Meta, признанной экстремистской и
              запрещённой на территории РФ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
