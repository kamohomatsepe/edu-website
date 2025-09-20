import React from "react"
import "./HomeFeatures.css"

interface Feature {
  icon: string
  title: string
  description: string
}

const HomeFeatures: React.FC = () => {
  const laptopIcon =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%230079a5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='4' width='18' height='12' rx='2'/><path d='M2 20h20'/><path d='M8 20h8'/></svg>";

  const features: Feature[] = [
    {
      icon: laptopIcon,
      title: "Full Admin Controls",
      description:
        "Manage students, staff, classes, and operations centrally.",
    },
    {
      icon: laptopIcon,
      title: "Attendance & Records",
      description:
        "Real-time tracking and automated academic reporting.",
    },
    {
      icon: laptopIcon,
      title: "Finance & Fees",
      description:
        "Secure, automated payment collection and receipts.",
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          Key Features
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures