"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            and rapid prototyping services.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div> {/* ✅ CLOSED footer-about */}

        {/* Middle Section */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
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
            <Image
              src="/footer.jpeg"
              alt="QR Code"
              width={150}
              height={150}
            />
            <p>Tap / Scan QR Code</p>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} 3D Business Models | All Rights Reserved <br />
        Made with ❤️ by{" "}
        <a
          href="https://www.techstrota.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          3D Business Models
        </a>
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