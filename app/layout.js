import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Badr Benabdellah",
  description:
    "Portfolio de Badr Benabdellah, futur ingenieur logiciel et systemes intelligents, disponible pour une alternance en developpement Full-Stack et IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${playfairDisplay.variable} antialiased leading-7`}>
        {children}
      </body>
    </html>
  );
}
