import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grêmio Estudantil Senac São Leopoldo",
  description: "Confira o site do Grêmio Estudantil Senac São Leopoldo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased xl:max-w-5xl xl:mx-auto xl:px-4`}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
