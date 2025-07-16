"use client"

// import Link from 'next/link';
import Image from 'next/image';
  import { useTranslations } from 'next-intl'

export default function About_Us() {
  const t = useTranslations('About-Us')

  return (
    <div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown text-center">{t('about-desmar-title')}</h1>
      </div>
      <div className="section_desmar desmar_light_brown_bg">
        <div className='interesting_text_desmar text-center'>
          {t('interesting-text-largest-supplier')}<br/>
          <br/>
          {t('interesting-text-our-commitment')}
        </div>
      </div>
      <div className="section_desmar side_by_side_container_desmar">
        <p className="className=width-2/3">
          {t('main-well-established')}<br/>
          <br/>
          {t('main-our-commitment')}<br/>
          <br/>
          {t('main-our-specialty')}<br/>
          <br/>
          {t('main-choose-desmar')}
        </p>

        <div>
          <Image src="/DesmarLogo-02 flag.jpg" alt="Desmar Global Inc. Logo" width={1206} height={1526} className="width-1/3"/>
        </div>
      </div>
      <div className="relative w-full h-[700px] md:h-[500px] "> {/* Adjust height as needed */}
        <Image
          src="/baja-california-josue-michael2.jpg"
          alt="Baja California background"
          fill
          priority
          className="object-cover object-[center_40%] z-0"
        />

        <div className="relative z-10 w-full h-full flex items-center justify-center py-30">
          <div className="section_desmar bg-[#EEE2CA] px-4">
            <h2 className="subheading_desmar desmar_text_brown">
              {t('community-commitment-title')}
            </h2>
            <p>
              {t('community-commitment-close-work')}<br /><br />
              {t('community-commitment-ejidos')}
            </p>
          </div>
        </div>

        {/* Optional: Image credit */}
        {/* 
        <div className="absolute bottom-2 right-2 text-xs text-white z-10">
          Photo by <a className="underline" href="https://unsplash.com/@josuemichelphotography">Josue Michel</a> on <a className="underline" href="https://unsplash.com/photos/green-and-white-flowers-on-bicycle-DJabuBuUdQU">Unsplash</a>
        </div> 
        */}
      </div>
    </div>
  );
}