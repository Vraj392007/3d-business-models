'use client'
import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="services-page">

      {/* Hero Section */}
      <div className="hero">
        <h1>Our 3D Services</h1>
        <p>Professional 3D modeling and product animation solutions.</p>
      </div>

      {/* Services Grid */}
      <div className="services-container">
        <div className="service-card">
          <h2>3D Modeling</h2>
          <p>High quality 3D models for business and marketing.</p>
        </div>

        <div className="service-card">
          <h2>3D Animation</h2>
          <p>Smooth and realistic 3D product animations.</p>
        </div>

        <div className="service-card">
          <h2>Interior Rendering</h2>
          <p>Professional 3D interior visualization services.</p>
        </div>
      </div>

      {/* 3D Product Animation Section */}
      <div className="product-animation-section">
        <h1>3D Product Animation</h1>

        <div className="product-container">

          <div className="product-card">
            <img src="/images/product1.jpg" alt="3D House Model" />
            <h2>3D House Model</h2>
            <button>View Demo</button>
          </div>

          <div className="product-card">
            <img src="/images/product2.jpg" alt="3D Car Model" />
            <h2>3D Car Model</h2>
            <button>View Demo</button>
          </div>

          <div className="product-card">
            <img src="/images/product3.jpg" alt="3D Interior Model" />
            <h2>3D Interior Model</h2>
            <button>View Demo</button>
          </div>

        </div>
      </div>

    </div>
  );
}