"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main style={styles.main}>

      {/* HERO */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={styles.title}>
          About <span style={styles.highlight}>Our 3D Studio</span>
        </h1>
        <p style={styles.text}>
          We specialize in building immersive 3D websites and interactive digital
          experiences that elevate brands in the modern digital era.
        </p>
      </motion.section>

      {/* ABOUT SECTION */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.aboutFlex}>

            {/* IMAGE */}
            <motion.div
              style={styles.imageBox}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/about logo.jpg"
                alt="3D Studio Work"
                width={500}
                height={400}
                style={styles.image}
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              style={styles.contentBox}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div style={styles.sectionHeadingWrap}>
                <h2 style={styles.sectionHeading}>Who We Are</h2>
                <div style={styles.underline}></div>
              </div>

              <p style={{ marginTop: "20px", lineHeight: 1.8 }}>
                We are a creative 3D web development studio focused on delivering
                high-performance digital solutions. Our team blends technology,
                creativity, and strategy to craft immersive web experiences.
              </p>

              <p style={{ marginTop: "20px", lineHeight: 1.8 }}>
                From product modeling to architectural visualization and 3D
                interactive websites, we help businesses stand out in a competitive
                market with innovative digital solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        style={styles.experienceSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.container}>
          <div style={{ textAlign: "center" }}>
            <div style={styles.sectionHeadingWrap}>
              <h2 style={styles.sectionHeading}>Our Experience</h2>
              <div style={{ ...styles.underline, margin: "0 auto" }}></div>
            </div>
          </div>

          <motion.div
            style={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[ 
              { num: "5+", text: "Years of Experience" },
              { num: "120+", text: "Projects Completed" },
              { num: "80+", text: "Happy Clients" },
              { num: "15+", text: "Professional Experts" },
            ].map((item, index) => (
              <motion.div
                key={index}
                style={styles.statCard}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div style={styles.statNumber}>{item.num}</div>
                <h3>{item.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.ctaTitle}>
          Let’s Build Something Amazing Together
        </h2>

        <p style={styles.ctaText}>
          Ready to transform your digital presence with immersive 3D experiences?
          Let’s collaborate and bring your vision to life.
        </p>

        <Link href="/contact" style={styles.button}>
          Start Your Project
        </Link>
      </motion.section>

    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    background: "#0a0a0a",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    padding: "120px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #00f5ff10, #0044ff20)",
  },

  title: {
    fontSize: "48px",
    marginBottom: "20px",
  },

  highlight: { color: "#00f5ff" },

  text: {
    maxWidth: "800px",
    margin: "0 auto",
    opacity: 0.85,
    lineHeight: 1.8,
    fontSize: "18px",
  },

  section: { padding: "100px 20px" },

  container: { maxWidth: "1100px", margin: "auto" },

  aboutFlex: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "50px",
    marginTop: "60px",
  },

  imageBox: { flex: 1, minWidth: "300px" },

  contentBox: { flex: 1, minWidth: "300px" },

  image: {
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  },

  sectionHeadingWrap: { marginBottom: "30px" },

  sectionHeading: {
    fontSize: "36px",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },

  underline: {
    width: "70px",
    height: "4px",
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    borderRadius: "10px",
  },

  experienceSection: {
    background: "#111",
    padding: "100px 20px",
    textAlign: "center",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
    marginTop: "60px",
  },

  statCard: {
    background: "linear-gradient(145deg, #0a0a0a, #111)",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #1f1f1f",
  },

  statNumber: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#00f5ff",
    marginBottom: "15px",
  },

  cta: {
    padding: "120px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  },

  ctaTitle: { fontSize: "40px", marginBottom: "20px", fontWeight: "bold" },

  ctaText: {
    maxWidth: "700px",
    margin: "0 auto",
    opacity: 0.85,
    fontSize: "18px",
    lineHeight: 1.8,
  },

  button: {
    background: "linear-gradient(90deg, #00f5ff, #0044ff)",
    color: "white",
    padding: "16px 40px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block",
    marginTop: "40px",
  },
};