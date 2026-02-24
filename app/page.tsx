"use client";

import Link from "next/link";

export default function Home() {
  const styles = {
    section: {
      padding: "100px 20px",
      textAlign: "center" as const,
    },

    hero: {
      height: "100vh",
      backgroundImage: "url('/hero-3d.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative" as const,
      color: "white",
    },

    overlay: {
      position: "absolute" as const,
      inset: 0,
      background: "rgba(0,0,0,0.7)",
    },

    heroContent: {
      position: "relative" as const,
      maxWidth: "700px",
    },

    heroTitle: {
      fontSize: "52px",
      marginBottom: "20px",
    },

    heroSpan: {
      color: "#00f5ff",
    },

    heroText: {
      marginBottom: "30px",
      opacity: 0.9,
    },

    buttonContainer: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap" as const,
    },

    primaryBtn: {
      background: "#00f5ff",
      color: "#000",
      padding: "12px 28px",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: 600,
    },

    secondaryBtn: {
      border: "2px solid #00f5ff",
      color: "#00f5ff",
      padding: "12px 28px",
      borderRadius: "30px",
      textDecoration: "none",
    },

    container: {
      maxWidth: "1100px",
      margin: "auto",
    },

    servicesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      marginTop: "40px",
    },

    card: {
      background: "#1a1a1a",
      padding: "30px",
      borderRadius: "20px",
      transition: "0.3s",
    },

    gradientSection: {
      background: "linear-gradient(45deg, #00f5ff, #0044ff)",
      color: "black",
      padding: "100px 20px",
      textAlign: "center" as const,
    },
  };

  return (
    <main style={{ background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            3D Business <span style={styles.heroSpan}>Modules</span>
          </h1>

          <p style={styles.heroText}>
            We create immersive 3D websites using modern technologies
            like Next.js and interactive animations.
          </p>

          <div style={styles.buttonContainer}>
            <Link href="/services" style={styles.primaryBtn}>
              Explore Services
            </Link>

            <Link href="/contact" style={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2>About Our Studio</h2>
          <p style={{ maxWidth: "700px", margin: "20px auto" }}>
            We design high-performance digital platforms combining 3D
            modules, animations and business-focused UI/UX.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ ...styles.section, background: "#111" }}>
        <div style={styles.container}>
          <h2>Our 3D Services</h2>

          <div style={styles.servicesGrid}>
            <div style={styles.card}>
              <h3>3D Website Design</h3>
              <p>Interactive 3D layouts with modern UI.</p>
            </div>

            <div style={styles.card}>
              <h3>Next.js Development</h3>
              <p>Fast & scalable applications.</p>
            </div>

            <div style={styles.card}>
              <h3>3D Product Showcase</h3>
              <p>Rotate & explore products in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.gradientSection}>
        <h2>Ready to Build Your 3D Website?</h2>
        <div style={{ marginTop: "30px" }}>
          <Link href="/contact" style={styles.primaryBtn}>
            Start Your Project
          </Link>
        </div>
      </section>

    </main>
  );
}