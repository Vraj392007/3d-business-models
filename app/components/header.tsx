'use client'

import Link from 'next/link'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      
      <div className="logo">
        <Link href="/">3D Business Models</Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>

          <li className="dropdown">
            <span className="dropbtn">Service +</span>

            <div className="dropdown-content">
              <Link href="#">3D Product Design</Link>
              <Link href="#">3D Printing</Link>
              <Link href="#">3D Animation</Link>
              <Link href="#">3D Laser Scanning</Link>
              <Link href="#">Rapid Prototyping</Link>
              <Link href="#">Vacuum Casting</Link>
              <Link href="#">Mass Manufacturing</Link>
            </div>
          </li>

          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}