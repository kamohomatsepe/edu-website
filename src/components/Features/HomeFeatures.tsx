import React from "react"
import "./HomeFeatures.css"

interface Feature {
  icon: string
  title: string
  description: string
}

const HomeFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '/feature1.png',
      title: "Full Admin Controls",
      description:
        "Manage students, staff, classes, and operations centrally.",
    },
    {
      icon: '/feature2.png',
      title: "Attendance & Records",
      description:
        "Real-time tracking and automated academic reporting.",
    },
    {
      icon: '/feature3.png',
      title: "Finance & Fees",
      description:
        "Secure, automated payment collection and receipts.",
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title text-[#1AA939]" t>
          Key Features
        </h2>

        <div className="features-grid">
  {features.map((feature, index) => (
    <div key={index} className="feature-card text-center">
      <div className="feature-icon w-16 h-16 flex items-center justify-center rounded-full bg-[#ADF9A6]">
        <img 
          src={feature.icon} 
          alt={`${feature.title} icon`} 
          className="w-8 h-8 object-contain" 
        />
      </div>
      <h3 className="feature-title mt-3 font-semibold text-lg">{feature.title}</h3>
      <p className="feature-description text-gray-600">{feature.description}</p>
    </div>
  ))}
        </div>

      </div>
    </section>
  )
}

export default HomeFeatures