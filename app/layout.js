import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Snail Integral | Brand Consulting and Corporate Communication Agency India",
  description: "Snail Integral is a multi-sector brand consulting and corporate communication agency in India. We serve agriculture, corporate, FMCG, manufacturing, and government sectors with strategy, digital marketing, PR, and creative solutions.",
  keywords: [
    "brand consulting agency India",
    "corporate communication agency",
    "multi-sector brand strategy",
    "agriculture brand consulting",
    "business communication services India"
  ],
  authors: [{ name: "Snail Integral" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Snail Integral | Brand Consulting and Corporate Communication Agency India",
    description: "Snail Integral is a multi-sector brand consulting and corporate communication agency in India. We serve agriculture, corporate, FMCG, manufacturing, and government sectors with strategy, digital marketing, PR, and creative solutions.",
    url: "https://snailintegral.com",
    siteName: "Snail Integral",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snail Integral | Brand Consulting and Corporate Communication Agency India",
    description: "Multi-sector brand consulting and corporate communication agency in India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
