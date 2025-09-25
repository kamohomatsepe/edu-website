
import React from 'react';
interface ProcessItem {
  id: number;
  title: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
}

const WorkingProcess: React.FC = () => {
  
  const processData:ProcessItem[] = [
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
  return (
    <>
    {/* The working process */}
          <section 
            className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-cover mb-10  bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/working-process.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 backdrop-brightness-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto p-3">
        
        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16 mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Working Process
          </h2>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {processData.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-[#1AA939] rounded-lg  overflow-hidden flex items-center justify-center w-20 h-20">
                <img src={feature.imgSrc} alt={feature.imgAlt} className="max-w-full max-h-full object-contain p-2" />
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

        
        
        <div className="flex justify-center">
          <button className="px-8 py-4 sm:px-10 sm:py-5 bg-[#1AA939] text-[#fff] rounded-lg font-semibold text-base sm:text-lg hover:text-[#1AA939] hover:bg-[#fff] transition-colors duration-200 shadow-lg mb-5">
            Start New Project
          </button>
        </div>
        
      </div>
        </section>
    </>
  );
};

export default WorkingProcess;