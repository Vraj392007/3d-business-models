'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // ✅ Navigation Links Array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'services', path: '/services' },
    { name: 'Contact', path: '/Contact' },
  ]

  return (
    <header className="header">
      
      {/* Logo */}
      <Link href="/" className="logoWrap">
        <Image
          src="/logo 2.png"
          alt="Logo"
          width={150}
          height={45}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="desktopNav">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`navLink ${
              pathname === link.path ? 'active' : ''
            }`}
          >
            {link.name}
            {pathname === link.path && (
              <motion.span
                layoutId="underline"
                className="underline"
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobileMenu"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="mobileLink"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: linear-gradient(
            135deg,
            rgba(18, 18, 200, 0.9),
            rgba(241, 91, 16, 0.9),
            rgba(39, 198, 47, 0.9)
          );
          backdrop-filter: blur(14px);
        }

        .desktopNav {
          display: flex;
          gap: 40px;
        }

        .navLink {
          position: relative;
          text-decoration: none;
          color: white;
          font-size: 17px;
          font-weight: 500;
        }

        .navLink:hover {
          color: #00f5ff;
        }

        .underline {
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #00f5ff, #ff00ff);
          border-radius: 10px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .hamburger span {
          width: 26px;
          height: 3px;
          background: white;
        }

        .mobileMenu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          padding: 30px 0;
        }

        .mobileLink {
          text-decoration: none;
          color: white;
          font-size: 18px;
        }

        @media (max-width: 900px) {
          .desktopNav {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .header {
            padding: 20px 25px;
          }
        }
      `}</style>
    </header>
  )
}