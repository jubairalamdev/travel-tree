import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ToastContainer } from "react-toastify"
import { Footer, Navbar } from "@/components"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Travel Tree - Discover the Most Engaging Places",
    template: "%s | Travel Tree",
  },
  description: "Discover the most engaging places. Less planning, 50,000 trips ready for you. Book your next adventure today.",
  keywords: ["travel", "tours", "destinations", "adventure", "vacation", "holidays", "travel agency"],
  authors: [{ name: "Travel Tree" }],
  creator: "Travel Tree",
  publisher: "Travel Tree",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travel-tree.com",
    title: "Travel Tree - Discover the Most Engaging Places",
    description: "Discover the most engaging places. Less planning, 50,000 trips ready for you.",
    siteName: "Travel Tree",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Tree - Discover the Most Engaging Places",
    description: "Discover the most engaging places. Less planning, 50,000 trips ready for you.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://travel-tree.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon@2x.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      <ToastContainer 
        autoClose={3000}
      />
      </body>
    </html>
  )
}
