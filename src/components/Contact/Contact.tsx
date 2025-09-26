import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 mt-20">
      
      {/* Map */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63441.26993584614!2d3.2258866281052114!3d6.486501714987633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8972a0413043%3A0xd5bb5d1c0948ceb3!2sMetroBlue%20Tech%20Systems%20LTD!5e0!3m2!1sen!2sng!4v1756492964896!5m2!1sen!2sng"
          width="100%"
          height="320"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-[#1AA939] inline-block pb-2">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AA939]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AA939]"
                />
              </div>
              <div className="flex-1">
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1AA939] resize-vertical"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1AA939] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-[#1AA939] inline-block pb-2">
            Contact Details
          </h2>
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-start gap-3">
              <img src="/facebook.svg" alt=" Facebook Icon" className='w-8' />
              <a href="https://www.facebook.com/share/1CThB8u5pJ/" className="hover:underline">Facebook</a>
            </div>
            <div className="flex items-start gap-3">
              <img src="/linked.svg" alt=" LinkedIn Icon" className='w-8' />
              <a href="https://www.linkedin.com/company/metroblue/" className="hover:underline">LinkedIn</a>
            </div>
            <div className="flex items-start gap-3">
              <img src="/phone2.svg" alt=" Phone  Icon" className='w-8' />
              
              <span> +234 907 912 5273</span>
            </div>
            <div className="flex items-start gap-3">
              <img src="/location2.svg" alt=" Location Icon" className='w-8' />
              <span>
                MetroBlue Tech System Ltd <br />
                322 Road, Opposite H-Close, <br />
                Festac Town, Lagos, Nigeria.
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
