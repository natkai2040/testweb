import Link from 'next/link';
// import Image from 'next/image';
// import { IoIosCloseCircleOutline } from "react-icons/io";
import {useTranslation, LinkWithLocale} from "next-export-i18n";



interface PopupCardProps {
  onClose: () => void;
}

export default function PopupCard({ onClose }: PopupCardProps) {
  const { t } = useTranslation();
  return (
    <div className="relative bg-[#F8F6D1] px-4 py-4 rounded-lg shadow-lg max-w-md">
        <div className="close_button_desmar absolute -right-0.5" onClick={() => onClose()}>
             ⮾
        </div>
        <h2 className="subheading_desmar">
            {t('PopupCard.interested')}
        </h2>
        <p>
            {t('PopupCard.lets-talk')}
            <br></br>
            {t('PopupCard.contact-us-at')}
            <br></br>
            {t('PopupCard.or-use-form')}
        </p>
        <LinkWithLocale href="/contact-us" className="button_link_desmar">
          {t('PopupCard.contact-form-link')}
        </LinkWithLocale>
    </div>
  );
}