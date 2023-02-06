import { useState } from "react";
import { mtsTel, a1Tel } from "../../../../../utils/constants";

function Result({ result }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  function handleFeedback() {
    setWhatsappMessage();
    setIsFeedbackOpen(!isFeedbackOpen);
  }

  function setWhatsappMessage() {
    return `https://wa.me/375292415567?text=Здравствуйте, ваш калькулятор мне рассчитал следующее:
    1) Количество плит ${result.tilescount}м²
    2) Стоимость плит ${result.tilesprice} BYN
    3) Количество бордюров ${result.curbscount}шт
    4) Стоимость бордюров ${result.curbsprice} BYN
    5) Итог ${result.total} BYN.
    Хочу уточнить стоимость работ и задать вопросы.`;
  }

  let whatsappFeedback = setWhatsappMessage();

  return (
    <div
      className={`result ${result.isHiddenResult && "result__hidden"}`}
      id="result"
    >
      <h3 className="result__title">Расчет стоимости и количества</h3>
      <div className="result__content">
        <ul className="result__material result__material_type_tiles">
          <li>
            <p className="result__item">Количество плит</p>
            <p className="result__count">{`${result.tilescount} м²`}</p>
          </li>
          <li>
            <p className="result__item">Стоимость плит</p>
            <p className="result__count">{`${result.tilesprice} BYN`}</p>
          </li>
        </ul>
        <ul
          className={`result__material ${
            !result.curbscount && "result__material_hidden"
          }`}
        >
          <li>
            <p className="result__item">Количество бордюров</p>
            <p className="result__count">{`${result.curbscount} шт.`}</p>
          </li>
          <li>
            <p className="result__item">Стоимость бордюров</p>
            <p className="result__count">{`${result.curbsprice} BYN`}</p>
          </li>
        </ul>
        <p className="result__item">Итог</p>
        <p className="result__count">{`${result.total} BYN`}</p>
        <input
          type="button"
          value="Оформить заявку"
          className={`result__button ${
            isFeedbackOpen && "result__button_hidden"
          }`}
          onClick={handleFeedback}
        ></input>
        <ul
          className={`result__feedback-buttons ${
            !isFeedbackOpen && "result__feedback-buttons_hidden"
          }`}
        >
          <li className="result__feedback result__feedback_type_mts">
            <a href={`tel:${mtsTel}`} className="result__feedback-link">
              {" "}
            </a>
          </li>
          <li className="result__feedback result__feedback_type_a1">
            <a href={`tel:${a1Tel}`} className="result__feedback-link">
              {" "}
            </a>
          </li>
          <li className="result__feedback result__feedback_type_whatsapp">
            <a href={whatsappFeedback} className="result__feedback-link">
              {" "}
            </a>
          </li>
        </ul>
      </div>
      <p className="result__condition">
        Этот расчёт не является публичной офертой. Точные условия можно узнать
        по телефону.
      </p>
    </div>
  );
}

export default Result;
