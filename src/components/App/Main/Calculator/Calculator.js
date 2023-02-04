import { useState } from "react";

function Calculator() {
  const defaultCount = {
    gravescount: 1,
    widthcount: 120,
    heightcount: 120,
  };
  const [count, setCount] = useState(defaultCount);
  function handleSumbit(e) {
    e.preventDefault();
  }

  function hundleDecreaseButton(e) {
    const input = e.target.nextSibling.name;
    const value = e.target.nextSibling.value;
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) - 1;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      case "widthcount":
        val = Number(value) - 120;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      case "heightcount":
        val = Number(value) - 120;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      default:
        console.log("asdf");
    }
  }

  function hundleIncreaseButton(e) {
    const input = e.target.previousSibling.name;
    const value = e.target.previousSibling.value;
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) + 1;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      case "widthcount":
        val = Number(value) + 120;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      case "heightcount":
        val = Number(value) + 120;
        setCount((prevState) => {return { ...prevState, [input]: val }});
        break;
      default:
        console.log("asdf");
    }
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
              <div className="calculator__input-field">
                <button
                  className="calculator__count-button calculator__count-button_minus"
                  type="button"
                  onClick={hundleDecreaseButton}
                >
                  -
                </button>
                <input
                  className="calculator__input calculator__input_number"
                  id="gravescount"
                  type="number"
                  min="1"
                  value={count.gravescount || ""}
                  readOnly
                  name="gravescount"
                ></input>
                <button
                  className="calculator__count-button calculator__count-button_plus"
                  type="button"
                  onClick={hundleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info">?</span>
            </div>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <label htmlFor="widthcount" className="calculator__label">
              Введите ширину захоронения, см
            </label>
            <div className="calculator__field">
              <div className="calculator__input-field">
                <button
                  className="calculator__count-button calculator__count-button_minus"
                  type="button"
                  onClick={hundleDecreaseButton}
                >
                  -
                </button>
                <input
                  className="calculator__input calculator__input_number"
                  id="widthcount"
                  type="number"
                  min="120"
                  value={count.widthcount || ""}
                  readOnly
                  name="widthcount"
                ></input>
                <button
                  className="calculator__count-button calculator__count-button_plus"
                  type="button"
                  onClick={hundleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info">?</span>
            </div>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <label htmlFor="heightcount" className="calculator__label">
              Введите длину захоронения, см
            </label>
            <div className="calculator__field">
              <div className="calculator__input-field">
                <button
                  className="calculator__count-button calculator__count-button_minus"
                  type="button"
                  onClick={hundleDecreaseButton}
                >
                  -
                </button>
                <input
                  className="calculator__input calculator__input_number"
                  id="heightcount"
                  type="number"
                  min="120"
                  value={count.heightcount || ""}
                  readOnly
                  name="heightcount"
                ></input>
                <button
                  className="calculator__count-button calculator__count-button_plus"
                  type="button"
                  onClick={hundleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info">?</span>
            </div>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <label htmlFor="material" className="calculator__label">
              Выбрать размер плитки, см
            </label>
            <div className="calculator__field">
              <div className="calculator__input-field">
                <select name="tile" id="material" className="calculator__input">
                  <option value="900">Плитка 30*30</option>
                  <option value="3600">Керамогранит 60*60</option>
                </select>
              </div>
              <span className="calculator__info">?</span>
            </div>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <input type="checkbox" id="needcurb"></input>
            <span className="needcurb">Нужно установить бордюры</span>
          </fieldset>
          <div className="calculator__buttons">
            <input
              type="button"
              id="resultButton"
              value="Рассчитать"
              className="calculator__submit-button"
              href="#result"
            ></input>
            <input
              type="reset"
              id="resetButton"
              value="Сбросить"
              className="calculator__submit-button"
            ></input>
          </div>
          <p>
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
