import { useEffect, useRef, useState } from "react";
import { features } from "../constants";
/* eslint-disable-next-line no-unused-vars */
import { motion, useAnimation } from "framer-motion";

const Features = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    const startScrolling = () => {
      controls.start({
        x: [-scrollRef.current.scrollWidth / 2, 0], // Moves from left to right
        transition: {
          ease: "linear",
          duration: 15, // Adjust speed
          repeat: Infinity,
        },
      });
    };

    if (!isPaused) {
      startScrolling();
    }
  }, [isPaused, controls]);

  // Pause without stopping animation completely
  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop(); // Just pauses without resetting position
  };

  // Resume smoothly
  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.resume(); // Continues smoothly from where it stopped
  };

  return (
    <section className="bg-[#F9F6FF] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
        INCOMING FEATURES
      </h2>

      <div
        className="overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div ref={scrollRef} className="flex space-x-4" animate={controls}>
          {features.concat(features).map((feature, index) => (
            <motion.div
              key={index}
              className={`min-w-[300px] md:min-w-[350px] lg:min-w-[400px] p-6 rounded-2xl ${feature.bgColor} snap-start cursor-pointer`}
              whileHover={{ scale: 1.0 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
