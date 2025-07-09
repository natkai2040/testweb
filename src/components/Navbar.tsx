'use client';

import { useState } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { IoIosMenu } from "react-icons/io";

import {useTranslation, LanguageSwitcher, LinkWithLocale} from "next-export-i18n";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="block w-full px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        {/* Logo */}
        <LinkWithLocale
          href="/"
          aria-label={t('Navbar.homepage')}
          className="mr-4 block cursor-pointer py-0 text-base text-slate-800 font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/New Desmar-1.PNG"
            alt="Desmar Logo"
            width={611}
            height={195}
            className="h-12 w-auto"
          />
        </LinkWithLocale>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavLinks onLinkClick={() => setMenuOpen(false)} />
          </ul>
        </div>

        {/* Hamburger Icon */}
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          onClick={() => setMenuOpen(prev => !prev)}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <IoIosMenu className={`w-6 h-6  ${menuOpen?"text-[#9D6F2A]":""}`} />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 mt-0 px-4 bg-white bg-opacity-95 shadow z-[9999] lg:hidden">
          <ul className="flex flex-col gap-3 text-slate-700 py-4">
            <NavLinks onLinkClick={() => setMenuOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
}

// Extracted links for reuse
function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const { t } = useTranslation();
  return (
    <>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <LanguageSwitcher lang="en" aria-label="English">
          <div className="flex flex-col items-center text-[.5em]">
            <Image
              src="/flags/Flag_of_the_United_States.svg"
              alt="English"
              width={24}
              height={16}
              className="inline-block align-middle m-1"
            />
            <div>English</div>
          </div>
        </LanguageSwitcher>
        <LanguageSwitcher lang="es" aria-label="Español">
          <div className="flex flex-col items-center text-[.5em]">
            <Image
              src="/flags/Flag_of_Spain.svg"
              alt="Español"
              width={24}
              height={16}
              className="inline-block align-middle m-1"
            />
            Español
          </div>
        </LanguageSwitcher>
        <LanguageSwitcher lang="zhHans" aria-label="简体中文">
          <div className="flex flex-col items-center text-[.5em]">
            <Image
              src="/flags/Flag_of_the_People's_Republic_of_China.svg"
              alt="简体中文"
              width={24}
              height={16}
              className="inline-block align-middle m-1"
            />
            简体中文
          </div>
        </LanguageSwitcher>
        <LanguageSwitcher lang="zhHant" aria-label="繁體中文">
          <div className="flex flex-col items-center text-[.5em]">
            <Image
              src="/flags/Flag_of_the_People's_Republic_of_China.svg"
              alt="繁體中文"
              width={24}
              height={16}
              className="inline-block align-middle m-1"
            />
            繁體中文
          </div>
        </LanguageSwitcher>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <LinkWithLocale href="/about-us" className="flex items-center" onClick={onLinkClick}>{t('Navbar.about-us')}</LinkWithLocale>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <LinkWithLocale href="/our-products" className="flex items-center" onClick={onLinkClick}>{t('Navbar.our-products')}</LinkWithLocale>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <LinkWithLocale href="/about-yucca-schidigera" className="flex items-center" onClick={onLinkClick}>{t('Navbar.about-yucca-schidigera')}</LinkWithLocale>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <LinkWithLocale href="/contact-us" className="flex items-center" onClick={onLinkClick}>{t('Navbar.contact-us')}</LinkWithLocale>
      </li>
    </>
  );
}
