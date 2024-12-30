import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/shared/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quick Quote - Create, Track, Send Quotes in Minutes",
  description: "Simplifying Service Quotation Management",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Quick Quote - Create, Track, Send Quotes in Minutes",
    description: "Simplify your service quotation management. Create, track, and send quotes with ease.",
    url: "https://quickquote-taupe.vercel.app/",
    images: [
      {
        url: "https://quickquote-taupe.vercel.app/og-image.png", // Local image
        width: 1200,
        height: 630,
        alt: "Quick Quote Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Quote - Create, Track, Send Quotes in Minutes",
    description: "Simplify your service quotation management. Create, track, and send quotes with ease.",
    images: ["https://quickquote-taupe.vercel.app/og-image.png"], // Local image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen w-full scroll-smooth bg-white`}
        >
          {/* Header */}
          <Header />

          <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-clip scroll-smooth md:overflow-y-visible">
            <main className="isolate flex flex-col gap-4">
              {children}
              <Toaster position='bottom-right'/>
           </main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
