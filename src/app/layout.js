import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";

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
        <div style={{ position: "sticky", top: 0, left: 0, zIndex: 10 }}>
          <NavBar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
