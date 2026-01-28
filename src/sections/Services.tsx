import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Monitor, Users, Check, ChevronDown, ChevronUp } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const TELEGRAM_LINK = "https://t.me/petukhovaas";

interface PriceOption {
  sessions: string;
  totalPrice: string;
  perSession: string;
  highlight?: boolean;
  note?: string;
}

interface ServiceData {
  icon: typeof MapPin;
  badge: string;
  title: string;
  location: string;
  description: string;
  features: string[];
  prices: PriceOption[];
  forTwo?: boolean;
  benefits?: string[];
}

const personalOffline: ServiceData = {
  icon: MapPin,
  badge: "ОФЛАЙН",
  title: "Персональные тренировки",
  location: "ПЕТРОГРАДСКИЙ РАЙОН",
  description: "Индивидуальные тренировки в студии Ghetto Princess.",
  features: [
    "Полное внимание тренера",
    "Коррекция техники в реальном времени",
    "Работа с оборудованием студии",
    "Длительность: 60 минут",
  ],
  prices: [
    { sessions: "Разовая", totalPrice: "2 900 ₽", perSession: "" },
    { sessions: "4 тренировки", totalPrice: "11 200 ₽", perSession: "2 800 ₽ / тренировка" },
    { sessions: "8 тренировок", totalPrice: "21 600 ₽", perSession: "2 700 ₽ / тренировка" },
    { sessions: "12 тренировок", totalPrice: "31 200 ₽", perSession: "2 600 ₽ / тренировка", highlight: true },
  ],
};

const personalOnline: ServiceData = {
  icon: Monitor,
  badge: "ОНЛАЙН",
  title: "Персональные тренировки",
  location: "ИЗ ЛЮБОЙ ТОЧКИ МИРА",
  description: "Тренировки по видеосвязи с полным сопровождением.",
  features: [
    "Удобное время под ваш график",
    "Программа под ваше оборудование",
    "Работа из любой точки мира",
    "Длительность: 60 минут",
  ],
  prices: [
    { sessions: "Разовая", totalPrice: "2 400 ₽", perSession: "" },
    { sessions: "4 тренировки", totalPrice: "9 000 ₽", perSession: "2 250 ₽ / тренировка" },
    { sessions: "8 тренировок", totalPrice: "16 000 ₽", perSession: "2 000 ₽ / тренировка" },
    { sessions: "12 тренировок", totalPrice: "22 800 ₽", perSession: "1 900 ₽ / тренировка", highlight: true },
  ],
};

const splitOffline: ServiceData = {
  icon: Users,
  badge: "СПЛИТ ОФЛАЙН",
  title: "Тренировки вдвоём",
  location: "ПЕТРОГРАДСКИЙ РАЙОН",
  description: "Персонально офлайн: 2 900 ₽/чел. → 5 800 ₽ за двоих",
  forTwo: true,
  benefits: [
    "Для подруг",
    "Для пар",
    "Мама и дочка",
  ],
  features: [
    "Выгоднее персональных тренировок",
    "Мотивация от партнёра",
    "Работа с оборудованием студии",
    "Длительность: 60 минут",
  ],
  prices: [
    { sessions: "Разовая", totalPrice: "4 200 ₽", perSession: "2 100 ₽ с человека" },
    { sessions: "4 тренировки", totalPrice: "16 000 ₽", perSession: "2 000 ₽ с человека" },
    { sessions: "8 тренировок", totalPrice: "30 400 ₽", perSession: "1 900 ₽ с человека" },
    { sessions: "12 тренировок", totalPrice: "36 000 ₽", perSession: "1 500 ₽ с человека", highlight: true, note: "Самый выгодный!" },
  ],
};

const splitOnline: ServiceData = {
  icon: Users,
  badge: "СПЛИТ ОНЛАЙН",
  title: "Тренировки вдвоём",
  location: "ИЗ ЛЮБОЙ ТОЧКИ МИРА",
  description: "Персонально онлайн: 2 400 ₽/чел. → 4 800 ₽ за двоих",
  forTwo: true,
  benefits: [
    "Для подруг",
    "Для пар",
    "Мама и дочка",
  ],
  features: [
    "Выгоднее персональных тренировок",
    "Тренируйтесь вместе из разных мест",
    "Программа под ваше оборудование",
    "Длительность: 60 минут",
  ],
  prices: [
    { sessions: "Разовая", totalPrice: "3 600 ₽", perSession: "1 800 ₽ с человека" },
    { sessions: "4 тренировки", totalPrice: "13 600 ₽", perSession: "1 700 ₽ с человека" },
    { sessions: "8 тренировок", totalPrice: "25 600 ₽", perSession: "1 600 ₽ с человека" },
    { sessions: "12 тренировок", totalPrice: "30 000 ₽", perSession: "1 250 ₽ с человека", highlight: true, note: "Самый выгодный!" },
  ],
};

function ServiceCard({ service }: { service: ServiceData }) {
  const [showPrices, setShowPrices] = useState(false);

  return (
    <Card className="flex flex-col p-6 md:p-8">
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
      <h3 className="text-xl font-bold text-dark mb-2">
        {service.title}
      </h3>

      {/* Benefits for split */}
      {service.benefits && (
        <div className="flex flex-wrap gap-2 mb-3">
          {service.benefits.map((benefit, idx) => (
            <span key={idx} className="text-xs bg-coral/10 text-coral font-medium px-3 py-1 rounded-full border border-coral/20">
              {benefit}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-text mb-4 text-sm">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6 flex-grow">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
            <span className="text-gray-text text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Prices Toggle */}
      <div className="border-t border-gray-100 pt-4">
        <button
          onClick={() => setShowPrices(!showPrices)}
          className="w-full flex items-center justify-between text-dark font-semibold mb-3 hover:text-coral transition-colors"
        >
          <span>Абонементы</span>
          {showPrices ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {showPrices && (
            <motion.div
              key="prices"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-3 mb-4 overflow-hidden"
            >
              {service.prices.map((price, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl ${price.highlight ? "bg-coral/10 border border-coral/20" : "bg-light-bg"}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-dark font-medium text-sm">{price.sessions}</span>
                    <span className={`font-bold ${price.highlight ? "text-coral" : "text-dark"}`}>
                      {price.totalPrice}
                    </span>
                  </div>
                  {price.perSession && (
                    <p className={`text-xs mt-1 ${price.highlight ? "text-coral/70" : "text-gray-text"}`}>
                      {price.perSession}
                      {price.note && <span className="ml-1 font-semibold">{price.note}</span>}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block">
          <Button variant="outline" className="w-full">
            Записаться
          </Button>
        </a>
      </div>
    </Card>
  );
}

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

        {/* Personal Training Section */}
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
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Персональные тренировки
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ServiceCard service={personalOffline} />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ServiceCard service={personalOnline} />
            </motion.div>
          </div>
        </motion.div>

        {/* Split Training Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark mb-2">
              Тренировки вдвоём (СПЛИТ)
            </h3>
            <p className="text-gray-text max-w-lg mx-auto">
              Тренируйтесь вместе с подругой, партнёром или мамой — это выгоднее и веселее!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ServiceCard service={splitOffline} />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ServiceCard service={splitOnline} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
