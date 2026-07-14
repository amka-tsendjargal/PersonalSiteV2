import './globals.css'

export const metadata = {
  title: 'Amka Tsendjargal',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
