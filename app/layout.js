import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Professora Cleidiane",
  description: "Aprenda inglês com paciência e dedicação, em aulas personalizadas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className="bg-white"
      >
        {children}
      </body>
    </html>
  );
};

