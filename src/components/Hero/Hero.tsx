import type React from "react"
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero: React.FC = () => {
  const processData = [
  {
    id: 1,
    imgSrc: "/wp-1.png",
    imgAlt: "Feature 1",
    title: "Result and Report",
    description:
      "Existing informed decision-making and fostering continued improvement across various fields",
  },
  {
    id: 2,
    imgSrc: "/wp-2.png",
    imgAlt: "Feature 2",
    title: "Activity Management",
    description:
      "Focuses on optimising context workflow, ensuring collaborative, and ensuring efficient resource allocation.",
  },
  {
    id: 3,
    imgSrc: "/wp-3.png",
    imgAlt: "Feature 3",
    title: "Keyword Process",
    description:
      "Authorised the transaction, and confirming the payment to complete a particular security and efficiently.",
  },
];
const whyDataLeft = [
  {
    id: 1,
    title: "Educesol",
    description:
      "Educesol is an exceptional educational institution fostering growth and innovation.",
    image: "/why1.png",
    alt: "Student Management",
  },
  {
    id: 2,
    title: "Works Any Device",
    description:
      "Seamless Access Across All Your Devices with Our Versatile Platform",
    image: "/why2.png",
    alt: "Grade Tracking",
  },
  {
    id: 3,
    title: "Mobile-First Advantage",
    description:
      "Works seamlessly even in areas with limited connectivity.",
    image: "/why3.png",
    alt: "Attendance System",
  },
];
const whyDataRight = [
  {
    id: 1,
    title: "All-in-One Platform",
    description: "Payments, academics, and communication in one place.",
    image: "/why4.png",
    alt: "Student Management",
  },
  {
    id: 2,
    title: "Affordable & Scalable",
    description: "Designed for schools of all sizes at a cost-effective price.",
    image: "/why5.png",
    alt: "Grade Tracking",
  },
  {
    id: 3,
    title: "Built for Africa",
    description: "Tailored to the real challenges of Nigerian and African schools.",
    image: "/why6.png",
    alt: "Attendance System",
  },
];



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
          {processData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-[#1AA939] rounded-lg  overflow-hidden">
                <img src={feature.imgSrc} alt={feature.imgAlt} className="w-20 h-20 p-2" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
      </div>

        
        {/* Centrally Aligned Button */}
        <div className="flex justify-center">
          <button className="px-8 py-4 sm:px-10 sm:py-5 bg-[#1AA939] text-[#fff] rounded-lg font-semibold text-base sm:text-lg hover:text-[#1AA939] hover:bg-[#fff] transition-colors duration-200 shadow-lg">
            Start New Project
          </button>
        </div>
        
      </div>
        </section>

      {/* Why Eduscesol */}

        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1AA939] leading-tight">
            WHY EDUCESOL?
          </h2>
        </div>
        
    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* First Column - Image on Right */}
          
           <div className="space-y-8">
      {whyDataLeft.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center lg:items-start text-center lg:text-left"
          >
          
            <div className="w-24 h-24 bg-[#101046] rounded-lg overflow-hidden mb-4 lg:mb-0 lg:order-2">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full p-2 object-cover"
              />
            </div>

            <div className="space-y-3 lg:order-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        </div>
          
          {/* Second/Middle Column - Single Large Image */}
          <div className="flex justify-center items-center">
            <div className="w-full   rounded-lg overflow-hidden">
              <img 
                src="/why-phone.png" 
                alt="Main Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Third Column - Image on Left */}
  <div className="space-y-8">
            {whyDataRight.map((item) => (
              <div
                key={item.id}
                 className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center lg:items-start text-center lg:text-left"
              >
                {/* Image section */}
                <div className="w-24 h-24 bg-[#101046] rounded-lg overflow-hidden mb-4 lg:mb-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover p-2"
                  />
                </div>

                {/* Text section */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-2xl text-[#101046] font-bold mb-2">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
</div>


          
        </div>
        
      </div>
    </section>
    </>

  )
}

export default Hero
