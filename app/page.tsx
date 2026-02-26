"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", color: "white", fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO SECTION */}
      <section style={styles.hero}>
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.video}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div style={styles.overlay}></div>

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>
            3D Business <span style={styles.gradientText}>Modules</span>
          </h1>

          <p style={styles.heroText}>
            We create immersive 3D websites using modern technologies
            and interactive animations that elevate brands.
          </p>

          <motion.div
            style={styles.buttonContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/services" style={styles.primaryBtn}>
              Explore Services
            </Link>

            <Link href="/contact" style={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    padding: "0 20px",
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 1,
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "900px",
    padding: "20px",
  },

  heroTitle: {
    fontSize: "clamp(32px, 6vw, 60px)",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  gradientText: {
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroText: {
    marginBottom: "40px",
    opacity: 0.9,
    fontSize: "clamp(15px, 2.5vw, 18px)",
    lineHeight: 1.7,
  },

  buttonContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    color: "white",
    padding: "14px 32px",
    borderRadius: "40px",
    textDecoration: "none",
    fontWeight: 600,
  },

  secondaryBtn: {
    border: "2px solid #00f5ff",
    color: "#00f5ff",
    padding: "14px 32px",
    borderRadius: "40px",
    textDecoration: "none",
  },
};