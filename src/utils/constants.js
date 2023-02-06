import gmir from "../images/gmir.jpg";
import evora from "../images/evora.jpg";
import graveyard from "../images/graveyard.jpg";
import flower from "../images/flower.jpg";
import custle from "../images/custle.jpeg";
import horse from "../images/horse.jpg";
import sleepangel from "../images/sleepangel.jpg";
import child from "../images/child.jpg";
import portfolioFoto from "../images/portfolio.jpg";
import portfolioFoto1 from "../images/portfolio1.jpg";
import portfolioFoto2 from "../images/portfolio2.jpg";
import portfolioFoto3 from "../images/portfolio3.jpg";
import portfolioFoto4 from "../images/portfolio4.jpg";
import portfolioFoto4Slide1 from "../images/portfolio4-1.jpg";
import portfolioFoto4Slide2 from "../images/portfolio4-2.jpg";
import avatar from "../images/default-avatar.jpg";
import infoImage from "../images/info.png";


import rectangle from "../images/rectangle.jpeg";
import rectangle1 from "../images/rectangle1.jpeg";

export const feedbackButton = document.querySelector(".header__feedback"); // Кнопка открытия popup формы заполнения профиля
export const burger = document.querySelector(".burger-menu");
export const navContent = document.querySelector(".topnav__content");
export const topnav = document.querySelector(".topnav");
export const menu = document.querySelector(".topnav__links");
export const topnavContacts = document.querySelector(".topnav__contacts");
export const scrollUpButton = document.queryCommandValue(".scrollup");
export const DeletedToken = "Токен удален";
export const SomethingWrong = "Что-то пошло не так";
export const formData = {
  formSelector: ".form",
  inputSelector: ".form__input",
  checkboxSelector: ".form__checkbox",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__input-error_active",
};

export const infoImageFoto = {
  src: infoImage,
}

export const portfolioImages = [
  {
    src: gmir,
  },
  {
    src: evora,
  },
  {
    src: graveyard,
  },
  {
    src: flower,
  },
  { src: custle },
  {
    src: horse,
  },
  {
    src: sleepangel,
  },
  {
    src: child,
  },
  { src: portfolioFoto1 },
  { src: portfolioFoto2, slideSrc: [portfolioFoto2, portfolioFoto] },
  { src: portfolioFoto3 },
  { src: portfolioFoto4, slideSrc: [portfolioFoto4, portfolioFoto4Slide1, portfolioFoto4Slide2] },
];
export const questionsDataList = [
  {
    question: "Как происходит оплата?",
    answer:
      "Оплата делится на две части, первая – предоплата, вносится при заключении договора, и вторая – доплата вносится после выполнения монтажных работ, либо по приему готового изделия в офисе.",
  },
  {
    question: "Как долго стоит памятник?",
    answer:
      "Памятники из гранита отличаются своей долговечностью, и даже в наших суровых погодных условиях сохраняют свои свойства и формы веками",
  },
  {
    question: "Какой материал выбрать для памятника - гранит или мрамор?",
    answer:
      "Гранит более практичен и долговечен, так же требует меньшего ухода",
  },
  {
    question: "Могу ли я самостоятельно установить купленнный у вас памятник?",
    answer:
      "Да, конечно, но стоит помнить о том, что гранит имеет высокую плотность, следовательно – большой вес. Вес комплекта гранитного памятника около 220 кг",
  },
  {
    question: "Даете ли вы гарантию на гранитные памятники?",
    answer:
      "Да, гарантия на гранитные памятники в нашей мастерской составляет 20 лет",
  },
];

export const servicesData = [
  {
    title: "Благоустройство",
    desc: "Цена без учета лавки и памятника",
    image: rectangle,
    price: "480 BYN",
  },
  {
    title: "Благоустройство",
    desc: "Цена без учета лавки и памятника",
    image: rectangle1,
    price: "300 BYN",
  },
];

export const mtsTel = "+375292415567";
export const a1Tel = "+375293464968";
export const email = "sergey.demidenko.1985@mail.ru";
export const instagram = "https://instagram.com/granitnajapamjat_?igshid=YmMyMTA2M2Y=";
export const whatsapp = "https://wa.me/375292415567?text=Здравствуйте%2C+у+меня+есть+вопрос";

// Блок с отзывами

export const reviewsList = [
  {
    avatar: "https://thumb.tildacdn.com/tild3866-3334-4139-a462-643239303365/-/cover/240x240/center/center/-/format/webp/Svetlana.jpg",
    name: 'Светлана',
    location: 'Могилев',
    text: 'Спасибо Вам за быструю, качественную работу. Спустя два года, все благоустройство выглядит очень красиво. Решили заказать памятник у вас весной. Обязательно порекомендуем вас.'
  },
  {
    avatar: avatar,
    name: 'Александр',
    location: 'Могилев',
    text: 'Недавно делал благоустройство захоронения на Лавсановском кладбище. Подкупило нормальное отношение к работе. Заказывал памятник и оформление могилы плиткой. Не навязывал ненужного, цена приемлемая, все сделал аккуратно и в срок.'
  },
  {
    avatar: avatar,
    name: 'Ольга',
    location: 'Орша',
    text: 'Выражаем огромную  благодарность Сергею за профессионализм и чуткость при оформлении заказа по благоустройству могилы нашей родственницы. Мы из Оршы, контролировать процесс замены памятника и оградки не было возможности, но когда мы приехали принимать работу, все было сделано быстро, качественно, очень красиво. Пусть Ваша фирма процветает долгие-долгие годы. С уважением, Воробьевы.'
  }
]
