"use client"

// import Link from 'next/link';
import Image from 'next/image';
import {useTranslation} from "next-export-i18n";


export default function About_Yucca_Schidigera() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown text-center">{t('About-Yucca.what-is-yucca-title')}</h1>
        <div className='interesting_text_desmar text-center'>
          {t('About-Yucca.interesting-text-botanical-gem')}
        </div>
        <p>
          {t('About-Yucca.main-p1')}
        </p>
        <p>
          {t('About-Yucca.main-p2')}
        </p>
        <p>
          {t('About-Yucca.main-p3')}
        </p>
      </div>
      
      <div className="section_desmar desmar_light_brown_bg">
        <h2 className="subheading_desmar desmar_text_brown">
          {t('About-Yucca.where-grown-title')}
        </h2>
        <p>
          {t('About-Yucca.where-grown-description')}
        </p>
      </div>
      <div className="section_desmar">
        <h1 className="heading_desmar desmar_text_brown text-center">
          {t('About-Yucca.uses-title')}
        </h1>
      </div>

      <div className="section_desmar bg-[#609D5C]">
        <div className="side_by_side_container_desmar">
          <div className="h-2/3 md:w-2/3 desmar_text_white">
            <h2 className="subheading_desmar text-[#283D27]">
             {t('About-Yucca.yucca-for-agriculture-title')}
            </h2>
            {/* <p>
              {t('About-Yucca.yucca-for-agriculture-p1')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-agriculture-p2')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-agriculture-p3')}
            </p> */}
            <p>
              {t('About-Yucca.yucca-for-agriculture-p1')}
              Yucca Schidigera extract is widely used as a natural biostimulant,
              promoting crop growth and development, particularly under drought stress conditions.
              It has been shown to         
              {' '}
              <a
                href="https://www.researchgate.net/publication/366995455_Use_of_Yucca_Yucca_schidigera_Extracts_as_Biostimulants_to_Promote_Germination_and_Early_Vigor_and_as_Natural_Fungicides"
                target="_blank"
                rel="noopener noreferrer"
              >
                enhance seed germination and improve early plant vigor
              </a>
              {' '}
              in several crop species.
            </p>
            <p>
              {t('About-Yucca.yucca-for-agriculture-p2')}Additionally, due to its
              {' '}
              <a
                href="https://journal-inflammation.biomedcentral.com/articles/10.1186/1476-9255-3-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                high saponin content,
              </a>
              {' '}
              Yucca Schidigera acts as a natural fungicide, with
              {' '}
              <a
                href="https://www.researchgate.net/publication/366995455_Use_of_Yucca_Yucca_schidigera_Extracts_as_Biostimulants_to_Promote_Germination_and_Early_Vigor_and_as_Natural_Fungicides"
                target="_blank"
                rel="noopener noreferrer"
              >
                multiple
              </a>
              {' '}
              laboratory studies demonstrating its ability to
              
              {' '}
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0926669007000374"
                target="_blank"
                rel="noopener noreferrer"
              >
                inhibit the growth of common plant-pathogenic fungi.
              </a>
              {' '}
            </p>
            <p>
              {t('About-Yucca.yucca-for-agriculture-p3')}By reducing the need for synthetic pesticides and fertilizers, Yucca Schidigera offers an eco-friendly solution for sustainable agriculture.
            </p>
            <h3 className="subsubheading_desmar text-[#283D27]">{t('About-Yucca.yucca-for-agriculture-further-reading')}</h3>
            <ul className="unordered-list-desmar">
              <li>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9865292/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('About-Yucca.fungicide-link')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.federalregister.gov/documents/2000/09/29/00-24946/yucca-extract-exemption-from-the-requirement-of-a-tolerance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {t('About-Yucca.government-link')}
                </a>
              </li>
            </ul>
          </div>
          <div className="h-1/3 md:w-1/3">
            <Image src="/agriculture-field.jpeg"
            alt="Plants on a Farm"
            width={5159} height={3863}
            className="h-full w-full object-cover rounded-2xl shadow-inner-white"
            />
          </div>
        </div>
      </div>

      <div className="section_desmar bg-[#AE9570]">
        <div className="side_by_side_container_desmar">
          <div className="h-2/3 md:w-2/3 desmar_text_white">
            <h2 className="subheading_desmar text-[#614418]">
              {t('About-Yucca.yucca-for-livestock-title')}
            </h2>
            {/* <p>
              {t('About-Yucca.yucca-for-livestock-p1')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-livestock-p2')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-livestock-p3')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-livestock-p4')}
            </p> */}
            <p>
              {t('About-Yucca.yucca-for-livestock-p1')}Yucca schidigera is widely used in animal feed as a natural additive for poultry, swine, cattle, and even in aquaculture.
            </p>
            <p>
              {t('About-Yucca.yucca-for-livestock-p2')}When incorporated into livestock diets, Yucca has been shown to

              {' '}
              <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S016788091100096X"
              target="_blank"
              rel="noopener noreferrer"
              >
              reduce ammonia emissions
              </a>
              {' '}

              in swine and

              {' '}
              <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0959652619329440"
              target="_blank"
              rel="noopener noreferrer"
              >
              methane emissions
              </a>
              {' '}

              in ruminants, helping to improve air quality and reduce the environmental impact of animal agriculture.
          </p>
          <p>
              {t('About-Yucca.yucca-for-livestock-p3')}In poultry, Yucca supplementation has been linked to
              {' '}
              <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4774811/"
              target="_blank"
              rel="noopener noreferrer"
              >
              numerous benefits
              </a>
              {' '} including improved feed efficiency, enhanced protein and energy utilization, and higher survival rates.
            </p>
            <p>
              {t('About-Yucca.yucca-for-livestock-p4')}
              <a
              href="https://www.sciencedirect.com/science/article/abs/pii/B9780323916622000090"
              target="_blank"
              rel="noopener noreferrer"
              >
              Similar benefits
              </a>
              {' '}
              have been reported in the aquaculture industry, where Yucca's saponins help 
              {' '}
              <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7825398/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  lower waterborne ammonia levels,
              </a>
              {' '}

              contributing to better animal health and survival.
            </p>
            <h3 className="subsubheading_desmar text-[#614418]">{t('About-Yucca.yucca-for-livestock-further-reading')}</h3>
            <ul className="unordered-list-desmar">
              <li> 
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0959652619329440"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('About-Yucca.yucca-for-livestock-greenhouse-link')}
                </a>
              </li>
            </ul>
          </div>
          <div className="h-1/3 md:w-1/3">
            <Image src="/pigs-marek-piwnicki.jpg" alt="White Pig on Brown Soil" width={3967} height={2635}
            className="rounded-2xl shadow-inner-white"/>
          </div>
        </div>
      </div>

      <div className="section_desmar bg-[#C18FC2]">
        <div className="side_by_side_container_desmar">
          <div className="h-2/3 md:w-2/3 desmar_text_white">
            <h2 className="subheading_desmar text-[#5C225D]">
              {t('About-Yucca.yucca-for-cosmetics-title')}
            </h2>
            <p>
              {t('About-Yucca.yucca-for-cosmetics-p1')}
            </p>
            <p>
              {t('About-Yucca.yucca-for-cosmetics-p2')}
            </p>
            <h3 className="subsubheading_desmar text-[#5C225D]">{t('About-Yucca.yucca-for-cosmetics-further-reading')}</h3>
            <ul className="unordered-list-desmar">
              <li>
                <a
                    href="https://cosmileeurope.eu/inci/detail/17039/yucca-schidigera-leaf-root-stem-extract/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('About-Yucca.yucca-for-cosmetics-cosmile-link')}  
                </a>
              </li>
            </ul>
          </div>
          <div className="h-1/3 md:w-1/3">
            <Image
              src="/clear-bottle-nataliya-melnychuk.jpg"
              alt="Clear Makeup Bottle"
              width={4000}
              height={6000}
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-inner-white"
            />
          </div>
        </div>
      </div>


    </div>
  );
}