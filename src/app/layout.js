import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Altizou — Développeur Web/Mobile",
  description: "Portfolio de développeur — Java, Next.js, React, MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${mono.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
