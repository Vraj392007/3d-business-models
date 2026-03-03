'use client'
import React from 'react'

export default function Footer() {
  const styles: { [key: string]: React.CSSProperties } = {
    bottom: {
      textAlign: 'center',
      padding: '18px',
      borderTop: '1px solid #333',
      fontSize: '14px',
      color: '#aaa',
      backgroundColor: '#111',
      marginTop: '80px'
    },
    designerLink: {
      color: '#00f5ff',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginLeft: '5px',
    },
  }

  return (
    <div style={styles.bottom}>
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
  )
}