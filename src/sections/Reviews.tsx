import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const TELEGRAM_LINK = "https://t.me/petukhovaas";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  goal: string;
  duration: string;
  result: string;
  review: string;
  imageBefore?: string;
  imageAfter?: string;
}

// Placeholder данные - заменить на реальные
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Мария",
    age: 32,
    goal: "Снижение веса",
    duration: "3 месяца",
    result: "-8 кг, -12 см в талии",
    review:
      "Анастасия — потрясающий тренер! Благодаря её поддержке и грамотно составленной программе я достигла своих целей быстрее, чем ожидала. Тренировки всегда разнообразные и интересные.",
    imageBefore:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=400&fit=crop",
    imageAfter:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Елена",
    age: 28,
    goal: "Восстановление после родов",
    duration: "4 месяца",
    result: "Укрепление мышц, улучшение осанки",
    review:
      "После родов я искала тренера, который понимает особенности женского организма. Анастасия — именно такой специалист. Бережный подход и отличные результаты!",
    imageBefore:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
    imageAfter:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Анна",
    age: 35,
    goal: "Коррекция осанки",
    duration: "2 месяца",
    result: "Избавление от болей в спине",
    review:
      "Пришла с постоянными болями в спине из-за сидячей работы. Уже через месяц почувствовала значительное улучшение. Анастасия очень внимательна к деталям техники.",
    imageBefore:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&h=400&fit=crop",
    imageAfter:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Ольга",
    age: 40,
    goal: "Общее укрепление",
    duration: "6 месяцев",
    result: "Повышение выносливости, тонус мышц",
    review:
      "Занимаюсь с Анастасией уже полгода — это лучшие инвестиции в своё здоровье. Чувствую себя на 10 лет моложе! Рекомендую всем, кто ищет профессионального и чуткого тренера.",
    imageBefore:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=400&fit=crop",
    imageAfter:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=400&fit=crop",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Результаты моих клиенток"
          subtitle="Истории трансформаций"
        />

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card hover={false} className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before/After Images */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-text mb-2 text-center">
                        До
                      </p>
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                          src={currentTestimonial.imageBefore}
                          alt="До"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-text mb-2 text-center">
                        После
                      </p>
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                        <img
                          src={currentTestimonial.imageAfter}
                          alt="После"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-light-bg rounded-2xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-text">Цель</p>
                        <p className="font-medium text-dark">
                          {currentTestimonial.goal}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-text">Срок</p>
                        <p className="font-medium text-dark">
                          {currentTestimonial.duration}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-gray-text text-sm">Результат</p>
                      <p className="font-semibold text-coral">
                        {currentTestimonial.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="flex flex-col">
                  <Quote className="w-10 h-10 text-coral/20 mb-4" />

                  <p className="text-dark text-lg leading-relaxed flex-grow">
                    "{currentTestimonial.review}"
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="font-semibold text-dark">
                      {currentTestimonial.name}, {currentTestimonial.age} лет
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-coral text-coral"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-coral" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-10"
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-12">
                Записаться на тренировку
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
