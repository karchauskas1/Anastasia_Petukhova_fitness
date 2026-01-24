import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const TELEGRAM_LINK = "#"; // TODO: Заменить на реальную ссылку

interface ScheduleItem {
  time: string;
  name: string;
  level?: string;
}

interface DaySchedule {
  day: string;
  shortDay: string;
  classes: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    day: "Понедельник",
    shortDay: "ПН",
    classes: [
      { time: "10:00", name: "Функциональный", level: "Все уровни" },
      { time: "19:00", name: "TRX", level: "Все уровни" },
    ],
  },
  {
    day: "Вторник",
    shortDay: "ВТ",
    classes: [{ time: "19:00", name: "Силовая", level: "Все уровни" }],
  },
  {
    day: "Среда",
    shortDay: "СР",
    classes: [{ time: "10:00", name: "TRX", level: "Все уровни" }],
  },
  {
    day: "Четверг",
    shortDay: "ЧТ",
    classes: [{ time: "19:00", name: "Функциональный", level: "Все уровни" }],
  },
  {
    day: "Пятница",
    shortDay: "ПТ",
    classes: [
      { time: "10:00", name: "Силовая", level: "Все уровни" },
      { time: "19:00", name: "Mix", level: "Все уровни" },
    ],
  },
  {
    day: "Суббота",
    shortDay: "СБ",
    classes: [{ time: "11:00", name: "Растяжка", level: "Все уровни" }],
  },
];

export default function Schedule() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Расписание групповых тренировок"
          subtitle="Студия Ghetto Princess, Санкт-Петербург"
        />

        {/* Schedule Grid */}
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {schedule.map((day, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full p-4" hover={false}>
                {/* Day Header */}
                <div className="text-center mb-4 pb-3 border-b border-gray-100">
                  <p className="text-coral font-bold text-lg">{day.shortDay}</p>
                  <p className="text-gray-text text-xs hidden md:block">
                    {day.day}
                  </p>
                </div>

                {/* Classes */}
                <div className="space-y-3">
                  {day.classes.length > 0 ? (
                    day.classes.map((cls, idx) => (
                      <div
                        key={idx}
                        className="bg-light-bg rounded-xl p-3 text-center"
                      >
                        <div className="flex items-center justify-center gap-1 text-coral font-semibold text-sm mb-1">
                          <Clock className="w-3 h-3" />
                          {cls.time}
                        </div>
                        <p className="text-dark font-medium text-sm">
                          {cls.name}
                        </p>
                        {cls.level && (
                          <p className="text-gray-text text-xs mt-1">
                            {cls.level}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-text text-center text-sm py-4">
                      Выходной
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Studio Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card
            hover={false}
            className="max-w-2xl mx-auto text-center p-8 bg-light-bg"
          >
            <div className="flex items-center justify-center gap-2 text-coral mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Адрес студии</span>
            </div>
            <p className="text-dark font-medium mb-2">Ghetto Princess</p>
            <p className="text-gray-text mb-6">
              Санкт-Петербург, ул. Примерная, д. 1
              <br />
              <span className="text-sm">(адрес будет добавлен позже)</span>
            </p>

            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Записаться на групповую</Button>
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
