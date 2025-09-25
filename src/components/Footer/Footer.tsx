import type React from "react"
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
          <div className="contact-item mt-2">
            <span className="contact-icon">
              <img src="/globe.svg" alt="website" />
            </span>
            <span>www.educesol.com</span>
          </div>
          <div className="contact-item mt-2">
            <span className="contact-icon">
              <span className="contact-icon">
              <img src="mail.svg" alt="mail" />
            </span>
            </span>
            <span>contact@metrobluets.com</span>
          </div>
          <div className="contact-item mt-2">
            <span className="contact-icon">
              <span className="contact-icon">
              <img src="phone.svg" alt="phone" />
            </span>
            </span>
            <span>+234 816 252 4860 | +234 907 912 5273</span>
          </div>
          <div className="contact-item ">
            <span className="contact-icon">
              <img src="location.svg" alt="location" />
            </span>
            <span>MetroBlue Tech System Ltd (Official developer of Educesol)
                322 Road, Opposite H-Close, Festac Town, Lagos, Nigeria</span>
          </div>
        </div>,
      ],
    },
  ]

  return (
    <footer className="bg-[#101046] text-white py-10 md:py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Top content */}
    <div className="grid gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {footerSections.map((section, index) => (
        <div key={index} className="flex flex-col text-left">
        <h3 className="text-lg font-bold mb-5 relative inline-block after:content-[''] after:block after:w-12 after:h-[3px] after:bg-green-600 after:mt-2">
          {section.title}
        </h3>
        <div className="text-white/80 leading-relaxed">
          {Array.isArray(section.content) && typeof section.content[0] === "string"
            ? section.content.map((item, itemIndex) => (
                <p key={itemIndex} className="mb-3 text-sm">
                  {item}
                </p>
              ))
            : section.content}
        </div>
      </div>

      ))}
    </div>

    {/* Bottom */}
    <div className="border-t border-white/20 pt-5 text-center">
      <p className="text-white/60 text-sm">
        &copy; 2025 MetroBlue Tech System Ltd. Educesol Basic. All rights reserved.
      </p>
    </div>
  </div>
  </footer>

  )
}

export default Footer
