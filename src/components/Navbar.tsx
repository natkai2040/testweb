'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { useState } from 'react';
import {Link} from '@/i18n/navigation';

import Image from 'next/image';
import { IoIosMenu } from "react-icons/io";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('Navbar')

  return (
    <nav className="block w-full px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        {/* Logo */}
        <Link
          href="/"
          aria-label={t('homepage')}
          className="mr-4 block cursor-pointer py-0 text-base text-slate-800 font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/New Desmar-1.png"
            alt="Desmar Logo"
            width={611}
            height={195}
            className="h-12 w-auto"
          />
        </Link>

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
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const languages = [
    { code: 'en', label: 'English', flag: '/flags/Flag_of_the_United_States.svg' },
    { code: 'es', label: 'Español', flag: '/flags/Flag_of_Spain.svg' },
    { code: 'zh-Hans', label: '简体中文', flag: "/flags/Flag_of_the_People's_Republic_of_China.svg" },
    { code: 'zh-Hant', label: '繁體中文', flag: "/flags/Flag_of_the_People's_Republic_of_China.svg" }
  ];

  const switchLocale = (targetLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    router.push(segments.join('/'));
    onLinkClick?.();
  };

  return (
    <>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        {languages.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => switchLocale(code)}
            aria-label={label}
            disabled={code === currentLocale}
            className={`flex flex-col items-center text-[.5em] transition-opacity ${
              code === currentLocale ? 'opacity-100 font-bold' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={flag}
              alt={label}
              width={24}
              height={16}
              className="inline-block align-middle m-1"
            />
            {label}
          </button>
        ))}
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link href="/about-us" className="flex items-center" onClick={onLinkClick}>{t('about-us')}</Link>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link href="/our-products" className="flex items-center" onClick={onLinkClick}>{t('our-products')}</Link>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link href="/about-yucca-schidigera" className="flex items-center" onClick={onLinkClick}>{t('about-yucca-schidigera')}</Link>
      </li>
      <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link href="/contact-us" className="flex items-center" onClick={onLinkClick}>{t('contact-us')}</Link>
      </li>
    </>
  );
}
