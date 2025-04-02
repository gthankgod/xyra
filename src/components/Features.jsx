import { useEffect, useRef } from "react";
import { features } from "../constants";
/* eslint-disable-next-line no-unused-vars */
import { motion } from "framer-motion";


const Features = () => {
  const scrollRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainer) {
          // Scroll right until reaching the end, then reset
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1; // Adjust speed as needed
          }
        }
      }, 20);
    };



    startAutoScroll();

    return () => clearInterval(scrollIntervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-[#F9F6FF] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
        INCOMING FEATURES
      </h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`min-w-[300px] md:min-w-[350px] lg:min-w-[400px] p-6 rounded-2xl ${feature.bgColor} snap-start cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => clearInterval(scrollIntervalRef.current)}
            onMouseLeave={() => {
              scrollIntervalRef.current = setInterval(() => {
                if (scrollRef.current) {
                  if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
                    scrollRef.current.scrollLeft = 0;
                  } else {
                    scrollRef.current.scrollLeft += 1;
                  }
                }
              }, 20);
            }}
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-[#B388EB] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#A074D8] transition">
          TAKE THE QUIZ
        </button>
      </div>
    </section>
  );
};

export default Features;
