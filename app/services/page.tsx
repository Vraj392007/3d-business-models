import React from "react";

export default function Services() {
  return (
    <>
      <div className="services-container">
        <h1 className="main-title">Our 3D Services</h1>

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
        .services-container {
          min-height: 100vh;
          padding: 60px 20px;
          background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
          font-family: Arial, sans-serif;
        }

        .main-title {
          text-align: center;
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 60px;
          background: linear-gradient(to right, #3b82f6, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeDown 1s ease;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
        }

        .service-card {
          background: rgba(30, 41, 59, 0.8);
          padding: 30px;
          border-radius: 20px;
          color: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
          transition: all 0.4s ease;
          animation: fadeUp 1s ease;
        }

        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: #3b82f6;
          box-shadow: 0 15px 35px rgba(59,130,246,0.4);
        }

        .service-card h2 {
          margin-bottom: 20px;
          color: #60a5fa;
          font-size: 22px;
        }

        .service-card ul {
          list-style: none;
          padding: 0;
        }

        .service-card li {
          margin-bottom: 10px;
          color: #d1d5db;
          font-size: 15px;
        }

        /* Animations */

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */

        @media (max-width: 768px) {
          .main-title {
            font-size: 32px;
          }

          .service-card {
            padding: 25px;
          }
        }

      `}</style>
    </>
  );
}