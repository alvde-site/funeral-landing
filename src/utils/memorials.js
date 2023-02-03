import verticalGrave from "../images/vertical-grave600.png";
import horizontalGrave from "../images/horizontal-grave600.png";
import tombstone from "../images/tombstone600.png";

import verticalImg1 from "../images/memorials/catalog_memorials_page-0003.jpg";
import verticalImg2 from "../images/memorials/catalog_memorials_page-0004.jpg";
import verticalImg3 from "../images/memorials/catalog_memorials_page-0005.jpg";
import verticalImg4 from "../images/memorials/catalog_memorials_page-0006.jpg";
import verticalImg5 from "../images/memorials/catalog_memorials_page-0007.jpg";
import verticalImg6 from "../images/memorials/catalog_memorials_page-0008.jpg";
import verticalImg7 from "../images/memorials/catalog_memorials_page-0009.jpg";
import verticalImg8 from "../images/memorials/catalog_memorials_page-0010.jpg";
import verticalImg9 from "../images/memorials/catalog_memorials_page-0011.jpg";
import verticalImg10 from "../images/memorials/catalog_memorials_page-0012.jpg";
import verticalImg11 from "../images/memorials/catalog_memorials_page-0013.jpg";

import horizontalImg1 from "../images/memorials/catalog_memorials_page-0014.jpg";
import horizontalImg2 from "../images/memorials/catalog_memorials_page-0015.jpg";
import horizontalImg3 from "../images/memorials/catalog_memorials_page-0016.jpg";

import tombstoneImg1 from "../images/memorials/catalog_memorials_page-0017.jpg";
import tombstoneImg2 from "../images/memorials/catalog_memorials_page-0018.jpg";
import tombstoneImg3 from "../images/memorials/catalog_memorials_page-0019.jpg";

export const catalogData = [
  {
    title: "Вертикальные формы",
    desc: "Вертикальные памятники - классический вариант могильных надгробий",
    slideSrc: [
      verticalImg1,
      verticalImg2,
      verticalImg3,
      verticalImg4,
      verticalImg5,
      verticalImg6,
      verticalImg7,
      verticalImg8,
      verticalImg9,
      verticalImg10,
      verticalImg11,
    ],
    src: verticalGrave,
    price: "950 BYN",
  },
  {
    title: "Горизонтальные формы",
    desc: "Чаще всего устанавливается для двух, трех и более надгробий",
    src: horizontalGrave,
    slideSrc: [horizontalImg1, horizontalImg2, horizontalImg3],
    price: "1500 BYN",
  },
  {
    title: "Надгробные плиты",
    desc: "Чаще всего устанавливается для двух, трех и более надгробий",
    src: tombstone,
    slideSrc: [tombstoneImg1, tombstoneImg2, tombstoneImg3],
    price: "300 BYN",
  },
];
