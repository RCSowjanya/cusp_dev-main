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




import React, { useState } from "react";
import axios from "axios";

const LandingPageContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bill: "",
    city: "",
    message: "",
    requirement: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/send-email",
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          bill: "",
          city: "",
          message: "",
          requirement: "",
        });
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to the server.");
    }
  };

  return (
    <div>
      <div className="bg-black bg-opacity-75 shadow-lg rounded-lg p-6 lg:p-8 lg:mt-[-12rem] max-[1000px]:mt-[-7rem]">
        {isSubmitted ? (
          <div className="text-center text-white">
            <h2>Thank You!</h2>
            <p>Your form has been submitted successfully.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center text-white">
              Get In Touch
            </h2>
            {/* Requirement Dropdown */}
            <div>
              <label
                htmlFor="requirement"
                className="block text-sm font-medium text-white mb-3"
              >
                Select Your Requirement
              </label>
              <select
                id="requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white"
                required
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              required
            />
            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              required
            />
            {/* Phone Field */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              required
            />
            {/* Electricity Bill Field */}
            <input
              type="number"
              name="bill"
              placeholder="Your Electricity Bill"
              value={formData.bill}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              required
            />
            {/* City Field */}
            <input
              type="text"
              name="city"
              placeholder="Enter Your City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              required
            />
            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg border-gray-300 text-gray-700 bg-white placeholder-gray-500"
              rows="4"
              required
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LandingPageContact;

