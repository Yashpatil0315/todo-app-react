

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=close" />

      <body>
        {children}
      </body>
    </html>
  );
}
