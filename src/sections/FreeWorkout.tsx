import { motion } from "framer-motion";
import { Play, Gift } from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";

const YOUTUBE_LINK = "https://youtu.be/hY7ZTi_oWsE?si=2gCe9o6SlUZeHakA";
const YOUTUBE_THUMBNAIL = "https://img.youtube.com/vi/hY7ZTi_oWsE/maxresdefault.jpg";

export default function FreeWorkout() {
  return (
    <section id="free-workout" className="py-16 bg-gradient-to-br from-mint/5 via-white to-coral/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card hover={false} className="overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-coral to-peach p-6 text-center">
              <div className="flex items-center justify-center gap-2 text-white mb-2">
                <Gift className="w-6 h-6" />
                <span className="font-bold text-lg">БЕСПЛАТНАЯ ТРЕНИРОВКА</span>
              </div>
              <p className="text-white/90 text-sm">
                Попробуй прямо сейчас!
              </p>
            </div>

            {/* Video Thumbnail */}
            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={YOUTUBE_THUMBNAIL}
                  alt="Бесплатная тренировка"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-coral ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </a>

            {/* Content */}
            <div className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                Ягодицы в плоскостях + Плоский живот
              </h3>
              <p className="text-gray-text mb-6">
                С использованием спортивной резинки (можно выполнять и без неё)
              </p>

              <a href={YOUTUBE_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Смотреть на YouTube
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
