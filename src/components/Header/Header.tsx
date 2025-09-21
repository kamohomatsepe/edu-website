"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

interface NavigationItem {
  label: string
  href: string
  hasDropdown?: boolean
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src="/Logo.png" alt="Educesol Logo" className="logo-icon" />
            </Link>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-list">
              {navigationItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link to={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary sign-up-btn">
              Get started
            </button>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
