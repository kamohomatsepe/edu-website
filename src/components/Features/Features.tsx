import React from 'react';

// Define types for testimonial data
interface Testimonial {
  name: string;
  website: string;
  review: string;
  avatar: string;
}

// Define types for download step data
interface DownloadStep {
  title: string;
  description: string;
}

// Define types for store badge data
interface StoreBadge {
  url: string;
  imageSrc: string;
  altText: string;
}

const Features: React.FC = () => {
  // Sample data for testimonials
  const testimonials: Testimonial[] = [
    {
      name: "Mrs. Adebayo School Administrator, Lagos",
      website: "",
      review: "The fee collection system is a game-changer. Parents can now pay easily, and we can track everything instantly.",
      avatar: "/pic14.png?height=80&width=80",
    },
    {
      name: "Mrs. Okonkwo, Proprietor, Enugu",
      website: "",
      review: "With Educesol, I always know how my children are performing. The app keeps me informed in real time.",
      avatar: "/pic15.png?height=80&width=80",
    },
    {
      name: "Mr. Alvan Ikoku, Proprietor, Abuja",
      website: "",
      review: "My students are now excelling in their studies and feeling more empowered than ever before.",
      avatar: "/pic16.png?height=80&width=80",
    },
  ];

  // Sample data for download steps
  const downloadSteps: DownloadStep[] = [
    {
      title: "Step 1: Download and Install the App",
      description: "Visit the App Store (iOS) or Google Play Store (Android). Search for \"Educesol\" and click on the download button to install the app on your device."
    },
    {
      title: "Step 2: Create an Account",
      description: "Click on the \"Sign Up\" button. Fill in the required information, such as your name, email address, and password. Verify your email to activate your account."
    },
    {
      title: "Step 3: Log In",
      description: "Open the app and enter your registered email and password. Click \"Log In\" to access your dashboard."
    }
  ];

  // Sample data for store badges
  const storeBadges: StoreBadge[] = [
    {
      url: "https://play.google.com",
      imageSrc: "/google-play-badge.png",
      altText: "Google Play Store"
    },
    {
      url: "https://apps.apple.com",
      imageSrc: "/app-store-badge.png",
      altText: "Apple App Store"
    },
    {
      url: "https://microsoft.com/store",
      imageSrc: "/microsoft-store-badge.png",
      altText: "Microsoft Store"
    },
    {
      url: "https://apps.apple.com/mac",
      imageSrc: "/mac-app-store-badge.png",
      altText: "Mac App Store"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-r from-blue-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-green-600">Everything </span>
              <span className="text-blue-600">You </span>
              <span className="text-green-600 block md:inline">Need </span>
              <span className="text-blue-600">To</span>
              <br className="md:hidden"/>
              <span className="text-green-600">Run </span>
              <span className="text-blue-600">Your </span>
              <span className="text-green-600">School </span>
              <span className="text-blue-600">Efficiently</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Discover and Harness your unique strengths and abilities to achieve personal growth and success.
            </p>
            <div className="flex justify-center">
              <button className="bg-[#E0FFEC] hover:bg-blue-700 text-green-600 font-bold py-3 px-8 rounded-full flex items-center transition-colors">
                <span className="mr-2">→</span> Sign up Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Controls Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/admin-dashboard.png" 
                alt="Admin Dashboard" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Full Admin Controls</h2>
              <p className="text-gray-600 mb-6">Manage students, staff, classes, and operations centrally.</p>
              <a 
                href="/admin-controls" 
                className="text-[#1AA939] hover:border-b-2 hover:border-[#1AA939] pb-1 font-medium inline-flex items-center transition-all duration-200"
              >
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Fees Payment Feature */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/payment-screens.png" 
                alt="Payment Screens" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Easy Fees Payment</h2>
              <p className="text-gray-600 mb-6">Secure, automated payment collection and receipts.</p>
              <a 
                href="/fees-payment" 
                className="text-[#1AA939] hover:border-b-2 hover:border-[#1AA939] pb-1 font-medium inline-flex items-center transition-all duration-200"
              >
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedules Access Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/schedules-screens.png" 
                alt="Schedules and Notes Screens" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Full Access to Schedules, Notes and Assignments</h2>
              <p className="text-gray-600 mb-6">
                Learning requires easy access to essential resources. We provide our users with full access to schedules, notes everything you need right at your fingertips.
              </p>
              <a 
                href="/schedules-access" 
                className="text-[#1AA939] hover:border-b-2 hover:border-[#1AA939] pb-1 font-medium inline-flex items-center transition-all duration-200"
              >
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-platform Feature */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/multi-device.png" 
                alt="Multiple Devices" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Accessible on all Platforms</h2>
              <p className="text-gray-600">
                Learning should be flexible and accessible. That's why our platform is designed to be fully accessible across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <div className="reviews-count">
              <span className="count-number">Reviews</span>
            </div>
            <p className="reviews-description">Reviews and feedback from students and educators, helps to assess the effectiveness of courses and improve the overall educational experience.</p>
          </div>
          
          <div className="reviews-grid">
          {testimonials.map((review, index) => (
            <div key={index} className="review-card">
              <div className="reviewer-info">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={`${review.name} avatar`}
                  className="reviewer-avatar"
                />
                <div className="reviewer-details">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <p className="reviewer-website">{review.website}</p>
                </div>
              </div>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>
          
          <p className="mission-statement">Underpinning Educesol's success is a relentless commitment to innovation and a deep understanding of the evolving needs of modern learners. By continuously investing in research, technology, and pedagogical best practices, Educesol ensures that its offerings...</p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-[#101046] text-white">
        <div className="container mx-auto px-4">       
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* App Screenshots */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img 
                  src="/app-screenshot.png" 
                  alt="App Screenshot 1" 
                  className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                />

              </div>
            </div>
            
            {/* Download Content */}
            <div className="lg:w-1/2 max-w-2xl mx-auto">
            <div className="mb-12 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-[#1AA939]">Download App</h2>
          </div>
              <div className="space-y-8">
                {downloadSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <h4 className="text-lg font-medium text-white mb-4">Available on:</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <a 
                        href={storeBadges[0].url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                      >
                        <img 
                          src={storeBadges[0].imageSrc}
                          alt={storeBadges[0].altText}
                          className="h-12 w-auto"
                        />
                      </a>
                      <a 
                        href={storeBadges[2].url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                      >
                        <img 
                          src={storeBadges[2].imageSrc}
                          alt={storeBadges[2].altText}
                          className="h-12 w-auto"
                        />
                      </a>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href={storeBadges[1].url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                      >
                        <img 
                          src={storeBadges[1].imageSrc}
                          alt={storeBadges[1].altText}
                          className="h-12 w-auto"
                        />
                      </a>
                      <a 
                        href={storeBadges[3].url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:opacity-90 transition-opacity"
                      >
                        <img 
                          src={storeBadges[3].imageSrc}
                          alt={storeBadges[3].altText}
                          className="h-12 w-auto"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="/learn-more" 
                    className="bg-[#1AA939] hover:bg-[#168b31] text-white font-semibold py-3 px-8 rounded-lg text-center transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/install" 
                    className="border-2 border-white hover:bg-blue-600 hover:bg-opacity-10 text-white font-semibold py-3 px-8 rounded-lg text-center transition-colors inline-flex items-center justify-center"
                  >
                    Install Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="features-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Educesol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Features;
