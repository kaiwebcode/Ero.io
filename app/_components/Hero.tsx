"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import HomePage from "@/public/homePage.png";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isHovering, setIsHovering] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in?redirect_url=/dashboard");
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex items-center mx-auto px-4 sm:px-8 md:px-12 lg:px-24 justify-center min-h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background-image-png-4.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        onMouseEnter={() => {
          setIsHovering(true);
          setShowStars(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setTimeout(() => setShowStars(false), 500);
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="relative">Ignite Your Test</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              <span className="font-semibold text-white">Dive into</span> a
              universe where your ideas{" "}
              <span className="text-transparent text-white">transcend</span>{" "}
              reality.
            </p>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Revolutionary tools for the modern artist</li>
              <li>Collaborate in real-time, across the globe</li>
              <li>Your canvas, your rules, anytime, anywhere</li>
            </ul>

            {/* ✅ Get Started Button with Auth Check */}
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <button
                onClick={handleGetStarted}
                className="px-6 py-3 bg-transparent border-2 border-black text-black font-semibold rounded-full hover:bg-white transition-colors duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isHovering ? "100%" : 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white opacity-10"
                />
              </button>
            </div>
          </div>

          {/* Right Image with Stars */}
          <div className="relative">
            <Image
              src={HomePage}
              alt="Creative drawing showcase"
              className="rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              layout="responsive"
              width={1920}
              height={1080}
            />
            {showStars && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="absolute"
                    style={{
                      transform: `translate(${Math.random() * 100 - 50}%, ${
                        Math.random() * 100 - 50
                      }%)`,
                    }}
                  >
                    <Star className="h-10 w-10 text-yellow-400 animate-pulse" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Background effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          visible: { scale: 1.05 },
          hover: { scale: 1.1 },
        }}
        animate={isHovering ? "hover" : "visible"}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </section>
  );
}

export default Hero;
