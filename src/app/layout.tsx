import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// 👇 This handles favicon + SEO metadata
export const metadata: Metadata = {
  title: "My Website",
  description: "Awesome website",
  icons: {
    icon: "/favicon.png", // public/favicon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
