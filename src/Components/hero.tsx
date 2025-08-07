'use client';

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

function AnimatedTextCycle({
  words,
  interval = 5000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState("auto");
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      if (elements.length > currentIndex) {
        const newWidth = elements[currentIndex].getBoundingClientRect().width;
        setWidth(`${newWidth}px`);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants: Variants = {
    hidden: { 
      y: -20,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: "easeIn"
      }
    },
  };

  return (
    <>
      <div 
        ref={measureRef} 
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      <motion.span 
        className="relative inline-block"
        animate={{ 
          width,
          transition: { 
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          }
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`inline-block font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ whiteSpace: "nowrap" }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
}

function HeroComponent() {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-[80vh] py-12 bg-background text-foreground flex items-center justify-center px-4">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >

<motion.h1 
  variants={contentVariants}
  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center"
>
  Build amazing{" "}
<span className="inline-block align-middle whitespace-nowrap">
  <AnimatedTextCycle
    words={[
      "experiences",
      "products", 
      "solutions",
      "applications",
      "platforms"
    ]}
    interval={3000}
    className="text-primary"
  />
</span>{" "}
that users love
</motion.h1>
        <motion.p 
          variants={contentVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Know about AirSafa From the Beginning!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HeroComponent;