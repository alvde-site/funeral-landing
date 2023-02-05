function Result() {
  return (
    <div className="result" id="result">
      <h3 className="result__title">Расчет стоимости и количества</h3>
      <div className="result__content">
        <ul className="result__material result__material_type_tiles">
          <li>
            <p className="result__item">Количество плит</p>
            <p className="result__count">5 шт.</p>
          </li>
          <li>
            <p className="result__item">Стоимость плит</p>
            <p className="result__count">45 BYN</p>
          </li>
        </ul>
        <ul className="result__material result__material_type_curbs">
          <li>
            <p className="result__item">Количество бордюров</p>
            <p className="result__count">5 шт.</p>
          </li>
          <li>
            <p className="result__item">Стоимость бордюров</p>
            <p className="result__count">45 BYN</p>
          </li>
        </ul>
        <p className="result__item">Итог</p>
        <p className="result__count">4555 BYN</p>
        <input
          type="button"
          value="Оформить заявку"
          className="result__button"
        ></input>
      </div>
      <p className="result__condition">
        Этот расчёт не является публичной офертой. Точные условия можно узнать
        по телефону.
      </p>
    </div>
  );
}

export default Result;
