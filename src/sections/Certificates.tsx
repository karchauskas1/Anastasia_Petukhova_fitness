import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award, X } from "lucide-react";

// Import certificate images
import cert01 from "../assets/certificates/cert-01.jpg";
import cert02 from "../assets/certificates/cert-02.jpg";
import cert03 from "../assets/certificates/cert-03.jpg";
import cert04 from "../assets/certificates/cert-04.jpg";
import cert05 from "../assets/certificates/cert-05.jpg";
import cert06 from "../assets/certificates/cert-06.jpg";
import cert07 from "../assets/certificates/cert-07.jpg";
import cert08 from "../assets/certificates/cert-08.jpg";
import cert09 from "../assets/certificates/cert-09.jpg";
import cert10 from "../assets/certificates/cert-10.jpg";

const certificates = [
  cert01,
  cert02,
  cert03,
  cert04,
  cert05,
  cert06,
  cert07,
  cert08,
  cert09,
  cert10,
];

export default function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-8 h-8 text-coral" />
            <h3 className="text-2xl md:text-3xl font-bold text-dark">
              Мои сертификаты
            </h3>
          </div>

          <p className="text-center text-gray-text mb-8 max-w-2xl mx-auto">
            Постоянно повышаю квалификацию и слежу за новейшими методиками тренировок
          </p>

          {/* Horizontal scroll container */}
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable area */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-4 snap-x"
            >
              {/* Left spacer */}
              <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />

              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex-shrink-0 snap-start cursor-pointer group"
                  onClick={() => setSelectedImage(cert)}
                >
                  <div className="h-56 md:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gray-100">
                    <img
                      src={cert}
                      alt={`Сертификат ${index + 1}`}
                      className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Right spacer */}
              <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8" />
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll hint */}
          <p className="text-center text-gray-text/60 text-sm mt-4">
            ← Листайте для просмотра всех сертификатов →
          </p>
        </motion.div>
      </div>

      {/* Lightbox modal */}
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
            alt="Сертификат"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
