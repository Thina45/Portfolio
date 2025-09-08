import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive"; // ✅ import this
import { words } from "../constants";
import Button from "../components/Button";
const HeroEXp = React.lazy(() => import("../components/HeroModels/HeroEXp"));
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  // detect mobile
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT : HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-5 px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-2 rounded-full bg-white-50"
                        />
                        <span className="text">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into clean</h1>
              <h1>working products</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I'm Thinakaran, turning ideas into impact.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work"
            />
          </div>
        </header>

        {/* RIGHT : 3D Model */}
        <figure>
          {!isMobile && (
            <div className="hero-3d-layout">
              <HeroEXp />
            </div>
          )}
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
