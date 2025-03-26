import { useState } from "react";

function Contact() {
  // State to track form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to track errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Utility function to validate email format
  const isValidEmail = (email: string): boolean => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  // Handle input change and update state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate fields when user leaves a field (onBlur)
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Create a copy of the current errors
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name as keyof typeof errors] = `${name} is required`;
    } else if (name === "email" && !isValidEmail(value)) {
      newErrors.email = "Email is not valid";
    } else {
      newErrors[name as keyof typeof errors] = "";
    }

    setErrors(newErrors);
  };

  // Handle form submission (right now just logs the data)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for any validation errors before submitting
    const newErrors = {
      name: !formData.name.trim() ? "Name is required" : "",
      email: !formData.email.trim()
        ? "Email is required"
        : !isValidEmail(formData.email)
        ? "Email is not valid"
        : "",
      message: !formData.message.trim() ? "Message is required" : "",
    };

    setErrors(newErrors);

    // If there are no errors, pretend to "submit"
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      console.log("Form submitted:", formData);
      // Clear form if needed
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            name="message"
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>

      {/* Optional contact info */}
      <div className="contact-info">
        <p>Email: your.email@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </section>
  );
}

export default Contact;
