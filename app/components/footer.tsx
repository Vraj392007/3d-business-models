'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    paddingTop: '60px',
    marginTop: '80px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
    padding: '0 60px 50px',
  },
  section: {},
  logoImage: {
    marginBottom: '20px',
    objectFit: 'contain',
  },
  heading: {
    marginBottom: '15px',
    fontSize: '18px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: '0.3s',
  },
  text: {
    color: '#ccc',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  bottom: {
    textAlign: 'center',
    padding: '18px',
    borderTop: '1px solid #333',
    fontSize: '14px',
    color: '#aaa',
  },
  designerLink: {
    color: '#00f5ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Logo + About */}
        <div style={styles.section}>
          <Image
            src="/logo 2.png"
            alt="3D Business Models Logo"
            width={180}
            height={60}
            style={styles.logoImage}
          />
          <p style={styles.text}>
            We create high-quality 3D business models, product designs,
            and architectural visualizations for modern companies.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link href="/" style={styles.link}>Home</Link></li>
            <li><Link href="/About" style={styles.link}>About</Link></li>
            <li><Link href="/gallery" style={styles.link}>Gallery</Link></li>
            <li><Link href="/service" style={styles.link}>Services</Link></li>
            <li><Link href="/Contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Our Services</h3>
          <ul style={styles.list}>
            <li>3D Product Modeling</li>
            <li>Architectural Rendering</li>
            <li>Business Prototypes</li>
            <li>3D Animation</li>
            <li>Custom 3D Designs</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Info</h3>
          <p style={styles.text}>📍 Ahmedabad, India</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>📧 info@3dbusinessmodels.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} 3D Business Models. All Rights Reserved.
        <br />
        Designed by{" "}
                  <a
                     href="https://techstrota.com"
                     target="_blank"
                    rel="noopener noreferrer"
                style={styles.designerLink}
                    >
                  Techstrota
               </a>
      </div>
    </footer>
  )
}