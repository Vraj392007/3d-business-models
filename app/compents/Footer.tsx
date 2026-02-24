'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Company Info */}
        <div style={styles.section}>
          <h2 style={styles.logo}>3D Business Models</h2>
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
            <li><Link href="/gallery" style={styles.link}>Gallery</Link></li>
            <li><Link href="/about" style={styles.link}>About Us</Link></li>
            <li><Link href="/services" style={styles.link}>Services</Link></li>
            <li><Link href="/contact" style={styles.link}>Contact</Link></li>
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

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} 3D Business Models. All Rights Reserved.
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    paddingTop: '50px',
    marginTop: '60px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
    padding: '0 40px 40px',
  },
  section: {},
  logo: {
    fontSize: '22px',
    marginBottom: '15px',
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
  },
  bottom: {
    textAlign: 'center',
    padding: '15px',
    borderTop: '1px solid #333',
    fontSize: '14px',
    color: '#aaa',
  },
}