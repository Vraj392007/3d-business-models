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

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name cannot contain numbers";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully ✅");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.message && <p style={styles.error}>{errors.message}</p>}

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        {/* Location Section */}
        <div style={styles.mapContainer}>
          <div style={styles.mapHeadingWrap}>
            <h2 style={styles.mapTitle}>Visit Our Office</h2>
            <div style={styles.underline}></div>
            <p style={styles.mapSubtitle}>
              We’d love to welcome you to our workspace. Find us at the location below.
            </p>
          </div>

          <iframe
            src="https://www.google.com/maps?q=Ahmedabad,India&output=embed"
            width="100%"
            height="400"
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
    background: "#00f5ff",
    color: "black",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },

  /* Map Section */
  mapContainer: {
    marginTop: "70px",
  },
  mapHeadingWrap: {
    textAlign: "center",
    marginBottom: "25px",
  },
  mapTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  mapSubtitle: {
    opacity: 0.8,
    fontSize: "16px",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  underline: {
    width: "70px",
    height: "4px",
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    margin: "0 auto 15px auto",
    borderRadius: "10px",
  },
  map: {
    borderRadius: "15px",
    border: "1px solid #333",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  },
};