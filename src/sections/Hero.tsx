import { motion } from "framer-motion";
import InteractiveHoverButton from "../components/InteractiveHoverButton";
import TextGradientScroll from "../components/TextGradientScroll";
import trainerPhoto from "../assets/trainer.jpeg";

const TELEGRAM_LINK = "https://t.me/petukhovaas";

const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-white via-white to-light-bg overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Фото */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              {/* Декоративный элемент */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-mint/20 rounded-full blur-2xl" />

              {/* Placeholder для фото */}
              <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-peach/30 to-coral/20 shadow-xl">
                <img
                  src={trainerPhoto}
                  alt="Анастасия Петухова - фитнес-тренер"
                  className="w-full h-full object-cover"
                />
                {/* Overlay градиент */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Текст */}
          <motion.div
            initial="initial"
            animate="animate"
            className="order-1 md:order-2 text-center md:text-left"
          >
            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-coral font-semibold mb-2 text-lg"
            >
              Привет! Я
            </motion.p>

            <motion.h1
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6"
            >
              Анастасия
              <br />
              Петухова
            </motion.h1>

            <div className="mb-6">
              <TextGradientScroll
                text="Фитнес-тренер с 7-летним опытом. Работаю в фитнес-студии Ghetto Princess в Санкт-Петербурге, а также провожу индивидуальные тренировки онлайн по всему миру."
                className="text-lg md:text-xl text-dark leading-relaxed"
                type="word"
                textOpacity="medium"
              />
            </div>

            <div className="mb-8">
              <TextGradientScroll
                text="Помогаю женщинам обрести гармонию с телом через осознанный и бережный подход к тренировкам. Верю, что спорт должен приносить радость, а не быть наказанием."
                className="text-gray-text leading-relaxed"
                type="word"
                textOpacity="medium"
              />
            </div>

            <motion.div
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <InteractiveHoverButton text="Записаться на тренировку" size="lg" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
