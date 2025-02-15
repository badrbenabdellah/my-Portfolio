import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],  
  weight:["400"]
});

export const metadata = {
  title: "Badr Benabdellah",
  description: "Badr Benabdellah,Future Engineer in Software and Intelligent Systems,Passionate about computer science and innovative technologies.I am a curious and passionate developer, specializing in web development and artificial intelligence technologies. With a strong foundation in web development (Frontend and Backend), I master modern tools and frameworks to create performant and intuitive applications. At the same time, I am dedicated to exploring the fields of AI, including Machine Learning, Deep Learning, LLMs (Large Language Models), and Natural Language Processing (NLP).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 oveflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
