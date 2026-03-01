"use client";

import { useState } from "react";
import React from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{3,}$/.test(form.name)) {
      newErrors.name = "Name must be at least 3 letters (no numbers)";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid Indian mobile number";
    }

    // Message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");

    if (validate()) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess("Message sent successfully ✅");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }, 1500);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (e.target.name === "email") {
      value = value.toLowerCase();
    }

    setForm({ ...form, [e.target.name]: value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>

        {success && <p style={styles.success}>{success}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <label style={styles.label}>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <label style={styles.label}>Phone *</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter 10 digit mobile number"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}

          <label style={styles.label}>Message *</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Map Section */}
        <div style={styles.mapContainer}>
          <h2 style={styles.mapTitle}>Visit Our Office</h2>

          <iframe
            src="https://www.google.com/maps?q=Ahmedabad,India&output=embed"
            width="100%"
            height="350"
            style={styles.map}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    background: "#0a0a0a",
    minHeight: "100vh",
    padding: "60px 20px",
    color: "white",
  },
  container: {
    background: "#111",
    padding: "40px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "650px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    opacity: 0.8,
  },
  input: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "white",
  },
  textarea: {
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#1a1a1a",
    color: "white",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg,#00f5ff,#0044ff)",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "13px",
    marginBottom: "10px",
  },
  success: {
    background: "#003d2e",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
    marginBottom: "20px",
    color: "#00ffb3",
  },
  mapContainer: {
    marginTop: "60px",
  },
  mapTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  map: {
    borderRadius: "15px",
    border: "1px solid #333",
  },
};