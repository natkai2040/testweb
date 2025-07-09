import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {useTranslation, LinkWithLocale} from "next-export-i18n";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    key: "fiber",
    img: "/product-images/bulkbag_combo.png",
    alt: "Bulk Bag of Yucca Schidigera Fiber",
    info: (
      <div className="section_desmar desmar_light_brown_bg">
        <h2 className="subheading_desmar desmar_text_brown text-center">Yucca Schidigera Fiber/Powder</h2>
        <div className="interesting_text_desmar">▸ Yucca Fiber at various TDS and Mesh Levels</div>
        <div className="side_by_side_container_desmar">
          <div className="">
            Yucca Schidigera Powder/Fiber is a raw material that maintains its foaming ability and ingredient integrity for over two years. It comes in packaging that includes double polyethylene-lined bags, fiber drums or cardboard boxes, with net weights of 20 kg, 25 kg, and 50 lbs (22.67 kg).
            <br/>
            <LinkWithLocale href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ Inquire for Order Details</LinkWithLocale>
          </div>
          {/* <div className="w-1/3">
            <Image src={"/product-images/bulkbag_combo.png"} alt="Bulk Bag of Yucca Schidigera Fiber" width={897} height={1021} className=""/>
          </div> */}
        </div>
      </div>
    ),
  },
  {
    key: "extract",
    img: "/product-images/container_big_official_combo.png",
    alt: "Industrial Container of Yucca Schidigera Extract",
    info: (
      <div className="section_desmar desmar_light_brown_bg">
        <h2 className="subheading_desmar desmar_text_brown text-center">Yucca Schidigera Concentrate/Extract</h2>
        <div className="interesting_text_desmar">▸ Yucca extracts at various Brix levels (30%, 40%, and 50%)</div>
        <div className="side_by_side_container_desmar">
          <div className="">
            Our Yucca Schidigera Extract is the natural solution you need to enhance the quality of your products. Our raw material is carefully extracted and purified to produce a highly concentrated formula that is packaged in 55-gallon drums, 250-gallon totes, and 330-gallon totes.<br/>
            <br/>
            Choose our extract today and experience the benefits of a pure and effective product.
            <Link href={"/contact-us"} className="button_link desmar_brown_bg mt-8">▷ Inquire for Order Details</Link>
          </div>
          {/* <div className="w-1/3">
            <Image src={"/product-images/container_big_official_combo.png"} alt="Industrial Container of Yucca Schidigera Extract" width={887} height={925} className=""/>
          </div> */}
        </div>
      </div>
    ),
  },
];

export default function ProductCarousel() {
  const [selected, setSelected] = useState(0);

  const prev = () => setSelected((selected - 1 + products.length) % products.length);
  const next = () => setSelected((selected + 1) % products.length);

  return (
    <div className="flex flex-col items-center my-8">
      <div className="relative flex items-center justify-center w-full max-w-2xl h-[400px]">
        {/* Left Chevron */}
        <button
          onClick={prev}
          className="absolute left-0 z-999 p-2 bg-white bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition"
          aria-label="Previous"
        >
          <FaChevronLeft size={28} />
        </button>
        {/* Images */}
        <div className="flex w-full items-center justify-center relative">
          {products.map((product, idx) => {
            // Calculate position: -1 (left), 0 (center), 1 (right)
            const pos = idx - selected;
            let style = "absolute transition-all duration-500";
            if (pos === 0) {
              style += " left-1/2 -translate-x-1/2 scale-100 opacity-100 z-20";
            } else if (pos === -1 || (pos === products.length - 1 && selected === 0)) {
              style += " left-1/4 -translate-x-1/2 scale-75 opacity-40 z-10";
            } else if (pos === 1 || (pos === -(products.length - 1) && selected === products.length - 1)) {
              style += " left-3/4 -translate-x-1/2 scale-75 opacity-40 z-10";
            } else {
              style += " opacity-0 pointer-events-none";
            }
            return (
              <Image
                key={product.key}
                src={product.img}
                alt={product.alt}
                width={350}
                height={350}
                className={style + " rounded-lg shadow-lg"}
                style={{ maxHeight: 350, maxWidth: 350 }}
                priority={pos === 0}
              />
            );
          })}
        </div>
        {/* Right Chevron */}
        <button
          onClick={next}
          className="absolute right-0 z-999 p-2 bg-white bg-opacity-70 rounded-full shadow hover:bg-opacity-100 transition"
          aria-label="Next"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
      {/* Info below */}
      <div className="px-40 mt-8 product-info-fade">
        {products[selected].info}
      </div>
    </div>
  );
}