import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import HomePage from "@/public/homePage.png";

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // console.log(isInView);
  }, [isInView]);

  return (
    <section ref={ref} className="flex justify-center md:h-screen lg:h-screen items-center mx-auto px-4 sm:px-8 md:px-12 lg:px-24 h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background-image-png-4.png')" }}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "circInOut" }}
      >
        <div className=" lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pb-30 ">
          <div className="col-span-2 px-6 lg:px-10 ">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Discover the Latest in{" "}
                <span className="bg-slate-900 px-2 text-white rounded-sm">Stylish</span>{" "}
                Shoes
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Step into a world of comfort and fashion with our{" "}
                <span className="font-semibold">premium collection</span> of shoes. Whether you're heading to the gym or a night out, we have the perfect pair for you.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start ">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable materials
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Designed for comfort and style
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Available in a variety of sizes and colors
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  {/* Replace the user images with your own optimized URLs */}
                  {[
                    "https://github.com/joschan21/casecobra/raw/master/public/users/user-1.png",
                    "https://github.com/joschan21/casecobra/raw/master/public/users/user-2.png",
                    "https://github.com/joschan21/casecobra/raw/master/public/users/user-3.png",
                    "https://github.com/joschan21/casecobra/raw/master/public/users/user-4.jpg",
                    "https://github.com/joschan21/casecobra/raw/master/public/users/user-5.jpg",
                  ].map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`user image-${index + 1}`}
                      width={40}
                      height={40}
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    />
                  ))}
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 text-green-600 fill-green-600" />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">
                      <CountUp end={1250} duration={5} />{" "}
                      {/* Added CountUp here */}
                    </span>{" "}
                    happy customers walking in style
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-20 lg:mt-28 grid gap-y-6 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
            <div className="group rounded-xl overflow-hidden sm:aspect-w-1 sm:aspect-h-1 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
              <Image
                src={HomePage}
                alt="Shoes collection showcase"
                className="object-cover object-center"
                layout="responsive"
                width={1920}
                height={1080}
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 90vw,
                      (max-width: 1024px) 80vw,
                      (max-width: 1280px) 60vw,
                      50vw"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--brand)",
          zIndex: 20,
        }}
      />
    </section>
  );
}

export default Hero;
