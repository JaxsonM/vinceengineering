import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 md:px-20 mt-4">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-6xl font-bold">Contact Us</h1>
        <div className="dividing-line"></div>
      </div>
      <div className="flex flex-col md:flex-row bg-[#D8D8D8] w-full h-auto md:h-[calc(70vh-10rem)] my-10">
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in Touch</h2>
          <div className="dividing-line"></div>
          <p className="text-lg md:text-xl mb-6">
            If you have any inquiries or would like to request our services, please contact us using the form below. We look forward to hearing from you!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-lg md:text-xl font-medium">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md text-lg md:text-xl"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg md:text-xl font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md text-lg md:text-xl"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg md:text-xl font-medium">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md text-lg md:text-xl"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div>
              <label className="block text-lg md:text-xl font-medium">Message</label>
              <textarea
                className="w-full p-2 border rounded-md text-lg md:text-xl"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-[#1D6FC6] text-white text-lg md:text-2xl font-semibold rounded hover:bg-[#8FD041] transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('/images/contact.jpg')" }}></div>
      </div>
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Location</h2>
        <div className="dividing-line"></div>
        <p className="text-lg md:text-xl mb-6">1890 S 3850 W, Salt Lake City, UT 84104</p>
        <iframe
          title="Google Map"
          className="w-full h-64 md:h-96 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.856842195633!2d-111.95591868459313!3d40.7240603793316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528b0e02b1d635%3A0x72db849edaaedd19!2s1890%20S%203850%20W%2C%20Salt%20Lake%20City%2C%20UT%2084104%2C%20USA!5e0!3m2!1sen!2sin!4v1618374806344!5m2!1sen!2sin"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
