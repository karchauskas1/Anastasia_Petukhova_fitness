import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Youtube, Instagram } from "lucide-react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

// TODO: Заменить на реальные ссылки
const socialLinks = [
  {
    name: "Telegram",
    icon: Send,
    description: "Чат и консультации",
    link: "#",
    color: "bg-[#0088cc]",
    hoverColor: "hover:bg-[#0077b5]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Бесплатные тренировки",
    link: "#",
    color: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
  },
  {
    name: "Instagram*",
    icon: Instagram,
    description: "Закулисье и мотивация",
    link: "#",
    color: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]",
    hoverColor: "hover:opacity-90",
  },
];

export default function Social() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Давайте дружить"
          subtitle="Следите за полезным контентом в социальных сетях"
        />

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="block"
            >
              <Card className="text-center p-8 h-full group">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${social.color} ${social.hoverColor} mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110`}
                >
                  <social.icon className="w-8 h-8 text-white" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-dark mb-2">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="text-gray-text text-sm">{social.description}</p>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Instagram Disclaimer */}
        <p className="text-center text-gray-text text-xs mt-8 max-w-lg mx-auto">
          * Принадлежит компании Meta, признанной экстремистской и запрещённой
          на территории РФ
        </p>
      </div>
    </section>
  );
}
