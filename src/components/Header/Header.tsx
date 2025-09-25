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
    <header className="bg-[#1AA939] py-4 fixed top-0 left-0 right-0 z-[1000] shadow-md">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="block">
          <img
            src="/Logo.png"
            alt="Educesol Logo"
            className="h-10 w-auto block"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-full left-0 right-0 bg-[#1AA939] 
          md:bg-transparent transform transition-all duration-300 ease-in-out 
          ${isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"} 
          md:translate-y-0 md:opacity-100 md:visible`}
      >
        <ul className="flex flex-col md:flex-row list-none gap-4 md:gap-8 items-center p-5 md:p-0">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                className="text-white font-medium flex items-center gap-1 transition-opacity duration-300 hover:opacity-80"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Header Actions (hidden on mobile) */}
      <div className="hidden md:flex items-center">
          <Link to="/contact">
        <button className="flex items-center gap-2 bg-white text-[#1AA939] border-2 border-white px-4 py-2 rounded transition-colors duration-300 hover:bg-transparent hover:text-white">
          <span className="p-2 w-8">
            <img src="/nav-arrow.png" alt="" />
          </span>
          Get started
        </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle (only visible on mobile) */}
      <button
        className="flex flex-col md:hidden bg-transparent border-none cursor-pointer p-1.5"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="w-6 h-[3px] bg-white my-[3px] transition-all"></span>
        <span className="w-6 h-[3px] bg-white my-[3px] transition-all"></span>
        <span className="w-6 h-[3px] bg-white my-[3px] transition-all"></span>
      </button>
    </div>
  </div>
</header>

  )
}

export default Header
