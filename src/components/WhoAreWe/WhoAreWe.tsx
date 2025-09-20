import type React from "react"
import "./WhoAreWe.css"

const WhoAreWe: React.FC = () => {
  return (
    <section className="who-are-we">
      <div className="container">
        <div className="who-are-we-content">
          <div className="team-image">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=60" alt="Students collaborating with a laptop" className="team-photo" />
          </div>

          <div className="who-are-we-text">
            <h2 className="who-are-we-title">WHO WE ARE</h2>
            <p className="who-are-we-description">
              Educesol Basic is a groundbreaking school management solution developed by MetroBlue Tech System Ltd. We are committed to transforming the educational landscape in Nigeria and across Africa by making school operations simple, transparent, and affordable.

            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe
