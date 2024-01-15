import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import Head from 'next/head'

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Amka Tsendjargal',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${roboto_condensed.className}`}>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body>
        {children}
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
