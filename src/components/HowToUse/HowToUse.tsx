import type React from "react"
import { Link } from "react-router-dom"

interface Step {
  number: string
  title: string
  description: string
}

const HowToUse: React.FC = () => {
  const steps: Step[] = [
    {
      number: "Step 1:",
      title: "Download and Install the App",
      description:
        'Visit the App Store (iOS) or Google Play Store (Android). Search for "Educesol" and click on the download button. Once downloaded, open the app to begin the setup.',
    },
    {
      number: "Step 2:",
      title: "Create an Account",
      description:
        'Click on the "Sign Up" button. Fill in the required information, such as your name, email address, and password. Verify your email to activate your account.',
    },
    {
      number: "Step 3:",
      title: "Log In",
      description:
        'Open the app and enter your registered email and password. Click "Log In" to access your dashboard.',
    },
  ]

  return (
    <section className="bg-[#101046] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Phone Mockup */}
          <div className="flex justify-center items-center order-last md:order-first">
            <img
              src="/iphone.png"
              alt="Mobile and laptop showing learning app interface"
              className="max-w-full h-auto max-h-[650px] rounded-lg shadow-lg"
            />
          </div>

          {/* Steps */}
          <div className="text-left ">

            <h2 className="text-3xl md:text-4xl font-bold text-[#1AA939] mb-8 p-3">
              HOW TO USE THE APP
            </h2>

            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    <span className="text-[#fff] font-bold mr-2">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base text-justify">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Store Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="#"
                aria-label="Get it on Google Play"
                className="inline-block px-5 py-2.5 rounded-lg bg-[#1AA939] text-white font-semibold shadow-md transition duration-200 hover:-translate-y-1 hover:bg-green-600"
              >
                Google Play
              </Link>
              <Link
                to="#"
                aria-label="Download on the App Store"
                className="inline-block px-5 py-2.5 rounded-lg bg-[#1AA939] text-white font-semibold shadow-md transition duration-200 hover:-translate-y-1 hover:bg-green-600"
              >
                App Store
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
