import type React from "react"

// interface Feature {
//   icon: string
//   title: string
//   description: string
// }

const WhyEducesol: React.FC = () => {
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
      {/* Why Eduscesol */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 mb-10">
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

export default WhyEducesol
