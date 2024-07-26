import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Amina Sagheer Portfolio | %s | CodeBucks",
    default:
      "Amina Sagheer Portfolio - Created with Next.js, Three.js, and Tailwind CSS",
  },
  description:
    "A unique creative portfolio designed by Amina Sagheer, showcasing expertise in modern web technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of cutting-edge web development.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
