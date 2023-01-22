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
    title: "Горизонтальные",
    desc: "Цена без учета лавки и памятника",
    image: rectangle1,
    price: "300 BYN",
  },
];
