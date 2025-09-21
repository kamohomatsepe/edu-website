import type React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
             Shaping the Future of
              <br />
             Learning with Smart School Management
            </h1>
            <p className="hero-subtitle">
              Educesol Basic is Nigeria's first mobile-first school management solution — designed to reduce costs,
              <br />
             eliminate manual errors, and connect parents, teachers, and administrators in real time.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-secondary">Get started</Link>
              <Link to="/features" className="btn btn-primary">Learn More</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphics">
              <div className="network-node node-1" aria-hidden="true" />
              <div className="network-node node-2" aria-hidden="true" />
              <div className="network-lines"></div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60"
              alt="Students studying with laptops in a modern learning environment"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
