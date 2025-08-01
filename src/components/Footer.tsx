"use client"
import Image from "next/image"
import {Link} from '@/i18n/navigation';
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')

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
            <p className='desmar_dark_bg'>
                <br/>
                <Link href="/about-us">{t('about-us')}</Link><br/>
                <br/>
                <Link href="/contact-us">{t('contact-us')}</Link><br/>
                <br/>
                <Link href="/contact-us">{t('get-a-quote')}</Link><br/>
            </p>
        </div> 
        <div>
            <p className='text-left desmar_dark_bg'>
                DESMAR GLOBAL INCORPORATED<br/>
                <br/>
                <span className="font-bold">{t('email')}</span> info@desmarglobal.com<br/>
                <br/>
                <span className="font-bold">{t('phone-number')}</span> (909) 770 9655<br/>
                <br/>
                Desmar Global Inc. Headquarters<br/>
                450 S. Lone Hill Ave. Suite A<br/>
                San Dimas, CA 91773
            </p>
        </div>
        <div>
            <p className='text-left desmar_dark_bg'>
                {t('about-yucca-title')}<br/>
                <br/>
                <Link href="/about-yucca-schidigera#agriculture">{t('yucca-for-agriculture-link')}</Link><br/>
                <br/>
                <Link href="/about-yucca-schidigera#livestock" >{t('yucca-for-livestock-link')}</Link><br/>
                <br/>
                <Link href="/about-yucca-schidigera#cosmetics" >{t('yucca-for-cosmetics-link')}</Link><br/>
            </p>
        </div>
        <div>
            <p className='text-left desmar_dark_bg'>
                {t('our-products-title')}<br/>
                <br/>
                <Link href="/our-products#yucca-fiber">{t('yucca-fiber-link')}</Link><br/>
                <br/>
                <Link href="/our-products#yucca-extract">{t('yucca-extract-link')}</Link><br/>
                <br/>
            </p>
        </div>        
      </div>
      <div className="p-2 text-center">
        <div className="desmar_text_light">
            DESMAR GLOBAL INC. © {new Date().getFullYear()} 
        </div>
        <div className="text-xs text-[#cdc5b7]">
            **{t('disclaimer')}**
        </div>
    </div>
    </footer>
  );
}