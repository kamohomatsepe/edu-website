import React from "react";
import EducesolChildren from "./assets/img/educesol-children.png";

type FlipCardProps = {
  id: number;
  front: string;
  back: string;
};  
const AboutUs: React.FC = () => {
    const flipCardData:FlipCardProps[] = [
    {
      id: 1,
      front: "Mission",
      back: "To simplify school administration through innovative technology that empowers teachers, parents, and administrators to achieve excellence.",
    },
    {
      id: 2,
      front: "Vision",
      back: "To become Africa's leading provider of digital school management solutions, advancing education through efficiency, transparency, and accessibility.",
    },
    {
      id: 3,
      front: "Core Values",
      back: "Innovation - Creating technology that solves real challenges. Integrity - Building trust with transparency and accountability. Excellence - Striving for the highest standards in everything we deliver. Accessibility - Ensuring our platform is affordable, reliable, and easy to use.",
    },
  ]
  return (
    <section className=" px-4 sm:px-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-8">
        {/* Welcome Text */}
        <div className="w-full md:w-1/2 max-w-xl flex flex-col space-y-6 md:mr-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#101046] pb-4">
            Welcome To Educesol
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Educesol Basic is a groundbreaking school management solution
            developed by MetroBlue Tech System Ltd. We are committed to
            transforming the educational landscape in Nigeria and across Africa
            by making school operations simple, transparent, and affordable.
          </p>

          <ul className="flex flex-col sm:flex-row justify-between w-full gap-6">
            <div className="space-y-2">
              <li className="ml-4 list-disc">Professional Teachers</li>
              <li className="ml-4 list-disc">24/7 Online Course</li>
              <li className="ml-4 list-disc">Works with All Devices</li>
              <li className="ml-4 list-disc">Friendly User Panel</li>
              <li className="ml-4 list-disc">Support Desk for All Prices</li>
            </div>
            <div className="space-y-2">
              <li className="ml-4 list-disc">Lifetime Membership</li>
              <li className="ml-4 list-disc">Online Chat with Support</li>
              <li className="ml-4 list-disc">Second Course 50% Cheap</li>
              <li className="ml-4 list-disc">Limitless Bandwidth</li>
              <li className="ml-4 list-disc">And much more...</li>
            </div>
          </ul>
        </div>

        {/* Image */}
        <div className="mt-20 w-full md:w-1/2 max-w-md ">
          <img
            src={EducesolChildren}
            alt="Educesol-Children"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      {/* Cards Section */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 pb-20">
  {flipCardData.map((card) => (
    <div
      key={card.id}
       className="w-full max-w-xs sm:max-w-sm aspect-square perspective"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full flex items-center justify-center text-white text-2xl font-semibold rounded-lg shadow-lg bg-[#101046] backface-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {card.front}
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full flex items-center justify-center text-white text-xl  p-4 rounded-lg shadow-lg bg-[#1AA939] backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {card.back}
        </div>

        {/* Hover rotation */}
        <style>
          {`
            .perspective:hover > div {
              transform: rotateY(180deg);
            }
          `}
        </style>
      </div>
    </div>
  ))}
</div>


    </section>
  );
};

export default AboutUs;
