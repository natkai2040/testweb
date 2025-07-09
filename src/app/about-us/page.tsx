"use client"

// import Link from 'next/link';
import Image from 'next/image';
import {useTranslation, LinkWithLocale} from "next-export-i18n";

export default function About_Us() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown text-center">{t('About-Us.about-desmar-title')}</h1>
      </div>
      <div className="section_desmar desmar_light_brown_bg">
        <div className='interesting_text_desmar text-center'>
          {t('About-Us.interesting-text-largest-supplier')}<br/>
          <br/>
          {t('About-Us.interesting-text-our-commitment')}
        </div>
      </div>
      <div className="section_desmar side_by_side_container_desmar">
        <p className="className=width-2/3">
          {t('About-Us.main-well-established')}<br/>
          <br/>
          {t('About-Us.main-our-commitment')}<br/>
          <br/>
          {t('About-Us.main-our-specialty')}<br/>
          <br/>
          {t('About-Us.main-choose-desmar')}
        </p>

        <div>
          <Image src="/DesmarLogo-02 flag.jpg" alt="Desmar Global Inc. Logo" width={1206} height={1526} className="width-1/3"/>
        </div>
      </div>
      <div className="w-full bg-center bg-cover py-30"
        style={{
          backgroundImage: "url('/baja-california-josue-michael.jpg')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="section_desmar bg-[#EEE2CA]">
          <h2 className="subheading_desmar desmar_text_brown">{t('About-Us.community-commitment-title')}</h2>
          <p>
            {t('About-Us.community-commitment-close-work')}<br/>
            <br/>
           {t('About-Us.community-commitment-ejidos')}
          </p>
        </div>

        {/* <div className="tiny_italics">
          Photo by <a href="https://unsplash.com/@josuemichelphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Josue Michel</a> on <a href="https://unsplash.com/photos/green-and-white-flowers-on-bicycle-DJabuBuUdQU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div> */}
      </div>
    </div>
  );
}