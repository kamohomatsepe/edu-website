import type React from "react"
import "./Footer.css"
import type { JSX } from "react"

interface FooterSection {
  title: string
  content: string[] | JSX.Element[]
}

const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: "ABOUT EDUCESOL",
      content: [
        "At the heart of Educesol's mission is a deep-rooted belief that education should be accessible, engaging, and tailored to the unique needs of each learner.",
      ],
    },
    {
      title: "QUICK LINKS",
      content: [
        <div key="quick-links-1" className="quick-links">
          <p><a href="/">Home</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/features">Features</a></p>
          <p><a href="/contact">Contact</a></p>
          <p><a href="/faq">FAQ</a></p>
        </div>,
      ],
    },
    {
      title: "QUICK LINKS",
      content: [
        <div key="quick-links-2" className="quick-links">
          <p><a href="/features#admin-controls">Admin Controls</a></p>
          <p><a href="/features#fees-payment">Fees Payment</a></p>
          <p><a href="/features#schedules-access">Schedules & Notes</a></p>
          <p><a href="/features#multi-platform">Multi-platform</a></p>
        </div>,
      ],
    },
    {
      title: "CONTACT DETAILS",
      content: [
        <div key="contact" className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <span>www.yoursite.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>contact@metrobluets.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+234 816 252 4860 | +234 907 912 5273</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>MetroBlue Tech System Ltd (Official developer of Educesol)
322 Road, Opposite H-Close, Festac Town, Lagos, Nigeria</span>
          </div>
        </div>,
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <div className="footer-text">
                {Array.isArray(section.content) && typeof section.content[0] === "string"
                  ? section.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="footer-paragraph">
                        {item}
                      </p>
                    ))
                  : section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 MetroBlue Tech System Ltd. Educesol Basic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
