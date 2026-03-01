import Link from "next/link"; 
import React from "react";
import "./productdesign.css";

export default function Services() {
  return (
    <div className="service-container">

   
      
      {/* Page Title */}
      <div className="service-header">
        <h1>Our 3D Product Design Services</h1>
        <p>
          We create high-quality, realistic and market-ready 3D product models 
          for businesses, startups, and manufacturers.
        </p>
      </div>

      {/* 3D Product Design Section */}
      <section className="service-detail">
        
        <div className="service-image">
          <img 
            src="/image/product-design.png" 
            alt="3D Product Design"
          />
        </div>

        <div className="service-content">
          <h2>3D Product Design</h2>
          <p>
            Our 3D Product Design service transforms your ideas into visually 
            stunning and technically accurate 3D models. Whether you need 
            product visualization, prototyping, or marketing renders, 
            we deliver professional results.
          </p>

          <ul>
            <li>✔ Realistic 3D Modeling</li>
            <li>✔ Product Prototyping</li>
            <li>✔ High-Quality Rendering</li>
            <li>✔ 360° Product Views</li>
            <li>✔ Industrial & Consumer Products</li>
          </ul>

          <button className="service-btn">
            Get Free Consultation
          </button>
        </div>

      </section>
      {/* Industries We Serve */}
<section className="industries-section">
  <h2 className="industry-title">INDUSTRIES WE SERVE</h2>

  <div className="industry-grid">

    <div className="industry-card">
      <div className="industry-icon">
        <img src="/icons/electronics.png" alt="Electronics" />
      </div>
      <h3>Electronics</h3>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <img src="/icons/foundry.png" alt="Foundry" />
      </div>
      <h3>Foundry</h3>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <img src="/icons/gifting.png" alt="Gifting Solution" />
      </div>
      <h3>Gifting Solution</h3>
    </div>

    <div className="industry-card">
      <div className="industry-icon">
        <img src="/icons/machinery.png" alt="Machinery" />
      </div>
      <h3>Machinery</h3>
    </div>

  </div>
</section>

{/* PRODUCT BENEFITS SECTION */}
<section className="product-benefits">

  <div className="benefits-left">
    <h2>WITH OUR 3D PRODUCT DESIGN, YOU CAN...</h2>

    <div className="benefit-item">
      <div className="benefit-icon">N</div>
      <p>Find the best technologies and materials as per your requirement.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">N</div>
      <p>Quickly maximize opportunities for refinement and testing.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">N</div>
      <p>Optimize your outcomes with accurate 3D designs.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">N</div>
      <p>Enhance your product & transition seamlessly into manufacturing.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">N</div>
      <p>Simplify & accelerate your supply chains.</p>
    </div>
  </div>

  <div className="benefits-right">
    <img src="/image/product-large.jpg" alt="3D Product" />
  </div>

</section>

      {/* Additional Information */}
      <section className="service-features">
        <h3>Why Choose Our 3D Design?</h3>

        <div className="feature-grid">
          <div className="feature-box">
            <h4>Creative Concepts</h4>
            <p>Innovative designs tailored to your brand identity.</p>
          </div>

          <div className="feature-box">
            <h4>Advanced Software</h4>
            <p>We use industry-standard 3D tools for precision modeling.</p>
          </div>

          <div className="feature-box">
            <h4>Fast Delivery</h4>
            <p>Quick turnaround time without compromising quality.</p>
          </div>
        </div>
      </section>

    </div>
  );
}