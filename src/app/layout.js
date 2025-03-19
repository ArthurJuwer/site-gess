import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Site do GESS",
  description: "Confira o site do Grêmio Estudantil Senac São Leopoldo!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter} antialiased`}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
