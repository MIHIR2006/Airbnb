import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Airbnb",
  description: "Entire serviced apartment in Candolim, India · 3 guests · 1 bedroom · 1 bed · 1 bathroom",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
