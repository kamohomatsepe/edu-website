import type React from "react"
import "./HowToUse.css"

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
    <section className="how-to-use">
      <div className="container">
        <div className="how-to-use-content">
          <div className="phone-mockup">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=60"
              alt="Mobile and laptop showing learning app interface"
              className="phone-image"
            />
          </div>

          <div className="steps-content">
            <h2 className="how-to-use-title">HOW TO USE THE APP</h2>

            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <h3 className="step-title">
                    <span className="step-number">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="store-badges">
              <a href="#" className="store-badge-btn" aria-label="Get it on Google Play">Google Play</a>
              <a href="#" className="store-badge-btn" aria-label="Download on the App Store">App Store</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
