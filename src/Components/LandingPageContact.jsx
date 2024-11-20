import React, { useState } from "react";

const LandingPageContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bill: "",
    city: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          bill: "",
          city: "",
          message: "",
        });
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to the server.");
    }
  };
  return;
  <div>
    <div className="bg-black bg-opacity-75 shadow-lg rounded-lg p-6 lg:p-8">
      {isSubmitted ? (
        <div className="text-center text-white">
          <h2>Thank You!</h2>
          <p>Your form has been submitted successfully.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
            required
          />
          <input
            type="number"
            name="bill"
            placeholder="Your Electricity Bill"
            value={formData.bill}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Enter Your City"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
            rows="4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  </div>;
};

export default LandingPageContact;
