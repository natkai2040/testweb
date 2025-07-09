'use client'
// import { useTranslations } from 'next-intl'
import {useTranslation, LinkWithLocale} from "next-export-i18n";

import Image from "next/image";
import { useState } from "react";
// import Link from "next/link";
import HeroSlideshow from '@/components/HeroSlideshow';
import PopupCard from "@/components/PopupCard";


export default function MainPage() {
  const [showPopup, setShowPopup] = useState(true);
  // const t = useTranslations('Homepage')
  const { t } = useTranslation();
  
  return (
    <div className="">
      <div className={`fixed bottom-4 max-w-screen-lg right-5 z-[9999] ${showPopup ? "block" : "hidden"}`}>
        <PopupCard onClose={() => setShowPopup(false)} />
      </div>

      <HeroSlideshow>
        <div className="absolute z-10 inset-0 flex flex-col justify-center items-start p-8">
          <h1 className="heading_desmar desmar_text_white text-shadow-sm text-left mb-8 desmar_text_shadow">
            {t('Homepage.hero-title')}
          </h1>

          <h2 className="ml-0 italic text-xl desmar_text_white text-shadow-sm font-bold text-left mb-8 desmar_text_shadow">
            {t('Homepage.hero-subtitle')}
          </h2>
        </div>
      </HeroSlideshow>

      <div className="section_desmar">
        <h2 className="subheading_desmar desmar_text_brown">{t('Homepage.who-we-are-title')}</h2>
        <p>
          {t('Homepage.who-we-are-p1')}
          {/* <span className='font-bold'>Desmar Global Incorporated</span> is a well-established wholesale distributor of Yucca Schidigera, operating for over 25 years. Throughout these two decades, we have cultivated strong relationships with a diverse range of associates, cultivators, and communities in Mexico. */}<br/>
          <br/>
          {t('Homepage.who-we-are-p2')}
        </p>
        <LinkWithLocale href="/about-us">{t('Homepage.about-us-link')}</LinkWithLocale><br/>
      </div>
      
      
      <div className="section_desmar desmar_light_brown_bg desmar_text_brown">
        <h2 className="subheading_desmar desmar_text_brown">{t('Homepage.our-products-title')}</h2>
        <div className="interesting_text_desmar">
          ▸ {t('Homepage.our-products-fiber')}<br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;▸ {t('Homepage.our-products-extract')}<br/>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▸ {t('Homepage.our-products-orders')}<br/>
        </div>
        <div className="side_by_side_container_desmar">
          <LinkWithLocale href="/our-products" className="button_link bg-[#749772]">▷ {t('Homepage.more-product-info-link')}</LinkWithLocale>
          <LinkWithLocale href="/contact-us" className="button_link bg-[#9D6F2A]">▷ {t('Homepage.order-from-us-link')}</LinkWithLocale>
        </div>
      </div>
      
      <div className="section_desmar side_by_side_container_desmar">

        <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
          <div className="fuzzy_border_square_image"> {/** TODO: temprary fix, remove hidden */}
            <Image src="/paddy-field-chen-yanhui.jpg" alt="Rice Plants on a Farm" width={3761} height={2821} className="h-full w-full object-cover" />
            <LinkWithLocale href="/about-yucca-schidigera" className="button_link absolute bg-[#609D5C] left-1/2 bottom-4 -translate-x-1/2">▷ {t('Homepage.agriculture-link')}</LinkWithLocale>
          </div>
          <div className="tiny_italics">
            {/* Photo by <a href="https://unsplash.com/@chenyanhui?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">chen yanhui</a> on <a href="https://unsplash.com/photos/a-group-of-green-plants-growing-in-a-body-of-water-RC90yHCsu7E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
          </div>
        </div>
        
        <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
          <div className="fuzzy_border_square_image">
            <Image src="/pigs-marek-piwnicki.jpg" alt="White Pig on Brown Soil" width={3967} height={2635} className="h-full w-full object-cover" />
            <LinkWithLocale href="/about-yucca-schidigera" className="button_link absolute bg-[#AE9570] left-1/2 bottom-4 -translate-x-1/2">▷ {t('Homepage.livestock-link')}</LinkWithLocale>
          </div>
          <div className="tiny_italics">
            {/* Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Marek Piwnicki</a> on <a href="https://unsplash.com/photos/white-pig-on-brown-soil-PUVVsYJPh78?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
          </div>
        </div>
        
        <div className="md:w-1/3 w-7/8 flex flex-col items-center mx-[2%] relative overflow-hidden">
          <div className="fuzzy_border_square_image">
            <Image src="/clear-bottle-nataliya-melnychuk.jpg" alt="Clear Makeup Bottle" width={4000} height={6000} className="h-full w-full object-cover " />
            <LinkWithLocale href="/about-yucca-schidigera" className="button_link absolute bg-[#C18FC2] left-1/2 bottom-4 -translate-x-1/2">▷ {t('Homepage.cosmetics-link')}</LinkWithLocale>
          </div>
          <div className="tiny_italics">
            {/* Photo by <a href="https://unsplash.com/@natinati?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Nataliya Melnychuk</a> on <a href="https://unsplash.com/photos/clear-glass-bottle-on-white-textile-tnWjbdPmk1M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
          </div>
        </div>

      </div>

      <div className="section_desmar center_vertical_container_desmar desmar_light_brown_bg">
        <Image src="/yucca3.png" alt="Yucca Schidigera" width={1060} height={533} className="w-3/4 mx-auto my-5" />
        <LinkWithLocale href="/about-yucca-schidigera" className="button_link bg-[#749772]">▷ {t('Homepage.about-yucca-link')}</LinkWithLocale>
      </div>

      
      {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
