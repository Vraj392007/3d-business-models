'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header style={styles.header}>
      <div style={styles.logo}>3D Business Models</div>

      <nav>
        <ul style={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                style={{
                  ...styles.link,
                  ...(pathname === link.path ? styles.active : {})
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#111',
    color: '#fff',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    gap: '25px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    transition: '0.3s',
  },
  active: {
    borderBottom: '2px solid #00ffff',
  },
}