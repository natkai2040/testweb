import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter,  Francois_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
// import { NextIntlClientProvider } from 'next-intl'

type Props = { // declare props for translation
  children: ReactNode
  params: { locale: string }
}

//function to get the translations
// async function getMessages(locale: string) {
//   try {
//     return (await import(`../../messages/${locale}.json`)).default
//   } catch (error) {
//     notFound()
//   }
// }

// //function to generate the routes for all the locales
// export async function generateStaticParams() {
//   return ['en', 'es', 'zh-Hans', 'zh-Hant'].map((locale) => ({ locale }))
// }



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const francoisOne = Francois_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-francois-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desmar Global Incorporated",
  description: "The Number One Distributor of Yucca Schidigera",
  icons: {
    icon:'favicon.ico'
  }
};

export default async function RootLayout({
  children
}: Props) {  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${francoisOne.variable} antialiased`}
      >
        {/* <NextIntlClientProvider locale={locale} messages={messages}> */}
        <Navbar/>
          <div className="bg-white shadow-2xl">
          {children}
          </div>
        <Footer/>
        {/* </NextInt/lClientProvider > */}

      </body>
    </html>
  );
}
