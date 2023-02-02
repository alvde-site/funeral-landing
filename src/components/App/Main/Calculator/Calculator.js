// import infoImg from '../../../../images/info.png';

function Calculator() {
  function handleSumbit(e) {
    e.preventDefault();
  }

  function stepdown(e) {
    console.log(e.target);
  }

  function stepup(e) {
    console.log(e.target);
  }

  return (
    <section className="calculator">
      <h3 className="calculator__title">Калькулятор благоустройства</h3>
      <div className="calculator__content">
        <form
          className="calculator__form"
          action="#"
          name="calcform"
          onSubmit={handleSumbit}
        >
          <fieldset className="calculator__fieldset">
            <label htmlFor="gravescount" className="calculator__label">
              Сколько могилок на захоронении?
            </label>
            <div className="calculator__field">
              <button
                className="calculator__count-button calculator__count-button_minus"
                type="button"
                onClick={stepdown}
              >
                -
              </button>
              <input
                className="calculator__input calculator__input_number"
                id="gravescount"
                type="number"
                min="120"
                value="120"
                step="30"
                readOnly
              ></input>
              <button
                className="calculator__count-button calculator__count-button_plus"
                type="button"
                onClick={stepup}
              >
                +
              </button>
            </div>
            <span className="info-active">?</span>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <label htmlFor="widthcount" className="calculator__label">
              Введите ширину захоронения, см
            </label>
            <div className="calculator__field">
              <button
                className="calculator__count-button calculator__count-button_minus"
                type="button"
                onClick={stepdown}
              >
                -
              </button>
              <input
                className="calculator__input calculator__input_number"
                id="widthcount"
                type="number"
                min="120"
                value="120"
                step="30"
                readOnly
              ></input>
              <button
                className="calculator__count-button calculator__count-button_plus"
                type="button"
                onClick={stepup}
              >
                +
              </button>
            </div>
            <span className="info-active">?</span>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <label htmlFor="heightcount" className="calculator__label">
              Введите длину захоронения, см
            </label>
            <div className="calculator__field">
              <button
                className="calculator__count-button calculator__count-button_minus"
                type="button"
                onClick={stepdown}
              >
                -
              </button>
              <input
                className="calculator__input calculator__input_number"
                id="heightcount"
                type="number"
                min="120"
                value="120"
                step="30"
                readOnly
              ></input>
              <button
                className="calculator__count-button calculator__count-button_plus"
                type="button"
                onClick={stepup}
              >
                +
              </button>
            </div>
            <span className="info-active">?</span>
          </fieldset>

          <fieldset className="calculator__fieldset">
            <label htmlFor="material" className="calculator__label">
              Выбрать размер плитки, см
            </label>
            <div className="calculator__field">
              <select name="tile" id="material" className="calculator__input">
                <option value="900">Плитка 30*30</option>
                <option value="3600">Керамогранит 60*60</option>
              </select>
            </div>
            <span className="info-active">?</span>
          </fieldset>




          <div className="calc__size margin-bottom">
            <div className="margin-bottom">
              {/* <input type="checkbox" id="needcurb"><span className="needcurb">Нужно установить бордюры</span></input> */}
            </div>
          </div>
          <div className="calc__button">
            <button type="button" id="resultButton">
              <a href="#result">Рассчитать</a>
            </button>
            <input type="reset" id="resetButton" value="Сбросить"></input>
          </div>
          <p className="conditions">
            Расчет является предварительным. Точные условия можно узнать по
            телефону.
          </p>
        </form>
        <div className="result" id="result">
          <h3>Расчет стоимости и количества</h3>
          <div className="calc">
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
            <div className="result__button">
              <input type="button" value="Оформить заявку"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
