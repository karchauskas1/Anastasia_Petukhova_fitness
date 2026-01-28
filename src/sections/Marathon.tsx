import { motion } from "framer-motion";
import {
  Dumbbell,
  Check,
  Utensils,
  Users,
  Play,
  Sparkles,
} from "lucide-react";
import Button from "../components/Button";

const MARATHON_LINK = "https://t.me/YourBodyPet_bot";

const marathonFeatures = [
  { icon: Play, text: "Функциональные тренировки «повторяй за мной» (дома, минимум оборудования)" },
  { icon: Check, text: "Тренировки обновляются каждую неделю" },
  { icon: Utensils, text: "Рекомендации по питанию" },
  { icon: Sparkles, text: "Экспресс-комплексы, растяжка, разминка/заминка" },
  { icon: Users, text: "Доступ к закрытому комьюнити" },
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
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Dumbbell className="w-10 h-10 text-coral" />
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                YOURBODY PRO
              </h2>
            </div>
            <p className="text-gray-text text-lg max-w-xl mx-auto">
              Спортивное пространство от Насти Петуховой, где забота о себе становится привычкой
            </p>
          </div>

          {/* Marathon Features */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-dark mb-6 text-center">
              Здесь открыт доступ к:
            </h3>
            <div className="space-y-4">
              {marathonFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-light-bg rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-mint" />
                  </div>
                  <span className="text-dark">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

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
                Присоединиться
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
