import { mtsTel, a1Tel, email, instagram, whatsapp } from "../../../utils/constants";
import { formattedTel } from "../../../utils/utils";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer" id={"footer"}>
      <div className="footer__content">
        <ul className="footer__contacts">
          <li className="footer__item">
            <div className="footer__logo" src="" alt=""></div>
          </li>
          <li className="footer__item">
            <p className="footer__hours">Круглосуточно</p>
          </li>
          <li className="footer__item">
            <a href={`mailto:${email}`} className="footer__email">
              {email}
            </a>
          </li>
          <li className="footer__item">
            <a href={`tel:${mtsTel}`} className="footer__tel footer__tel_mts">
              {formattedTel(mtsTel)}
            </a>
          </li>
          <li className="footer__item">
            <a href={`tel:${a1Tel}`} className="footer__tel footer__tel_a1">
              {formattedTel(a1Tel)}
            </a>
          </li>
          <li className="footer__item">
            <a href={instagram} className="footer__social footer__social_instagram">
            </a>
            <a href={whatsapp} className="footer__social footer__social_whatsapp">
            </a>
          </li>
        </ul>
        <nav>
          <h3 className="footer__links-title">Навигация</h3>
          <ul className="footer__links">
            <li>
              <a href="/#services" className="footer__link">
                Каталог
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="footer__link">
                Портфолио
              </a>
            </li>
            <li>
              <a href="/#working" className="footer__link">
                Этапы работы
              </a>
            </li>
            <li>
              <a href="/#faq" className="footer__link">
                Вопрос-ответ
              </a>
            </li>
            <li>
              <a href="/#about" className="footer__link">
                О компании
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a
        href="https://github.com/alvde-site"
        target="_blank"
        rel="noreferrer"
        className="footer__copyright"
      >
        {`© ${date.getFullYear()}. Демиденко Александр`}
      </a>
    </footer>
  );
}

export default Footer;
