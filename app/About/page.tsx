"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main style={styles.main}>

      {/* Animated Background Glow */}
      <div style={styles.backgroundGlow}></div>

      {/* HERO */}
      <section style={styles.hero}>
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span style={styles.highlight}>Our 3D Studio</span>
        </motion.h1>

        <motion.p
          style={styles.text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We specialize in building immersive 3D websites and interactive digital
          experiences that elevate brands in the modern digital era.
        </motion.p>
      </section>

      {/* ABOUT SECTION */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.aboutFlex}>

            {/* IMAGE */}
            <motion.div
              style={styles.imageWrapper}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/about logo.jpg"
                alt="3D Studio Work"
                width={500}
                height={400}
                style={styles.image}
              />
              <div style={styles.imageOverlay}></div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              style={styles.contentBox}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={styles.sectionHeading}>Who We Are</h2>

              <p style={styles.paragraph}>
                We are a creative 3D web development studio focused on delivering
                high-performance digital solutions blending creativity and technology.
              </p>

              <p style={styles.paragraph}>
                From product modeling to architectural visualization and interactive
                experiences, we help businesses stand out with innovative solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>
          Let’s Build Something Amazing Together
        </h2>

        <motion.div whileHover={{ scale: 1.08 }}>
          <Link href="/contact" style={styles.button}>
            Start Your Project
          </Link>
        </motion.div>
      </section>

      {/* Keyframes */}
      <style>
        {`
          @keyframes floatGlow {
            0% { transform: translateY(0px); }
            100% { transform: translateY(40px); }
          }
        `}
      </style>

    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {

  main: {
    background: "#0a0a0a",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden"
  },

  backgroundGlow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, #00f5ff40, transparent 70%)",
    top: "-100px",
    left: "-100px",
    filter: "blur(120px)",
    animation: "floatGlow 6s infinite alternate"
  },

  hero: {
    padding: "140px 20px",
    textAlign: "center"
  },

  title: { fontSize: "50px", marginBottom: "20px" },

  highlight: { color: "#00f5ff" },

  text: {
    maxWidth: "800px",
    margin: "0 auto",
    opacity: 0.85,
    fontSize: "18px",
    lineHeight: 1.8
  },

  section: { padding: "100px 20px" },

  container: { maxWidth: "1100px", margin: "auto" },

  aboutFlex: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "60px"
  },

  imageWrapper: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
  },

  image: {
    borderRadius: "20px"
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0,0,0,0.4), transparent)"
  },

  contentBox: { flex: 1, minWidth: "300px" },

  sectionHeading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#00f5ff",
    marginBottom: "20px"
  },

  paragraph: {
    marginBottom: "20px",
    lineHeight: 1.8,
    opacity: 0.85
  },

  cta: {
    padding: "120px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
  },

  ctaTitle: { fontSize: "40px", marginBottom: "30px" },

  button: {
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    color: "white",
    padding: "16px 40px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block"
  }
};