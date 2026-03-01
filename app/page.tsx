"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main style={styles.main}>
      
      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.video}>
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div style={styles.overlay}></div>

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>
            <span style={styles.brandMain}>3D Business</span>{" "}
            <span style={styles.brandHighlight}>Modules</span>
          </h1>

          <p style={styles.heroText}>
            We create immersive 3D websites using modern technologies
            and interactive animations that elevate brands.
          </p>

          <div style={styles.buttonContainer}>
            <Link href="/services" style={styles.primaryBtn}>
              Explore Services
            </Link>
            <Link href="/Contact" style={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section style={styles.aboutSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            About <span style={styles.highlight}>Our Studio</span>
          </h2>

          <div style={styles.aboutFlex}>
            <motion.div
              style={styles.imageWrapper}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="/about logo.jpg"
                alt="3D Studio"
                width={500}
                height={400}
                style={{ borderRadius: "20px" }}
              />
            </motion.div>

            <motion.div
              style={styles.contentBox}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p style={styles.paragraph}>
                We are a creative 3D web development studio focused on delivering
                high-performance digital solutions blending creativity and technology.
              </p>

              <p style={styles.paragraph}>
                From product modeling to architectural visualization and interactive
                experiences, we help businesses stand out with innovative solutions.
              </p>

              <Link href="/About" style={styles.primaryBtn}>
                Read More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COUNTER SECTION ================= */}
      <section style={styles.counterSection}>
        <div style={styles.counterGrid}>
          {[
            { number: 150, label: "Projects Completed" },
            { number: 98, label: "Happy Clients" },
            { number: 5, label: "Years Experience" },
            { number: 24, label: "Team Members" },
          ].map((item, index) => (
            <motion.div
              key={index}
              style={styles.counterBox}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 style={styles.counterNumber}>
                <CountUp
                  start={0}
                  end={item.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h2>
              <p style={styles.counterLabel}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section style={styles.services}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Our <span style={styles.highlight}>Services</span>
          </h2>

          <div style={styles.serviceGrid}>
            {[
              {
                title: "3D Website Development",
                desc: "Modern immersive websites built with Three.js, React & Next.js delivering smooth animations.",
              },
              {
                title: "Product Visualization",
                desc: "High-quality 3D product renders and interactive models.",
              },
              {
                title: "Architectural Rendering",
                desc: "Realistic 3D architectural visualizations for projects.",
              },
              {
                title: "Interactive Animations",
                desc: "Custom motion graphics and UI animations.",
              },
              {
                title: "UI/UX Design",
                desc: "Modern and user-focused interface design.",
              },
              {
                title: "Brand Experience Design",
                desc: "Creative digital brand experiences.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                style={styles.serviceCard}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.desc}</p>

                <Link href="/contact" style={styles.serviceBtn}>
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR MODELS SECTION ================= */}
      <section style={styles.modelsSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>
            Our <span style={styles.highlight}>Models</span>
          </h2>

          <div style={styles.sliderWrapper}>
            <motion.div
              style={styles.sliderTrack}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[
                "/cardimg1.png",
                "/cardimg2.png",
                "/cardimg3.png",
                "/cardimg4.png",
                "/cardimg5.png",
                "/cardimg6.png",
                "/cardimg7.png",
                "/cardimg8.png",
                "/cardimg9.png",
                "/cardimg10.png",
              ].map((img, index) => (
                <div key={index} style={styles.modelCard}>
                  <Image
                    src={img}
                    alt="3D Model"
                    width={300}
                    height={200}
                    style={styles.modelImage}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={styles.bottomCta}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Ready To Elevate Your Brand?
        </h2>
        <Link href="/contact" style={styles.primaryBtn}>
          Contact Us Today
        </Link>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: { background: "#0a0a0a", color: "white", fontFamily: "Arial" },
  hero: { position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden" },
  video: { position: "absolute", width: "100%", height: "100%", objectFit: "cover" },
  overlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" },
  heroContent: { position: "relative", zIndex: 2 },
  heroTitle: { fontSize: "clamp(32px, 6vw, 60px)", marginBottom: "20px", fontWeight: "bold" },
  brandMain: { color: "#fff" },
  brandHighlight: { background: "linear-gradient(90deg,#00f5ff,#0044ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 0 25px rgba(0,245,255,0.7)" },
  heroText: { marginBottom: "40px", fontSize: "18px" },
  buttonContainer: { display: "flex", gap: "20px", justifyContent: "center" },
  primaryBtn: { background: "linear-gradient(90deg,#00f5ff,#0044ff)", color: "white", padding: "14px 32px", borderRadius: "40px", textDecoration: "none" },
  secondaryBtn: { border: "2px solid #00f5ff", color: "#00f5ff", padding: "14px 32px", borderRadius: "40px", textDecoration: "none" },
  aboutSection: { padding: "120px 20px" },
  container: { maxWidth: "1100px", margin: "auto" },
  sectionTitle: { textAlign: "center", fontSize: "40px", marginBottom: "60px" },
  highlight: { color: "#00f5ff" },
  aboutFlex: { display: "flex", gap: "60px", flexWrap: "wrap" },
  imageWrapper: { flex: 1, minWidth: "300px" },
  contentBox: { flex: 1, minWidth: "300px" },
  paragraph: { marginBottom: "20px" },
  counterSection: { padding: "100px 20px", background: "#111" },
  counterGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "40px", maxWidth: "1000px", margin: "auto", textAlign: "center" },
  counterBox: { background: "rgba(255,255,255,0.05)", padding: "40px", borderRadius: "20px" },
  counterNumber: { fontSize: "42px", color: "#00f5ff" },
  counterLabel: { marginTop: "10px", opacity: 0.8 },
  services: { padding: "120px 20px" },
  serviceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "30px" },
  serviceCard: { background: "rgba(255,255,255,0.05)", padding: "35px", borderRadius: "20px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" },
  serviceTitle: { fontSize: "22px", marginBottom: "15px", color: "#00f5ff" },
  serviceDesc: { fontSize: "15px", lineHeight: "1.6", opacity: 0.85, marginBottom: "20px" },
  serviceBtn: { display: "inline-block", padding: "10px 20px", borderRadius: "30px", background: "linear-gradient(90deg,#00f5ff,#0044ff)", color: "white", textDecoration: "none", fontSize: "14px" },
  modelsSection: { padding: "120px 20px", background: "#111", overflow: "hidden" },
  sliderWrapper: { overflow: "hidden", width: "100%" },
  sliderTrack: { display: "flex", gap: "30px", width: "max-content" },
  modelCard: { minWidth: "300px", borderRadius: "20px", overflow: "hidden", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" },
  modelImage: { width: "100%", height: "200px", objectFit: "cover" },
  bottomCta: { padding: "120px 20px", textAlign: "center", background: "linear-gradient(90deg,#00f5ff,#0044ff)" },
};