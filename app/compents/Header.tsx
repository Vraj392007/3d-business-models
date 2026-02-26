'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Service', path: '/service' },
    { name: 'Contact', path: '/Contact' },
  ]

  return (
    <header className="header">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo 2.png"
          alt="Logo"
          width={140}
          height={45}
          className="logo"
        />
      </Link>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>
        <ul className="nav">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`nav-link ${
                  pathname === link.path ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 60px;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(8px);
        }

        .logo {
          cursor: pointer;
          object-fit: contain;
        }

        /* Desktop Nav */
        .nav {
          display: flex;
          gap: 35px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          color: white;
          font-size: 17px;
          font-weight: 500;
          transition: 0.3s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: #00ffff;
          transition: 0.3s ease;
        }

        .nav-link:hover::after,
        .active::after {
          width: 100%;
        }

        .active {
          color: #00ffff;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: white;
          transition: 0.3s;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        /* Mobile */
        @media (max-width: 900px) {
          .hamburger {
            display: flex;
          }

          .nav-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #000;
            max-height: 0;
            overflow: hidden;
            transition: 0.4s ease;
          }

          .nav-wrapper.show {
            max-height: 500px;
            padding: 20px 0;
          }

          .nav {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .header {
            padding: 18px 25px;
          }
        }
      `}</style>
    </header>
  )
}