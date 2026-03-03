'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './header.css'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <Link href="/" className="logo-link">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={60}
            height={60}
            className="logo-img"
          />
        </Link>
      </div>

      {/* MENU BUTTON */}
      <div
        className={`menu-btn ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAVIGATION */}
      <nav className={`nav ${menuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/services">Service</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>

    </header>
  )
}