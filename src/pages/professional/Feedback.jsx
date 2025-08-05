// src/pages/Feedback.jsx
import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    rating: "",
    type: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple frontend validation
    if (!formData.service || !formData.rating || !formData.type || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    // Simulate successful form submission
    console.log("Submitted Feedback:", formData);
    setSubmitted(true);
    setError("");
    setFormData({
      name: "",
      email: "",
      service: "",
      rating: "",
      type: "",
      message: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>

      {submitted && (
        <div className="text-green-600 font-semibold mb-3">
          ✅ Thank you! Your feedback has been submitted.
        </div>
      )}
      {error && (
        <div className="text-red-600 font-medium mb-3">
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name (optional)"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Select Service --</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Salon">Salon</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Feedback Type --</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Complaint">Complaint</option>
          <option value="Appreciation">Appreciation</option>
          <option value="Bug">Bug</option>
        </select>

        <textarea
          name="message"
          placeholder="Your feedback message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded h-28"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
