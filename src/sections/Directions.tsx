import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell,
  Activity,
  Footprints,
  Sparkles,
  Heart,
  TrendingDown,
  Baby,
} from "lucide-react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const directions = [
  { icon: Activity, label: "Функциональный тренинг" },
  { icon: Dumbbell, label: "Силовой формат" },
  { icon: Sparkles, label: "Работа с петлями TRX" },
  { icon: Footprints, label: "Коррекция осанки" },
  { icon: Footprints, label: "Работа со стопами" },
  { icon: TrendingDown, label: "Снижение веса" },
  { icon: Heart, label: "Женское здоровье" },
];

const maternityPoints = [
  "Подготовка к беременности",
  "Тренировки во время беременности",
  "Послеродовое восстановление",
];

export default function Directions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Направления тренировок"
          subtitle="С какими запросами я работаю"
        />

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {directions.map((direction, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
            >
              <Card className="text-center p-6 h-full">
                <direction.icon className="w-8 h-8 text-coral mx-auto mb-3" />
                <p className="font-medium text-dark text-sm md:text-base">
                  {direction.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Блок Материнство */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card
            hover={false}
            className="max-w-3xl mx-auto bg-gradient-to-br from-peach/20 via-white to-mint/10 border border-peach/20 p-8 md:p-12 relative overflow-hidden"
          >
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-mint/10 rounded-full blur-xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Baby className="w-8 h-8 text-coral" />
                <h3 className="text-2xl md:text-3xl font-bold text-dark">
                  Материнство
                </h3>
              </div>

              <p className="text-center text-gray-text mb-8">
                Бережно сопровождаю на каждом этапе:
              </p>

              <div className="space-y-4">
                {maternityPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="flex items-center gap-4 bg-white/60 rounded-2xl p-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-coral font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-dark font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-gray-text text-sm mt-8">
                Индивидуальный подход с учётом особенностей
                <br />
                вашего организма и рекомендаций врача
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
