"use client";
import { motion, Variants } from "framer-motion";
import HeroComponent from "../Components/hero";
import Header from "../Components/Header";
import TextwithImage from "../Components/TextWithHover";
import Facecard from "../Components/Facecard";
import MileStone from "../Components/MileStone";
import { FooterDemo } from "@/Components/Foot";

// SIMPLIFIED ANIMATION CONFIG (GUARANTEED TO WORK)
const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const titleAnimation = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15 + 0.1,
      duration: 0.4
    }
  })
};

export default function Home() {
  return (
    <div>
      {/* Static Header (better for navigation) */}
      <Header />
      
      {/* Animated Content */}
      <div>
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemAnimation}
          custom={0}
        >
          <HeroComponent />
        </motion.div>

        {/* Founder Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          custom={1}
        >
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              FOUNDER
            </h1>
          </div>
        </motion.div>

        {/* Founder Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={1}
        >
          <TextwithImage />
        </motion.div>

        {/* Vision & Mission Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          custom={2}
        >
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              VISION & MISSION
            </h1>
          </div>
        </motion.div>

        {/* Vision & Mission Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={2}
        >
          <TextwithImage />
        </motion.div>

        {/* Our Values Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          custom={3}
        >
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              OUR VALUES
            </h1>
          </div>
        </motion.div>

        {/* Facecard */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={3}
        >
          <Facecard />
        </motion.div>

        {/* Our Journey Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          custom={4}
        >
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              OUR JOURNEY
            </h1>
          </div>
        </motion.div>

        {/* MileStone */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={4}
        >
          <MileStone />
        </motion.div>

        {/* Commitment Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          custom={5}
        >
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              COMMITMENT TO EXCELLENCE
            </h1>
          </div>
        </motion.div>

        {/* Final TextWithImage */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={5}
        >
          <TextwithImage />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemAnimation}
          custom={6}
        >
          <FooterDemo />
        </motion.div>
      </div>
    </div>
  );
}