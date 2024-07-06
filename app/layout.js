import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "test",
  description: "test website",
};

export default function RootLayout({ children, req }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 
