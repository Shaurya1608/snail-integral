import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased w-full overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-sans w-full overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
