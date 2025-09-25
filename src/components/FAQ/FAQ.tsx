"use client"

import type React from "react"
import { useState } from "react"
import "./FAQ.css"

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "WHAT IS EDUCESOL BASIC?",
      answer:
        "Educesol Basic is a mobile-first school management solution that helps schools digitise administration, automate payments, and improve communication among teachers, parents, and administrators.",
    },
    {
      question: "WHO CAN USE EDUCESOL?",
      answer:
        "The platform is designed for schools of all sizes—primary, secondary, and tertiary institutions—whether private or public.",
    },
    {
      question: "DOES EDUCESOL WORK WITHOUT STRONG INTERNET?",
      answer:
        "Yes. Educesol Basic is optimised to work in areas with limited connectivity, making it ideal for schools in developing regions.",
    },
    {
      question: "HOW SECURE IS MY SCHOOL'S DATA?",
      answer: "All records are stored on secure cloud servers with encryption and role-based access controls to ensure confidentiality."
    },
    {
      question: "HOW CAN I GET STARTED?",
      answer: "Simply click Get Started and fill out our contact form. A member of our team will guide you through onboarding."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-12">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold  text-[#1AA939] text-center mb-8">FAQ's</h2>

    <div className="space-y-5">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="rounded-lg shadow-md overflow-hidden"
        >
          <button
            className={`w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-base md:text-lg transition-colors ${
              openIndex === index ? "bg-[#101046] text-[#fff]" : "bg-[#101046] text-[#fff]"
            }`}
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span
              className={`flex items-center justify-center rounded-full font-bold transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              } ${
                openIndex === index
                  ? "bg-green-600 text-white"
                  : "bg-green-600 text-white"
              } w-7 h-7 md:w-8 md:h-8`}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden bg-white ${
              openIndex === index
                ? "max-h-52 px-6 py-5"
                : "max-h-0 px-6 py-0"
            }`}
          >
            <p className="text-gray-600 leading-relaxed m-0">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </section>

  )
}

export default FAQ
