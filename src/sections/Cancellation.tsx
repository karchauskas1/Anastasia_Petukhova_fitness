import { motion } from "framer-motion";
import { AlertCircle, Clock, CheckCircle } from "lucide-react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const rules = [
  {
    icon: AlertCircle,
    iconColor: "text-coral",
    bgColor: "bg-coral/10",
    text: "Отмена менее чем за 3 часа — оплачивается 50% тренировки",
  },
  {
    icon: AlertCircle,
    iconColor: "text-coral",
    bgColor: "bg-coral/10",
    text: "Отмена менее чем за 1 час или без предупреждения — занятие оплачивается полностью",
  },
  {
    icon: Clock,
    iconColor: "text-gray-text",
    bgColor: "bg-gray-100",
    text: "Онлайн-тренировки — по тем же правилам",
  },
  {
    icon: CheckCircle,
    iconColor: "text-mint",
    bgColor: "bg-mint/10",
    text: "Отмена заранее (за 4 часа и более) — перенос без потери",
  },
];

const lateRules = [
  {
    emoji: "⏰",
    text: "Если ученица опаздывает, тренировка всё равно заканчивается в запланированное время (без продления)",
  },
  {
    emoji: "⏳",
    text: "Если опаздываю я, время продлеваю или компенсирую в другой день",
  },
];

export default function Cancellation() {
  return (
    <section id="cancellation" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Памятка об отменах"
          subtitle="Важная информация о переносе и отмене тренировок"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card hover={false} className="p-6 md:p-8">
            {/* Main Rules */}
            <div className="space-y-4 mb-8">
              {rules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl ${rule.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <rule.icon className={`w-5 h-5 ${rule.iconColor}`} />
                  </div>
                  <p className="text-dark pt-2">{rule.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-6" />

            {/* Late Rules */}
            <div className="space-y-4">
              {lateRules.map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl">{rule.emoji}</span>
                  <p className="text-gray-text pt-1">{rule.text}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
