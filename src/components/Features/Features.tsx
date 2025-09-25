import React from 'react';
// import './Features.css';

// Define types for testimonial data
// interface Testimonial {
//   name: string
//   website: string
//   review: string
//   avatar: string
// }

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
  // const testimonials: Testimonial[] = [
  //   {
  //     name: "Mrs. Adebayo School Administrator, Lagos",
  //     website: "",
  //     review: "The fee collection system is a game-changer. Parents can now pay easily, and we can track everything instantly.",
  //     avatar: "/pic14.png?height=80&width=80",
  //   },
  //   {
  //     name: "Mrs. Okonkwo, Proprietor, Enugu",
  //     website: "",
  //     review: "With Educesol, I always know how my children are performing. The app keeps me informed in real time.",
  //     avatar: "/pic15.png?height=80&width=80",
  //   },
  //   {
  //     name: "Mr. Alvan Ikoku, Proprietor, Abuja",
  //     website: "",
  //     review: "My students are now excelling in their studies and feeling more empowered than ever before.",
  //     avatar: "/pic16.png?height=80&width=80",
  //   },
  // ];

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
    <div className="features-page">

      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="text-green">Everything </span><span className="text-purple">You </span><span className="text-green"> <br /> Need </span><span className="text-purple">To</span><br/>
              <span className="text-green">Run </span><span className="text-purple">Your </span><span className="text-green">School </span><span className="text-purple">Efficiently </span><span className="text-green"></span><br/>
              <span className="text-purple"> </span>
            </h1>
            <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px' }}>Discover and Harness your unique strengths and abilities to achieve personal growth and success.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="sign-up-button">
                <span className="arrow-icon">→</span> Sign up Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Controls Feature */}
      <section className="feature-section admin-controls">
        <div className="container">
          <div className="feature-image">
            <img src="/admin-dashboard.png" alt="Admin Dashboard" />
          </div>
          <div className="feature-content right-content">
            <h2>Full Admin Controls</h2>
            <p>Manage students, staff, classes, and operations centrally.</p>
            <a href="/admin-controls" className="learn-more">Learn More <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Easy Fees Payment Feature */}
      <section className="feature-section fees-payment">
        <div className="container">
          <div className="feature-content left-content">
            <h2>Easy Fees Payment</h2>
            <p>Secure, automated payment collection and receipts.</p>
            <a href="/fees-payment" className="learn-more">Learn More <span className="arrow">→</span></a>
          </div>
          <div className="feature-image">
            <img src="/payment-screens.png" alt="Payment Screens" />
          </div>
        </div>
      </section>

      {/* Schedules Access Feature */}
      <section className="feature-section schedules-access">
        <div className="container">
          <div className="feature-image">
            <img src="/schedules-screens.png" alt="Schedules and Notes Screens" />
          </div>
          <div className="feature-content right-content">
            <h2>Full Access to Schedules, Notes and Assignments</h2>
            <p>Learning requires easy access to essential resources. We provide our users with full access to schedules, notes everything you need right at your fingertips.</p>
            <a href="/schedules-access" className="learn-more">Learn More <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Multi-platform Feature */}
      <section className="feature-section multi-platform">
        <div className="container">
          <div className="feature-content left-content">
            <h2>Accessible on all Platforms</h2>
            <p>Learning should be flexible and accessible. That's why our platform is designed to be fully accessible across all devices.</p>
          </div>
          <div className="feature-image">
            <img src="/multi-device.png" alt="Multiple Devices" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {/* <section className="reviews-section">
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
      </section> */}

      {/* Download Section */}
      <section className="download-section">
        <div className="container">
          <div className="download-image">
            <img src="/app-screenshot.png" alt="App Screenshot" />
          </div>
          <div className="download-content">
            <h2>DOWNLOAD NOW!</h2>
            
            <div className="download-steps">
              {downloadSteps.map((step, index) => (
                <div className="step" key={index}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="download-buttons">
              <a href="/learn-more" className="learn-more-btn">Learn More</a>
              <a href="/install" className="install-now-btn">Install Now</a>
            </div>
            
            <div className="app-store-badges">
              {storeBadges.map((badge, index) => (
                <a href={badge.url} className="store-badge" key={index}>
                  <img src={badge.imageSrc} alt={badge.altText} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="features-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Educesol. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Features;
