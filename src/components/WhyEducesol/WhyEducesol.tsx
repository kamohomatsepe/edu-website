import type React from "react"
import "./WhyEducesol.css"

interface Feature {
  icon: string
  title: string
  description: string
}

const WhyEducesol: React.FC = () => {
  const laptopIcon =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24' fill='none' stroke='%230079a5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='4' width='18' height='12' rx='2'/><path d='M2 20h20'/><path d='M8 20h8'/></svg>";

  const features: Feature[] = [
    {
      icon: laptopIcon,
      title: "Educesol",
      description: "Educesol is an exceptional educational institution fostering growth and innovation.",
    },
    {
      icon: laptopIcon,
      title: "Works Any Device",
      description: "Seamless Access Across All Your Devices with Our Versatile Platform",
    },
    {
      icon: laptopIcon,
      title: "Mobile-First Advantage",
      description: " Works seamlessly even in areas with limited connectivity.",
    },
    {
      icon: laptopIcon,
      title: "All-in-One Platform",
      description: "Payments, academics, and communication in one place.",
    },
    {
      icon: laptopIcon,
      title: "Affordable & Scalable",
      description: "Designed for schools of all sizes at a cost-effective price.",
    },
    {
      icon: laptopIcon,
      title: "Built for Africa",
      description: "Tailored to the real challenges of Nigerian and African schools.",
    },
  ]

  return (
    <section className="why-educesol section">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          WHY EDUCESOL?
        </h2>

        <div className="why-educesol-content">
          <div className="features-left">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-container">
                  <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="center-phone">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60"
              alt="Laptop and phone showcasing education technology"
              className="center-phone-image"
            />
          </div>

          <div className="features-right">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-container">
                  <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyEducesol
