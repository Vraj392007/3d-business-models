import React from "react";
import "./3dprinting.css";
import Link from "next/link";

export default function PrintingService() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="printing-hero">
        <div className="overlay">
          <h1>3D Printing</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>›</span> <span>Service</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="printing-content">
        <div className="container">
          <h2>What Is 3D Printing?</h2>
          <p>
            3D printing is a revolutionary digital manufacturing technology 
            that builds physical objects layer by layer. Using advanced materials 
            such as plastics, resins, and metals, it transforms digital CAD 
            designs into real-world products with incredible precision.
          </p>

          <p>
            Whether it’s rapid prototyping, industrial components, or custom 
            product development, 3D printing allows businesses to innovate 
            faster while reducing material waste and production costs.
          </p>

          <div className="image-box">
            <img src="/images/printing-model.jpg" alt="3D Printing Model" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="printing-features">
        <div className="container">
          <h3>Our 3D Printing Capabilities</h3>

          <div className="feature-grid">
            <div className="feature-card">
              <h4>Rapid Prototyping</h4>
              <p>Quickly transform ideas into physical prototypes.</p>
            </div>

            <div className="feature-card">
              <h4>Industrial Manufacturing</h4>
              <p>High-quality parts for industrial applications.</p>
            </div>

            <div className="feature-card">
              <h4>Custom Product Design</h4>
              <p>Tailor-made 3D printed solutions for your business.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}