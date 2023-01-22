function Header() {
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <div className="header__logo-image"></div>
        <a href="#!" className="header__logo-link">
          Благоустройство и памятники
        </a>
      </div>
      <ul className="contacts">
        <li className="contacts__item">
          <h3 className="contacts__title">Режим работы:</h3>
          <p className="contacts__hours">Круглосуточно</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Почта:</h3>
          <a href="mailto:sergey.demidenko.1985@mail.ru" className="contacts__email">
            sergey.demidenko.1985@mail.ru
          </a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Телефон:</h3>
          <a href="tel:+375292415567" className="contacts__tel">
            +375(29) 241-55-67
          </a>
          <a href="tel:+375293464968" className="contacts__tel">
            +375(29) 346-49-68
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
