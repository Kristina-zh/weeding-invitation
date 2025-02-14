import { Metadata } from "next";
import { Nunito, Poppins, WindSong, Great_Vibes } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "1000"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const windSong = WindSong({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-windsong",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://kristina-and-alan.com/us.jpg"></meta>
      </head>
      <body
        className={`${nunito.variable} ${poppins.variable} ${windSong.variable} ${greatVibes.variable} antialiased`}
        style={{
          fontFamily: `'Poppins', 'WindSong', 'Nunito', 'GreatVibes', sans-serif`,
        }}
      >
        {children}
      </body>
    </html >
  );
}
