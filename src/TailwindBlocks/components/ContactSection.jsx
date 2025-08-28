import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(formData);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    setFormData({ name: "", email: "", message: "" });
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section>
      <section className="text-gray-600 body-font relative bg-BgColor text-TextColor">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.4128841718693!2d83.4954671!3d18.000652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bfebe019196fb%3A0xb5aea26d4594b1c!2sMiracle%20City%20%7C%20Miracle%20Software%20Systems!5e0!3m2!1sen!2sin!4v1693053940321!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-TextColor tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Miracle City ,Munjeru,Bhogapuram ,Vizianagaram</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-TextColor tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">hyma@gmail.com</a>
                <h2 className="title-font font-semibold text-TextColor tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-lg shadow-md">
            <h2 className="text-TextColor text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              We value your feedback, please share your thoughts below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
                  leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
                  leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
                  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 
                  resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
                hover:bg-indigo-600 rounded text-lg w-full"
              >
                Submit
              </button>
            </form>

            {success && (
              <p className="text-green-600 mt-4 text-center font-medium">
                ✅ Thank you for your feedback!
              </p>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ContactSection
