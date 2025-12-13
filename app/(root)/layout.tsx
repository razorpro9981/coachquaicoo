import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "../components/Navbar";
import EnhancedFooter from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Dr. Patricia Barnett-Quaicoo | Training, Coaching & Consultancy",
  description: "Empowering leaders, parents and professionals to gain clarity, build confidence and achieve meaningful, sustainable growth.",
  keywords: "leadership coaching, professional development, business training, consultancy",
  openGraph: {
    title: "Dr. Patricia Barnett-Quaicoo",
    description: "Expert training, coaching and consultancy services",
    // images: ["/og-image.jpg"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased `}
      >
        <Navbar />
        <main className="pt-15">
          {children}
        </main>
        <EnhancedFooter />
      </body>
    </html>
  );
}
