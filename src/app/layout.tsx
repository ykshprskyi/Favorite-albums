import type { Metadata } from "next";
import '../styles/main.scss';
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export const metadata: Metadata = {
  title: {
    absolute:"My favorite music albums | Yurii Kashperskyi",
    template:"%s | Yurii Kashperskyi", 
  },
  description: "This website about my favorite music albums",
  keywords:["albums","favorite","subscribe"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="black"/>
      <meta name="author" content="Yurii Kashperskyi" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
