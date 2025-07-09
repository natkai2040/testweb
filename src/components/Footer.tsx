"use client"
import Image from "next/image"
import Link from "next/link";
import {useTranslation, LinkWithLocale} from "next-export-i18n";


export default function Footer() {
const { t } = useTranslation();
return (
    <footer className="w-full text-center desmar_text_light text-sm mt-8 bg-[#373816]">
    <div className="w-full py-8 bg-[#3c472f] side_by_side_container_desmar justify-apart">
        <div className="w-40 shrink-0 p-4">
            <Image
            src='/New Desmar-1-transparent.png'
            width={611}
            height={195}
            alt="Desmar Logo"
            />  
            <p>
                <br/>
                <LinkWithLocale  href="/about-us">{t('Footer.about-us')}</LinkWithLocale><br/>
                <br/>
                <LinkWithLocale href="/contact-us">{t('Footer.contact-us')}</LinkWithLocale><br/>
                <br/>
                <LinkWithLocale href="/contact-us">{t('Footer.get-a-quote')}</LinkWithLocale><br/>
            </p>
        </div> 
        <div>
            <p className='text-left'>
                DESMAR GLOBAL INCORPORATED<br/>
                <br/>
                <span className="font-bold">{t('Footer.email')}</span> info@desmarglobal.com<br/>
                <br/>
                <span className="font-bold">{t('Footer.phone-number')}</span> (909) 770 9655<br/>
                <br/>
                Desmar Global Inc. Headquarters<br/>
                450 S. Lone Hill Ave. Suite A<br/>
                San Dimas, CA 91773
            </p>
        </div>
        <div>
            <p className='text-left'>
                {t('Footer.about-yucca-title')}<br/>
                <br/>
                <LinkWithLocale  href="/about-yucca-schidigera">{t('Footer.yucca-for-agriculture-link')}</LinkWithLocale><br/>
                <br/>
                <LinkWithLocale href="/about-yucca-schidigera" >{t('Footer.yucca-for-livestock-link')}</LinkWithLocale><br/>
                <br/>
                <LinkWithLocale href="/about-yucca-schidigera" >{t('Footer.yucca-for-cosmetics-link')}</LinkWithLocale><br/>
            </p>
        </div>
        <div>
            <p className='text-left'>
                {t('Footer.our-products-title')}<br/>
                <br/>
                <LinkWithLocale  href="/our-products">{t('Footer.yucca-fiber-link')}</LinkWithLocale><br/>
                <br/>
                <LinkWithLocale href="/our-products">{t('Footer.yucca-extract-link')}</LinkWithLocale><br/>
                <br/>
            </p>
        </div>
        
        
      </div>
      DESMAR GLOBAL INC. © {new Date().getFullYear()} 
    </footer>
  );
}