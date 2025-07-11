"use client"
import Link from 'next/link';
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';
import HeroProductSlideshow from '@/components/HeroProductSlideshow'
import {useTranslation, LinkWithLocale} from "next-export-i18n";


export default function Our_Products() {
  const { t } = useTranslation();
  return (
    <div>
      {/* <div className="relative w-full h-[40vh] overflow-hidden">
        <Image
          src="/hero-images/yucca-hero-logs-4.JPG"
          alt="Yucca Schidigera Hero"
          fill
          className="object-cover hero-zoom"
          style={{ objectPosition: "center 20%" }}
          priority
        />
        <div className="section_desmar absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="heading_desmar desmar_text_white desmar_text_shadow text-center">
            Yucca Schidigera Products
          </h1>
          <div className='interesting_text_desmar_white desmar_text_shadow text-center'>
            Leading suppliers of Yucca Schidigera in extracts and fibers, giving you quality in your product.
          </div>
        </div>
      </div> */}
      <div className="w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/hero-images/yucca-hero-logs-4.JPG')",
          backgroundPosition: "center 20%"
        }}
      >
        <div className="section_desmar">
          <h1 className="heading_desmar desmar_text_white desmar_text_shadow text-center">{t('Our-Products.yucca-schidigera-products-title')}</h1>
          <div className='interesting_text_desmar_white desmar_text_shadow text-center'>
            {t('Our-Products.interesting-text-leading-suppliers')}
          </div>
        </div>
      </div>

      <div className="section_desmar desmar_light_brown_bg">
        {t('Our-Products.desmar-description-p1')}
        <br/>
        <br/>
        {t('Our-Products.desmar-description-p2')}
      </div>

      <div className="w-full bg-center bg-cover"
        style={{
          backgroundImage: "url('/sunray_through_joshua_tree_explore_with_josh.jpg')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="section_desmar">
          <h2 className="desmar_text_white subheading_desmar desmar_text_shadow">{t('Our-Products.splash-premium-yucca')}</h2>
          <h2 className="desmar_text_white subheading_desmar desmar_text_shadow ml-12">{t('Our-Products.splash-pure-power')}</h2>
        </div>

        {/* <div className="tiny_italics">
          Photo by <a href="https://unsplash.com/@explorewithjoshua?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Explore with Joshua</a> on <a href="https://unsplash.com/photos/brown-leafless-tree-on-brown-field-during-daytime-mErSbLOqSJk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div> */}
      </div>

      <ProductCarousel/>
      
      <div className="section_desmar desmar_light_brown_bg">
        <h2 className="subheading_desmar desmar_text_brown text-center" id="yucca-extract">{t('Our-Products.concentrate-extract-title')}</h2>
        <div className="interesting_text_desmar">▸ {t('Our-Products.concentrate-extract-brix-levels')}</div>
       
        <div className="side_by_side_container_desmar">
          <div className="w-1/2">
            {t('Our-Products.concentrate-extract-p1')}
            <br/>
            <br/>
            {t('Our-Products.concentrate-extract-p2')}
            <br/>
            <LinkWithLocale href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ {t('Our-Products.concentrate-extract-inquire-link')}</LinkWithLocale>
          </div>
          <div className="w-3/8">
            <Image
              src="/palette_jack.jpg"
              alt="Yucca Schidigera Extract Container"
              width={4032}
              height={3025}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/8">
            <Image
              src="/product-images/nontransparent-bottle.jpeg"
              alt="Yucca Schidigera Extract Sample"
              width={1042}
              height={2450}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="section_desmar desmar_light_brown_bg  mt-2">
        <h2 className="subheading_desmar desmar_text_brown text-center" id="yucca-fiber">{t('Our-Products.fiber-powder-title')}</h2>
        <div className="interesting_text_desmar">▸ {t('Our-Products.fiber-powder-tds-levels')}</div>
        <div className="side_by_side_container_desmar">
          <div className="w-full md:w-1/2">
            {t('Our-Products.fiber-powder-p1')}
            <br/>
            <br/>
            {t('Our-Products.fiber-powder-p2')}
            <br/>
            <LinkWithLocale href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ {t('Our-Products.fiber-powder-inquire-link')}</LinkWithLocale>
          </div>
          <div className="w-full md:w-3/8 ">
            <Image
              src="/supersacks-in-warehouse.jpg"
              alt="Yucca Schidigera Supersacks in a Warehouse"
              width={4032}
              height={3024}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* <div className="w-full md:w-1/8">
            <Image
              src="/powder-pile.jpeg"
              alt="Yucca Schidigera Powder Pile"
              width={489}
              height={869}
              className="rounded-lg shadow-lg"
            />
          </div> */}
          {/* <div className="w-full md:w-1/4">
            <Image
              src="/fiber-bags-truck.jpg"
              alt="Yucca Schidigera Supersacks in a Truck"
              width={651}
              height={869}
              className="rounded-lg shadow-lg"
            />
          </div> */}
          <div className="w-full md:w-1/8">
            <Image
              src="/yucca_powder.jpg"
              alt="Yucca Schidigera Powder Bag"
              width={684}
              height={912}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>


    </div>
  );
}