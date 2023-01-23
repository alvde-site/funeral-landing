import { mtsTel, a1Tel, email } from "../../../utils/constants";
import { formattedTel } from "../../../utils/utils";

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <div className="header__logo-image"></div>
        <a href="#!" className="header__logo-link">
          Памятники Благоустройство
        </a>
      </div>
      <ul className="contacts">
        <li className="contacts__item contacts__item_work-time">
          <h3 className="contacts__title">Режим работы:</h3>
          <p className="contacts__hours">Круглосуточно</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Почта:</h3>
          <a href={`mailto:${email}`} className="contacts__email">
            {email}
          </a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Телефон:</h3>
          <a href={`tel:${mtsTel}`} className="contacts__tel contacts__tel_mts">
            {formattedTel(mtsTel)}
          </a>
          <a href={`tel:${a1Tel}`} className="contacts__tel contacts__tel_a1">
            {formattedTel(a1Tel)}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
