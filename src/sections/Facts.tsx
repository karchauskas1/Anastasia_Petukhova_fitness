import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Dumbbell } from "lucide-react";
import Card from "../components/Card";

const facts = [
  {
    icon: Calendar,
    number: 7,
    suffix: " лет",
    label: "в фитнес-индустрии",
  },
  {
    icon: Users,
    number: 300,
    suffix: "+",
    label: "довольных клиенток",
  },
  {
    icon: Dumbbell,
    number: 2500,
    suffix: "+",
    label: "проведённых тренировок",
  },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

export default function Facts() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Card className="text-center p-8">
                <fact.icon className="w-10 h-10 text-coral mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2">
                  <AnimatedNumber value={fact.number} suffix={fact.suffix} />
                </div>
                <p className="text-gray-text text-sm md:text-base">
                  {fact.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
