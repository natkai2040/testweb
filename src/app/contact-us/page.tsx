"use client"

import {useTranslation, LinkWithLocale} from "next-export-i18n";

export default function Contact_Us() {
  const { t } = useTranslation();
  
  return (
    <div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown">{t('Contact-Us.contact-us-title')}</h1>
        <div className='interesting_text_desmar text-center'>
          {t('Contact-Us.interesting-text-reach-out')}
        </div>
        <p>
          {t('Contact-Us.details')} <br/>
          {t('Contact-Us.or-visit')}
          {/* We are available for product inquiry over email, phone, at our address, or by submitting the <span className="font-bold">contact form</span> below. <br/>
          Better yet, visit us! We love our customers, so feel free to visit us in person. */}
        </p>
      </div>

      <div className="section_desmar desmar_light_brown_bg">
        <div className="side_by_side_container_desmar">
          <div className="h-1/3 md:w-1/3 w-full">
            <p><span className="font-bold">{t('Contact-Us.email-title')}</span>: info@desmarglobal.com</p>
            <p><span className="font-bold">{t('Contact-Us.phone-number-title')}</span>: (909) 770 9655</p>
            <p>
            Desmar Global Inc. Headquarters<br></br>
            450 South Lone Hill Ave, Suite A, <br></br>
            San Dimas, California 91773<br></br>
            United States
            </p>
          </div>
          <div className="h-1/3 md:w-1/3 w-full border-t-2 pt-6 mt-2
          md:border-l-2 md:border-t-0 border-[#FFFFFF] md:mt-0 md:pt-0 md:pl-6 md:ml-2"
          >
            <span className="font-bold">{t('Contact-Us.hours-title')}</span><br></br>
            <span className="font-bold">{t('Contact-Us.monday-title')}</span><br></br>
            09:00 am - 05:00 pm<br></br>
            <span className="font-bold">{t('Contact-Us.tuesday-title')}</span><br></br>
            09:00 am - 05:00 pm<br></br>
            <span className="font-bold">{t('Contact-Us.wednesday-title')}</span><br></br>
            09:00 am - 05:00 pm
          </div>
          <div className="h-1/3 md:w-1/3 w-full">
            <span className="font-bold">{t('Contact-Us.thursday-title')}</span><br></br>
            09:00 am - 05:00 pm<br></br>
            <span className="font-bold">{t('Contact-Us.friday-title')}</span><br></br>
            09:00 am - 05:00 pm<br></br>
            <span className="font-bold">{t('Contact-Us.saturday-title')}</span><br></br>
            {t('Contact-Us.hours-closed')}<br></br>
            <span className="font-bold">{t('Contact-Us.sunday-title')}</span><br></br>
            {t('Contact-Us.hours-closed')}
          </div>
        </div>
      </div>
      <div className="section_desmar bg-[#F8F6D1]">
        <h2 className="subheading_desmar desmar_text_brown">
          {t('Contact-Us.contact-form-title')}
        </h2>
        <p>{t('Contact-Us.contact-form-prompt')}</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('Contact-Us.contact-form-name')}: *</label><br/>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">{t('Contact-Us.contact-form-company')}: *</label><br/>
            <input type="text" id="company" name="company" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('Contact-Us.contact-form-email')}: *</label><br/>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t('Contact-Us.contact-form-phone')} ({t('Contact-Us.contact-form-optional')})</label><br/>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('Contact-Us.contact-form-leave-us-a-message')} ({t('Contact-Us.contact-form-optional')})</label><br/>
            <textarea id="message" name="message" rows={4}></textarea>
          </div>
          <p>{t('Contact-Us.contact-form-product-of-interest')} ({t('Contact-Us.contact-form-select-multiple')}) ({t('Contact-Us.contact-form-optional')})</p>
          <div className="form-group">
            <label>
              <input type="checkbox" name="product" value="Yucca Concentrate/Extract" />
              {t('Contact-Us.contact-form-yucca-concentrate-extract')}
            </label><br/>
            <label>
              <input type="checkbox" name="product" value="Yucca Fiber/Powder" />
              {t('Contact-Us.contact-form-yucca-fiber-powder')}
            </label><br/>
          </div>
          <button type="submit" className="submit-button bg-[#749772]">{t('Contact-Us.contact-form-submit-button')}</button>
          <p className="font-bold">{t('Contact-Us.contact-form-we-will-respond')}</p>
        </form>
      </div>
    </div>
  );
}