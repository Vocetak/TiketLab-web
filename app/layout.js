import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "TiketLab",
  description: "Statistický portál pro sázkaře",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
