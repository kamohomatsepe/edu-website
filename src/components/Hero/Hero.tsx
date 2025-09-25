import type React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero: React.FC = () => {
  return (
    <>
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
    {/* Hero */}
     <section className="w-full min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            
            {/* Header */}
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#101046] leading-tight">
              Shaping the Future of Learning with Smart School Management
            </p>
            
            {/* Sub text */}
            <p className="text-base sm:text-lg md:text-xl  leading-relaxed max-w-2xl">
              Educesol Basic is Nigeria's first mobile-first school management solution — designed to reduce costs, eliminate manual errors, and connect parents, teachers, and administrators in real time.
            </p>
            
            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#101046] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-colors duration-200">
                Register Now
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 border bg-[#1AA939] text-[#fff] rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
            
          </div>
          
          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div 
                className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[650px]  rounded-lg flex items-center justify-center"
                  style={{
                  backgroundImage: "url('/hero-bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                >
                     {/* Left Icon */}
              <div className="absolute top-2 left-9 bg-[#1AA939] rounded">
                <img src="/hero-icon.png" alt="Left Icon" className="w-16 h-16 p-1" />
              </div>
              <img 
                src="/hero-main.png" 
                alt="Hero Image Placeholder"
                className="w-full h-full object-cover rounded-lg"
              />
               {/* Right Icon */}
              <div className="absolute top-2 right-9 bg-[#1AA939] rounded">
                <img src="/hero-icon2.png" alt="Right Icon" className="w-16 h-16 p-1  " />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </section>
      {/* Who we are  */}
      <section className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#101046]">
      <div className="max-w-7xl mx-auto p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Image (comes first now) */}
          <div className="order-1 lg:order-1  ">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]  overflow-hidden">
              <img 
                src="/who-we-are.png" 
                alt="who we are Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-2 lg:order-2 space-y-6 lg:space-y-8">
            
            {/* Header */}
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff] leading-tight">
              Who we are 
            </p>
            
            {/* Sub text */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl text-[#fff]">
              Educesol Basic is a groundbreaking school management solution developed by MetroBlue Tech System Ltd. We are committed to transforming the educational landscape in Nigeria and across Africa by making school operations simple, transparent, and affordable.
            </p>
            
            {/* Button (only Learn More now) */}
            <div className="pt-4">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#1AA939] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 hover:text-[#1AA939] transition-colors duration-200">
                Learn More
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    {/* The working process */}
          <section 
            className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-cover  bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/working-process.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 backdrop-brightness-70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Working Process
          </h2>
        </div>
        
        {/* Three Columns Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-full max-w-xs h-48 sm:h-56 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200/e5e7eb/6b7280?text=Feature+1" 
                alt="Feature 1"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Smart Analytics
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-sm">
              Get comprehensive insights into student performance, attendance patterns, and 
              institutional metrics with our advanced analytics dashboard.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-full max-w-xs h-48 sm:h-56 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200/e5e7eb/6b7280?text=Feature+2" 
                alt="Feature 2"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Easy Management
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-sm">
              Streamline administrative tasks with intuitive tools for student enrollment, 
              scheduling, grading, and communication all in one centralized platform.
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-full max-w-xs h-48 sm:h-56 bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/300x200/e5e7eb/6b7280?text=Feature+3" 
                alt="Feature 3"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              24/7 Support
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-sm">
              Access round-the-clock technical support and dedicated account management 
              to ensure your institution runs smoothly without interruption.
            </p>
          </div>
          
        </div>
        
        {/* Centrally Aligned Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 sm:px-10 sm:py-5 bg-white text-gray-900 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Learn More About Features
          </button>
        </div>
        
      </div>
    </section>

    </>

  )
}

export default Hero
