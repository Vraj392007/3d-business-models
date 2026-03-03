
import React from "react";

export default function Services() {
  return (
    <>
      <div className="services-container">

        {/* HEADER */}
        <div className="header-wrapper">
          <h1 className="main-title">
            <span className="brand-name">3D Business Models</span>
          </h1>
          <p className="subtitle">
            Professional 3D Solutions for Modern Businesses
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          <div className="service-card">
            <h2>3D Modeling</h2>
            <ul>
              <li>✔ Product Design</li>
              <li>✔ Architectural Models</li>
              <li>✔ Mechanical Parts</li>
              <li>✔ Prototypes</li>
              <li>✔ Custom 3D Designs</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>3D Printing</h2>
            <ul>
              <li>✔ FDM Printing</li>
              <li>✔ Resin Printing</li>
              <li>✔ PLA / ABS / PETG</li>
              <li>✔ Fast Delivery</li>
              <li>✔ High Precision Output</li>
            </ul>
          </div>

          <div className="service-card">
            <h2>Custom Printed Items</h2>
            <ul>
              <li>✔ Mini House Models</li>
              <li>✔ Car Models</li>
              <li>✔ Gift Items</li>
              <li>✔ Machine Parts</li>
              <li>✔ Toys & Decorative Items</li>
            </ul>
          </div>

        </div>
      </div>

      <style>{`

        :root {
          --primary: #2563eb;
          --secondary: #06b6d4;
          --dark-bg: #0f172a;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .services-container {
          min-height: 100vh;
          padding: clamp(60px, 8vw, 120px) 20px;
          background: linear-gradient(135deg, #0f172a, #111827);
          font-family: 'Segoe UI', sans-serif;
        }

        .header-wrapper {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 80px);
        }

        .main-title {
          font-size: clamp(32px, 6vw, 56px);
          font-weight: 800;
          margin: 0;
        }

        .brand-name {
          background: linear-gradient(270deg, #06b6d4, #2563eb, #3b82f6, #06b6d4);
          background-size: 600% 600%;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradientMove 6s ease infinite;
          text-shadow:
            0 0 15px rgba(37,99,235,0.5),
            0 0 30px rgba(6,182,212,0.3);
        }

        .subtitle {
          margin-top: 15px;
          font-size: clamp(14px, 2.5vw, 18px);
          color: #cbd5e1;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(20px, 4vw, 40px);
          max-width: 1200px;
          margin: auto;
        }

        .service-card {
          background: rgba(30, 41, 59, 0.9);
          backdrop-filter: blur(12px);
          padding: clamp(25px, 4vw, 40px);
          border-radius: 20px;
          color: white;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          transition: all 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border: 1px solid var(--primary);
          box-shadow: 0 25px 45px rgba(37,99,235,0.4);
        }

        .service-card h2 {
          margin-bottom: 20px;
          color: var(--secondary);
          font-size: clamp(18px, 3vw, 24px);
        }

        .service-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-card li {
          margin-bottom: 12px;
          color: #e2e8f0;
          font-size: clamp(14px, 2.5vw, 16px);
          line-height: 1.6;
        }

        /* Mobile Improvements */
        @media (max-width: 480px) {
          .service-card {
            border-radius: 15px;
          }
        }

      `}</style>
    </>
  );
}