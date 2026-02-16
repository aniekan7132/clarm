"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import slideOne from "@/public/carousel-1.png";
import slideTwo from "@/public/carousel-2.png";
import slideThree from "@/public/carousel-3.png";

import Image, { StaticImageData } from "next/image";
type Slide = {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData; // <-- required, NOT optional
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      title: "Reclaim the Legislature,",
      subtitle: "Reclaim Our Future",
      description:
        "A youth-driven coalition transforming Nigeria's National and State Assemblies through peaceful lawful democratic participation. Join thousands of Nigerians committed to legislative reform and accountable governance.",
      image: slideOne,
    },
    {
      title: "Transform Nigeria's",
      subtitle: "Political Landscape",
      description:
        "Be part of a movement that believes in the power of grassroots organizing, data-driven strategy, and comprehensive training to build a new generation of legislative leaders.",
      image: slideTwo,
    },
    {
      title: "Join the",
      subtitle: "Revolution",
      description:
        "Whether you're a young professional, a student, a community leader, or simply a concerned citizen, there's a place for you in this revolution. Together, we will reclaim our legislative and reclaim our future.",
      image: slideThree,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const pillars = [
    {
      icon: "/mass-mobilization.svg",
      title: "Mass Mobilization",
      description:
        "Awakening millions of Nigerians to the power of collective participation and grassroots democratic action.",
    },
    {
      icon: "/candidiate-development.svg",
      title: "Candidate Development",
      description:
        "Training and equipping competent aspirants with the skills and resources to win elections.",
    },
    {
      icon: "/electoral-strategy.svg",
      title: "Electoral Strategy",
      description:
        "Deploying data-driven campaign tactics across all 36 states of Nigeria.",
    },
    {
      icon: "legislative-transformation.svg",
      title: "Legislative Transformation",
      description:
        "Committing to transparency, accountability, and people-centered legislation.",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Awakening the Movement",
      description:
        "Mass mobilization, grassroots organizing, and building awareness across all 36 Nigerian states and the FCT.",
    },
    {
      year: "2026",
      title: "Consolidation & Training",
      description:
        "Leadership development, candidate training, electoral strategy formulation, and coalition building nationwide.",
    },
    {
      year: "2027",
      title: "Revolution at the Polls",
      description:
        "Strategic deployment of candidates, voter mobilization, and securing legislative seats nationwide.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay (from Figma reference) */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/70 z-10"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-20 sm:px-6 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>

          {/* Carousel Indicators */}
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? "bg-[#FFB300] w-8"
                    : "bg-white/50 hover:bg-white/75 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white hover:text-[#FFB300] transition-colors cursor-pointer w-12 h-12 bg-[#FFFFFF1A] rounded-3xl place-items-center"
          aria-label="Previous slide"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white hover:text-[#FFB300] transition-colors cursor-pointer w-12 h-12 bg-[#FFFFFF1A] rounded-3xl place-items-center"
          aria-label="Next slide"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1B5E20] mb-4">
            Our Four Pillars
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            The strategic foundation driving Nigeria's legislative
            transformation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#FFB300] rounded-full flex items-center justify-center text-2xl mb-6">
                  <img src={pillar.icon} alt="icon" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#616161] text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1B5E20] mb-8">
            A Movement Born from Necessity
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              For too long, Nigeria's legislative arm has been disconnected from
              the people it serves. The Coalition for Legislative Arm Revolution
              Movement (CLARM) was founded on the belief that democratic
              transformation begins with reclaiming our National and State
              Assemblies.
            </p>
            <p>
              We are a non-partisan, youth-driven coalition committed to
              peaceful, lawful participation in Nigeria's democratic process.
              Through strategic mobilization, candidate development, and
              electoral engagement, we're building a new generation of
              legislative leaders who prioritize transparency, accountability,
              and people-centered governance.
            </p>
            <p>
              Our vision extends beyond 2027. We're creating a sustainable
              movement that will transform Nigeria's political landscape for
              generations to come, ensuring that every Nigerian has a voice in
              the halls of power.
            </p>
          </div>
        </div>
      </section>

      {/* Path to 2027 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#1B5E20]  mb-4">
            The Path to 2027
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Our strategic roadmap for transforming Nigeria's legislative
            landscape
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                {/* Timeline Line */}
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-[#FFB300]"></div>
                )}

                {/* Year Badge */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-[#FFB300] bg-white flex items-center justify-center font-bold text-primary text-lg">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="rounded-[12px] bg-[#FAFAFA] p-6">
                  <h3 className="text-xl font-bold text-[#1B5E20]  mb-2 text-left">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-left  text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
