"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function WhatWeDoPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#FFB300] text-sm font-semibold tracking-widest mb-2 text-center">
            HOME / WHAT WE DO
          </p>
          <h1 className="text-6xl md:text-6xl font-serif font-bold mb-4 text-balance text-center">
            What We Do
          </h1>
          <div className="flex items-center justify-center w-full">
            <p className="text-[20px] text-white/90 max-w-3xl text-balance text-center">
              Our comprehensive approach to transforming Nigeria's legislative
              landscape through strategic action, training, and democratic
              participation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 px-6.25 md:py-24 md:px-28 bg-white">
        <div className="max-w-7xl mx-auto  space-y-20">
          {/* Mobilization */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/mob.png"
                alt="Mobilization - grassroots political movement"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFB300] text-primary flex items-center justify-center font-bold mb-6">
                <img
                  src="/mass-mobilization.svg"
                  alt="mass mobilization"
                  className="w-6 h-6"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Mobilization
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We are building the largest grassroots political movement in
                Nigeria's history. Through town halls, community organizing,
                digital campaigns, and strategic partnerships, we're awakening
                millions of Nigerians to the power of legislative participation.
                Our mobilization efforts span all 36 states and 774 local
                government areas, creating a network of engaged citizens ready
                to reclaim their democracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* space-y-20 */}
      <section className="py-16 px-6.25 md:py-24 md:px-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto ">
          {/* Training & Leadership Development */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 md:h-100 rounded-lg overflow-hidden bg-gray-200 md:order-2">
              <Image
                src="/training.png"
                alt="Training & Leadership Development - classroom session"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="w-12 h-12 rounded-full bg-[#FFB300] text-primary flex items-center justify-center font-bold mb-6">
                <img src="/training.svg" alt="trainingn" className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Training & Leadership Development
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The CLARM Leadership Academy provides comprehensive training for
                aspiring legislators. Our curriculum covers campaign strategy,
                policy development, legislative procedures, public speaking,
                media relations, and ethical governance. We equip candidates
                with the knowledge, skills, and confidence to win elections and
                serve effectively. Through mentorship programs and practical
                workshops, we're building Nigeria's next generation of
                legislative leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6.25 md:py-24 md:px-28 bg-white">
        <div>
          {/* Electoral Strategy */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src="/electoral-strategy.png"
                alt="Electoral Strategy - data-driven campaign planning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-[#FFB300] text-primary flex items-center justify-center font-bold mb-6">
                <img
                  src="/electoral-strategy.svg"
                  alt="electoral strategy"
                  className="w-5.75 h-5.5"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Electoral Strategy
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Winning elections requires more than good intentions. Our
                electoral strategy team designs data-driven campaign tactics,
                voter analytics, and ground game operations. We provide
                candidates with research, polling data, messaging frameworks,
                and field organizing support. From voter registration drives to
                election day operations, we ensure CLARM candidates have the
                resources and strategy to compete and win in every constituency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLARM Legislative Caucus */}
      <section className="px-6.25 bg-[#FAFAFA] text-white py-16 md:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-200 md:order-2">
            <Image
              src="/legislative-caucus.jpg"
              alt="CLARM Legislative Caucus - parliament chamber"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <div className="w-12 h-12 rounded-full bg-[#FFB300] text-primary flex items-center justify-center font-bold mb-6">
              <img
                src="/legislative-transformation.svg"
                alt="legislative transformation"
                className="w-6.75 h-5.5"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              CLARM Legislative Caucus
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Once elected, CLARM legislators will form a progressive caucus in
              the National and State Assemblies. This caucus will champion
              people-centered legislation, demand transparency and
              accountability, and work collaboratively to pass transformative
              bills. The caucus will maintain regular communication with
              constituents, participate in community service, and demonstrate
              what true representative democracy looks like.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
}
