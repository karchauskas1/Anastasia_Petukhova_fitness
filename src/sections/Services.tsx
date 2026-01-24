import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Monitor, Zap, Check } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const TELEGRAM_LINK = "#"; // TODO: Заменить на реальную ссылку

const services = [
  {
    icon: MapPin,
    badge: "ОФЛАЙН",
    title: "Очные индивидуальные тренировки",
    location: "В САНКТ-ПЕТЕРБУРГЕ",
    description:
      "Персональные тренировки в студии Ghetto Princess или на выезде.",
    features: [
      "Полное внимание тренера",
      "Коррекция техники в реальном времени",
      "Работа с оборудованием студии",
      "Длительность: 60 минут",
    ],
    price: "от 3 000 ₽",
  },
  {
    icon: Monitor,
    badge: "ОНЛАЙН",
    title: "Онлайн индивидуальные тренировки",
    location: "ИЗ ЛЮБОЙ ТОЧКИ МИРА",
    description: "Тренировки по видеосвязи с полным сопровождением.",
    features: [
      "Удобное время под ваш график",
      "Программа под ваше оборудование",
      "Запись тренировки",
      "Длительность: 60 минут",
    ],
    price: "от 2 500 ₽",
  },
  {
    icon: Zap,
    badge: "СПЛИТ",
    title: "Сплит-тренировки",
    location: "ОНЛАЙН / ОФЛАЙН",
    description: "Комбинированный формат для тех, кто ценит гибкость.",
    features: [
      "Часть тренировок онлайн",
      "Часть тренировок в студии",
      "Идеально для путешествующих",
      "Экономия времени и бюджета",
    ],
    price: "Индивидуально",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Форматы тренировок"
          subtitle="Выберите удобный для вас формат занятий"
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
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full"
            >
              <Card className="h-full flex flex-col p-8">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <service.icon className="w-5 h-5 text-coral" />
                  <span className="text-xs font-bold text-coral tracking-wider">
                    {service.badge}
                  </span>
                  <span className="text-xs text-gray-text">
                    {service.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-text mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />
                      <span className="text-gray-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-2xl font-bold text-dark">{service.price}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-12">
              Записаться на тренировку
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
