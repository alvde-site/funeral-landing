function Result() {
  return (
    <div className="result" id="result">
      <h3 className="result__title">Расчет стоимости и количества</h3>
      <div className="result__content">
        <div className="result__tile">
          <p>
            Количество плит: <span id="tile-count"></span> шт.
          </p>
          <p>
            Стоимость плит: <span id="tile-price"></span>
          </p>
          <p id="curb-count"></p>
          <p id="curb-price"></p>
          <p>
            Итог: <span id="improveResult"></span>
          </p>
        </div>
        <input
          type="button"
          value="Оформить заявку"
          className="calculator__submit-button"
        ></input>
        <p>
          Этот расчёт не является публичной офертой. Точные условия можно узнать
          по телефону.
        </p>
      </div>
    </div>
  );
}

export default Result;
