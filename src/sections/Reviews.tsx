import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, MessageCircle, X } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

// Import before/after images
import transformation1 from "../assets/IMG_4355.JPG";
import transformation2 from "../assets/IMG_4357.jpg";
import transformation3 from "../assets/IMG_4358.jpg";
import transformation4 from "../assets/IMG_4359.jpg";

const TELEGRAM_LINK = "https://t.me/petukhovaas";

interface Transformation {
  id: number;
  image: string;
  description: string;
}

interface TextReview {
  id: number;
  name: string;
  text: string;
  source: "telegram" | "whatsapp";
}

// Реальные фото трансформаций
const transformations: Transformation[] = [
  {
    id: 1,
    image: transformation1,
    description: "Улучшение осанки и тонуса мышц",
  },
  {
    id: 2,
    image: transformation2,
    description: "Результат за 1.5 месяца тренировок",
  },
  {
    id: 3,
    image: transformation3,
    description: "Трансформация за 10 месяцев",
  },
  {
    id: 4,
    image: transformation4,
    description: "Укрепление мышц и рельеф",
  },
];

// Текстовые отзывы из мессенджеров
const textReviews: TextReview[] = [
  {
    id: 1,
    name: "Юля",
    text: "Хочу поблагодарить в первую очередь тебя, Настя, за твою работу с нами. Ты умеешь заряжать энергией и давать веру в свои силы. Спасибо за драйв в тренировочном процессе, за рекомендации по питанию, за эмоциональную поддержку в достижении результата!! Спасибо за твой труд, ты лучшая!!! Ты очень доброжелательная и умеющая расположить к себе, ответственная и внимательная.",
    source: "whatsapp",
  },
  {
    id: 2,
    name: "Марина",
    text: "Я хожу к тебе 5й месяц и я как будто заново полюбила спорт и наконец то выстроился режим, любовь к своему телу. Я всегда знала, что любовь к тренировкам проявится только через коннект тренера и ученика — и ты это доказала! Своим подходом, бережным отношением и любовью к своему делу. Ты просто мое открытие 2025 года!",
    source: "telegram",
  },
  {
    id: 3,
    name: "Алёна",
    text: "Всем доброе утро! Начала его с зарядки вместе с Настей. Не верю, что сама встала и сделала! Обычно обещаю себе начинать день с зарядки, но ни разу так и не начала. Сначала было ооочень лениво и трудно, но минут через 5 я с большим удовольствием делала все упражнения. Заряд эндорфинов и бодрости на весь день! Спасибо Настюше!",
    source: "telegram",
  },
  {
    id: 4,
    name: "Ольга",
    text: "Настюш, спасибо большое за тренировку! Чувствую себя бодро и ощущения классные. Поняла в процессе, что тело еще помнит, что такое нагрузка, и тренировка далась тяжеловато, но терпимо!",
    source: "telegram",
  },
  {
    id: 5,
    name: "Катя",
    text: "Настюша, спасибо огромное за тренировку!! Я так давно сочно не качала низ, тяжело, но с тобой всё выполнимо!",
    source: "telegram",
  },
  {
    id: 6,
    name: "Анна",
    text: "Настя, спасибо огромное, что ведешь меня к большим весам и трудностям, с тобой одно удовольствие заниматься!",
    source: "telegram",
  },
  {
    id: 7,
    name: "Виктория",
    text: "Настя, спасибо, выполнила сегодняшнюю тренировку, по сложности средне было, но отжимания — это то, что нужно!",
    source: "telegram",
  },
  {
    id: 8,
    name: "Даша",
    text: "Я только первый раз в марафоне, хочу сбросить пару кг и убрать бока. Настя, спасибо за тренировку!",
    source: "telegram",
  },
];

export default function Reviews() {
  const transformationsScrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTransformations = (direction: "left" | "right") => {
    if (transformationsScrollRef.current) {
      const scrollAmount = 400;
      transformationsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollReviews = (direction: "left" | "right") => {
    if (reviewsScrollRef.current) {
      const scrollAmount = 350;
      reviewsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Результаты моих клиенток"
          subtitle="Истории трансформаций"
        />

        {/* Transformations Carousel */}
        <div className="relative mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Left arrow */}
          <button
            onClick={() => scrollTransformations("left")}
            className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable area */}
          <div
            ref={transformationsScrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 snap-x"
          >
            {/* Left spacer */}
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />

            {transformations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 snap-start cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <Card hover={false} className="p-3 w-72 md:w-96">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-text">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}

            {/* Right spacer */}
            <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scrollTransformations("right")}
            className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Text Reviews Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
              Отзывы клиенток
            </h3>
            <p className="text-gray-text">Что говорят о тренировках</p>
          </motion.div>

          {/* Horizontal scroll for reviews */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Left arrow */}
            <button
              onClick={() => scrollReviews("left")}
              className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable reviews */}
            <div
              ref={reviewsScrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-4 snap-x"
            >
              {/* Left spacer */}
              <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />

              {textReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 snap-start w-80"
                >
                  <Card hover={false} className="p-5 h-full flex flex-col min-h-[280px]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        review.source === "telegram" ? "bg-blue-100" : "bg-green-100"
                      }`}>
                        <MessageCircle className={`w-4 h-4 ${
                          review.source === "telegram" ? "text-blue-500" : "text-green-500"
                        }`} />
                      </div>
                      <span className="font-medium text-dark">{review.name}</span>
                    </div>

                    <Quote className="w-6 h-6 text-coral/20 mb-2 flex-shrink-0" />

                    <p className="text-dark/80 text-sm leading-relaxed flex-grow">
                      {review.text}
                    </p>

                    <div className="flex gap-1 mt-3 pt-3 border-t border-gray-100">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-coral text-coral"
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}

              {/* Right spacer */}
              <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollReviews("right")}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll hint */}
          <p className="text-center text-gray-text/60 text-sm mt-4">
            ← Листайте для просмотра всех отзывов →
          </p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-12">
              Записаться на тренировку
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Lightbox modal for transformations */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Трансформация"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
