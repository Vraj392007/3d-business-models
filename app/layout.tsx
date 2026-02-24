import Header from './compents/Header'
import Footer from './compents/Footer'
import './globals.css'

export const metadata = {
  title: '3D Business Models',
  description: 'Professional 3D Business Model Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}