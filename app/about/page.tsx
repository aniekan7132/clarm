"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  const values = [
    {
      icon: "/intergrity.svg",
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our operations. Transparency, honesty, and accountability guide every decision we make and every action we take.",
    },
    {
      icon: "/inclusivity.svg",
      title: "Inclusivity",
      description:
        "CLARM is a movement for all Nigerians, regardless of ethnicity, religion, gender, or socioeconomic status. We celebrate diversity and ensure every voice is heard.",
    },
    {
      icon: "/accountability.svg",
      title: "Accountability",
      description:
        "We hold ourselves and our candidates to the highest standards of accountability. Every action, every decision is documented and transparent to our members.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#FFB300] text-sm font-semibold tracking-widest mb-4 text-center">
            HOME / ABOUT
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-balance text-center">
            About CLARM Initiative
          </h1>
          <div className="flex items-center justify-center w-full">
            <p className="text-lg text-white/90 max-w-3xl text-balance text-center">
              The Coalition for Legislative Arm Revolution Movement is Nigeria's
              premier youth-driven platform for legislative transformation and
              democratic renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="border-l-4 border-[#FFB300] pl-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-[#FFB300] text-primary flex items-center justify-center font-bold mb-4">
                  <img
                    src="/vision.svg"
                    alt="vision icon"
                    className="w-[21.64px] h-4.5"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A Nigeria where the legislative arm truly represents the will of
                the people, where transparency and accountability are the norm,
                and where every citizen has confidence that their elected
                representatives are working tirelessly for the common good. We
                envision a transformed National and State Assemblies populated
                by competent, ethical, and people-centered legislators who
                prioritize national development over personal gain.
              </p>
            </div>

            {/* Mission Card */}
            <div className="border-l-4 border-[#1B5E20] pl-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                  <img
                    src="/mission.svg"
                    alt="mission icon"
                    className="w-5 h-5"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#1B5E20] mb-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To mobilize, train, and deploy credible candidates across
                Nigeria's 469 legislative constituencies, building a progressive
                caucus committed to transformative legislation, transparent
                governance, and accountable representation. Through strategic
                organizing, comprehensive training, and data-driven electoral
                campaigns, we will reclaim the legislative for the Nigerian
                people by 2027 and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-4">
            Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            The principles that guide our movement and define our commitment to
            Nigeria
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-[#FFB300] text-primary flex items-center justify-center text-4xl mx-auto mb-4">
                  <img src={value.icon} alt="icon" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 mb-11.75">
          <h2 className="text-4xl md:text-[30px] font-serif font-bold text-[#1B5E20] mb-8">
            The Story Behind CLARM
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The Coalition for Legislative Arm Revolution Movement was born
              from a simple but powerful realization: Nigeria's challenges are
              not inevitable. They are the result of decades of poor governance,
              legislative inaction, and a disconnect between elected
              representatives and the people they serve.
            </p>
            <p>
              In 2024, a group of concerned Nigerian youth, professionals, and
              civil society leaders came together with a shared vision to
              transform the National and State Assemblies through peaceful,
              democratic participation. Recognizing that while the executive
              branch often dominates headlines, it is the legislature that holds
              the power to create lasting change through lawmaking, oversight,
              and representation.
            </p>
            {/* <p>
              CLARM exists to change that narrative. By ensuring that competent,
              ethical, and people-centered individuals occupy legislative seats
              at both the national and state levels, we believe we can unlock
              the legislature's potential for transforming Nigeria.
            </p> */}
          </div>
        </div>

        {/* Why Legislature Matters */}
        <div className="max-w-4xl mx-auto px-6 mb-11.75">
          <h2 className="text-4xl md:text-[24px] font-serif font-bold text-[#1B5E20] mb-4">
            Why the Legislature Matters
          </h2>

          <p className="text-gray-700 leading-relaxed mb-11.75">
            The legislative arm is the heartbeat of any democracy. It is where
            laws are made, budgets are approved, and the executive is held
            accountable. Yet for too long, Nigeria's legislature has been
            ineffective, disconnected, and self-serving. CLARM exists to change
            that narrative by ensuring that competent, ethical, and
            people-centered individuals occupy legislative seats at both the
            national and state levels.
          </p>
        </div>

        {/* Our Approach */}
        <div className="max-w-4xl mx-auto px-6 mb-11.75">
          <h2 className="text-4xl md:text-[24px] font-serif font-bold text-[#1B5E20] mb-4">
            Our Approach
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              CLARM is not a political party. We are a non-partisan coalition
              that works within Nigeria's democratic framework to identify,
              train, and support credible candidates who share our values. We
              believe in the power of grassroots organizing, data-driven
              strategy, and comprehensive training to build a new generation of
              legislative leaders.
            </p>
            <p>
              Our work spans all 36 states and the Federal Capital Territory. We
              organize at the ward, local government, state, and national
              levels, creating a network of engaged citizens ready to
              participate in the democratic process. Through our Leadership
              Academy, we provide aspiring legislators with the skills,
              knowledge, and resources they need to win elections and serve
              effectively.
            </p>
          </div>
        </div>

        {/* Join the Revolution */}
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-[24px] font-serif font-bold text-[#1B5E20] mb-4">
            Join the Revolution
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            CLARM is more than a movement—it's a commitment to Nigeria's future.
            Whether you're a young professional, a student, a community leader,
            or simply a concerned citizen, there's a place for you in this
            revolution. Together, we will reclaim the legislature and reclaim
            our future.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The journey to 2027 has begun. Will you join us?
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
