import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webdevshubhanshu.netlify.app"),
  title: {
    default: "Shubhanshu Saadhiyaan | Full Stack MERN Developer",
    template: "%s | Shubhanshu Saadhiyaan" // what is meaing of this
  },
  description: "Portfolio of Shubhanshu Saadhiyaan – Full Stack Developer specializing in MERN stack, Next.js, TypeScript, Tailwind CSS, and PWAs.",
   keywords: [
    "Shubhanshu",
    "Shubhanshu Saadhiyaan",
    "Best Web Developer in India",
    "Best Website Developer in Delhi",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Full Stack Developer Noida",
    "Full Stack Developer Gurgaon",
    "Full Stack Developer Delhi NCR",
    "PWA Developer",
    "Freelance Web Developer",
    "Webdevshubhanshu Projects"
  ],
  authors: [{ name: "Shubhanshu Saadhiyaan", url: "https://webdevshubhanshu.netlify.app" }],
  creator: "Shubhanshu Saadhiyaan",
  openGraph: {
    title: "Shubhanshu Saadhiyaan | Full Stack MERN Developer",
    description: "Experienced Full Stack Developer specializing in MERN, Next.js, TypeScript, Tailwind CSS, and PWAs.", //Building scalable, high-performance apps.
    url: "https://webdevshubhanshu.netlify.app",
    siteName: "Shubhanshu Saadhiyaan Portfolio",
    images: [
      {
        url: "/shubhanshu.jpg",
        width: 800,
        height: 800,
        alt: "Shubhanshu Saadhiyaan - Full Stack Developer",
      },
      {
        url: "/shubhanshu-2.jpeg",
        width: 783,
        height: 1280,
        alt: "Shubhanshu - MERN Stack Developer",
      },
      {
        url: "/shubhanshu-3.jpeg",
        width: 1080,
        height: 1084,
        alt: "Shubhanshu Saadhiyaan - Freelance Web Developer",
      },
            {
        url: "/shubhanshu-4.jpg",
        width: 786,
        height: 1280,
        alt: "Shubhanshu - MERN Stack Developer",
      },
      {
        url: "/shubhanshu-5.jpg",
        width: 1080,
        height: 1078,
        alt: "Shubhanshu Saadhiyaan - Freelance Web Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhanshu Saadhiyaan | Full Stack Developer",
    description: "Portfolio of Full Stack Web Developer specializing in MERN, Next.js, and PWAs.",
    creator: "@saadhiyaaan",
    images: [
      "/shubhanshu.jpg",
      "/shubhanshu-2.jpeg",
      "/shubhanshu-3.jpeg",
      "/shubhanshu-4.jpeg",
      "/shubhanshu-5.jpeg"
    ],  
      
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         {/* ✅ JSON-LD: Person Schema (site-wide, about you) */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubhanshu Saadhiyaan",
              url: "https://webdevshubhanshu.netlify.app",
              image: "https://webdevshubhanshu.netlify.app/shubhanshu.jpg",
              sameAs: [
                "https://github.com/CodeshShubh",
                "https://www.linkedin.com/in/shubhanshu-saadhiyaaan/",
                "https://x.com/saadhiyaaan",
                "https://www.instagram.com/shubhanshusaadhiyaan",
              ],
              jobTitle: "Full Stack Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Open for opportunities",
              },
              knowsAbout: [
                "MERN Stack",
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "Progressive Web Apps",
                "Redux Toolkit",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
