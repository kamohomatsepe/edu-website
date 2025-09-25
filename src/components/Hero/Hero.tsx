import type React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {


  return (
    <>
    {/* Hero */}
     <section className="w-full min-h-screen   px-4 sm:px-6 lg:px-8 mb-4 ">
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
          <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <button className="w-auto px-6 py-3 sm:px-8 sm:py-4 bg-[#101046] text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-[#191969] transition-colors duration-200">
              <Link to="/contact">
                Register Now
              </Link>
            </button>
            <button className="w-auto px-6 py-3 sm:px-8 sm:py-4 border bg-[#1AA939] text-[#fff] rounded-lg font-semibold text-sm sm:text-base hover:bg-[#147529] transition-colors duration-200">
              <Link to="/features">
                Learn More
              </Link>
            </button>
          </div>

            
          </div>
          
          {/* Right Column - Image */}
         <div className="order-1 lg:order-2 mt-20 lg:mt-0">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[650px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/hero-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
  {/* Left Icon */}
  <div className="absolute top-12 left-3 sm:left-6 z-20">
    <div className="w-16 h-16 p-4 sm:w-12 md:w-16 rounded-full bg-[#1AA939] flex items-center justify-center overflow-hidden">
      <img
        src="/hero-icon.svg"
        alt="Left Icon"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/* Main Image Container */}
  <div className="flex justify-center items-center h-full px-20 sm:px-24 md:px-20 lg:px-16">
    <img 
      src="/hero-main.png" 
      alt="Hero Image Placeholder"
      className="max-w-full max-h-full object-contain rounded-lg"
    />
  </div>

  {/* Right Icon */}
    <div className="absolute top-12 right-3 sm:right-6 z-20">
    <div className="w-16 h-16 p-4 sm:w-12 md:w-16 rounded-full bg-[#1AA939] flex items-center justify-center overflow-hidden">
      <img
        src="/hero-icon2.png"
        alt="Right Icon"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>


          </div>
          
        </div>
      </div>
      </section>

      {/* How to use the app */}

    </>

  )
}

export default Hero
