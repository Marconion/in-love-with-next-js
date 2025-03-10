import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "In Love With...",
  description: `Welcome to "In Love With..." official website!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="nav">
          <NavBar />
        </div>
        <main>{children}</main>
        <Footer className="footer" />
      </body>
    </html>
  );
}
