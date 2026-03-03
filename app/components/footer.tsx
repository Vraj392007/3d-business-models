"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">

          {/* Logo */}
          <div className="footer-logo">
            <Image
              src="/logo1.png"
              alt="3D Business Models Logo"
              width={180}
              height={60}
            />
          </div>

          <h2 className="logo">3D Business Models</h2>

          <p>
            At 3D Business Models, we specialize in creating high-quality
            3D product designs, laser scanning solutions, product animations,
            and rapid prototyping services. We transform ideas into realistic
            3D experiences that help businesses grow.
          </p>

          <div className="social-icons">
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">X</a>
            <a href="#">Y</a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>
            123, Business Hub,<br />
            Near City Center,<br />
            Vadodara, Gujarat – 390007
          </p>

          <div className="qr-box">
            <img src="/footer.jpeg" alt="QR Code" />
            <p>Tap / Scan QR Code</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © 2026 3D Business Models | All Rights Reserved
      </div>

      {/* Scroll To Top Button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
}