import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata = {
  title: "Badr Benabdellah",
  description:
    "Portfolio de Badr Benabdellah, etudiant ingenieur en Logiciels et Systemes Intelligents, a la recherche d'un stage PFE en IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${syne.variable} antialiased leading-7`}>
        {children}
      </body>
    </html>
  );
}
