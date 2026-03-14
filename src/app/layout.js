import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Nigeria News Hub",
  description: "Real-time aggregated news from top Nigerian newspapers including Vanguard, Punch, The Nation, and Premium Times.",
  manifest: "/manifest.json",
  themeColor: "#0f172a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="container main-content" style={{ flexGrow: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
