import { motion } from "framer-motion";
import {
  Trophy,
  Check,
  Bot,
  Utensils,
  Target,
  Bell,
  Brain,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Button from "../components/Button";

const MARATHON_LINK = "#"; // TODO: Заменить на реальную ссылку

const marathonFeatures = [
  { icon: Check, text: "Персональный план тренировок" },
  { icon: Utensils, text: "Индивидуальный подбор питания" },
  { icon: Target, text: "Еженедельные чек-ины с тренером" },
  { icon: Sparkles, text: "Доступ к закрытому сообществу" },
];

const botFeatures = [
  { icon: Utensils, text: "Трекер питания с подсчётом КБЖУ" },
  { icon: Target, text: "Трекер привычек" },
  { icon: Bell, text: "Напоминания о тренировках" },
  { icon: Brain, text: "Персональные рекомендации на основе AI" },
  { icon: TrendingUp, text: "Анализ прогресса" },
];

export default function Marathon() {
  return (
    <section
      id="marathon"
      className="py-20 bg-gradient-to-br from-coral/5 via-peach/10 to-mint/5 relative overflow-hidden"
    >
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Популярное
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-10 h-10 text-coral" />
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                Марафон YOURBODY
              </h2>
            </div>
            <p className="text-gray-text text-lg max-w-xl mx-auto">
              Комплексная программа трансформации для тех, кто готов к изменениям
            </p>
          </div>

          {/* Marathon Features */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-dark mb-6 text-center">
              Что входит в марафон:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {marathonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 bg-light-bg rounded-2xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-mint" />
                  </div>
                  <span className="text-dark font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-10" />

          {/* Bot Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-dark to-dark/95 rounded-2xl p-6 md:p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-coral/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-coral" />
              </div>
              <div>
                <p className="text-coral text-sm font-semibold">БОНУС</p>
                <h4 className="text-xl font-bold">AI-бот помощник</h4>
              </div>
            </div>

            <p className="text-white/70 mb-6">
              При покупке марафона вы получаете доступ к умному Telegram-боту:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {botFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-coral flex-shrink-0" />
                  <span className="text-white/90 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-10" />

          {/* Price & CTA */}
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-dark mb-2">
              3 690 ₽
            </p>
            <p className="text-gray-text mb-8">в месяц</p>

            <a href={MARATHON_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12">
                Присоединиться к марафону
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
