import { useEffect, useRef } from "react";
import { handleTopnavTopPosition } from "../../../../utils/utils";
import { mtsTel, a1Tel, email } from "../../../../utils/constants";
import { formattedTel } from "../../../../utils/utils";

function Topnav(props) {
  const topnav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", getTopPosition);
  }, []);

  function getTopPosition() {
    const timer = setTimeout(() => {
      handleTopnavTopPosition(topnav.current);
    }, 100);
    return () => clearTimeout(timer);
  }

  function handleToggleBurger() {
    props.onToggleBurger();
  }

  return (
    <section className="topnav" ref={topnav}>
      <nav className="topnav__content">
        <ul className="contacts topnav__contacts">
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
            <a
              href={`tel:${mtsTel}`}
              className="contacts__tel contacts__tel_mts"
            >
              {formattedTel(mtsTel)}
            </a>
            <a href={`tel:${a1Tel}`} className="contacts__tel contacts__tel_a1">
              {formattedTel(a1Tel)}
            </a>
          </li>
        </ul>
        <div className="topnav__smallscreen-item">
          <a
            href={`mailto:${email}`}
            className="topnav__email   topnav__email_hidden"
          >
            {email}
          </a>
          <a href={`tel:${mtsTel}`} className="topnav__tel topnav__tel_mts">
            {formattedTel(mtsTel)}
          </a>
          <a href={`tel:${a1Tel}`} className="topnav__tel topnav__tel_a1">
            {formattedTel(a1Tel)}
          </a>
        </div>
        <div className="topnav__links-wrapper">
          <div
            className={`burger-menu topnav__burger ${
              props.isToggleBurger ? "open" : ""
            }`}
            onClick={handleToggleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`topnav__links ${
              props.isToggleBurger ? "topnav__links_opened" : ""
            }`}
          >
            <li>
              <a
                href="/#services"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Каталог
              </a>
            </li>
            <li>
              <a
                href="/#portfolio"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Портфолио
              </a>
            </li>
            <li>
              <a
                href="/#grave"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Благоустройства
              </a>
            </li>
            <li>
              <a
                href="/#working"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Этапы работы
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Вопрос-ответ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                О компании
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Отзывы
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Контакты
              </a>
            </li>
            <li className="topnav__more">Еще</li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Topnav;
