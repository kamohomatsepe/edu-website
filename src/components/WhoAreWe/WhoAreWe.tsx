import type React from "react"
import "./WhoAreWe.css"

const WhoAreWe: React.FC = () => {
  return (
    <>
       {/* Who are we  */}
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
    </>
  )
}

export default WhoAreWe
