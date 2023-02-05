import { useState } from "react";
import Result from "./Result/Result";

function Calculator() {
  const defaultCount = {
    gravescount: 1,
    widthcount: 120,
    lengthcount: 120,
    tilesize: 900,
  };
  const [count, setCount] = useState(defaultCount);
  function handleSumbit(e) {
    e.preventDefault();
  }

  function hundleChangeCount(inputElement, newValue) {
    newValue > 0 &&
      setCount((prevState) => {
        return { ...prevState, [inputElement]: newValue };
      });
  }

  function selectLengthCountNumber() {
    return Number(count.tilesize) === 900 ? 30 : 60;
  }

  function hundleDecreaseButton(e) {
    const input = e.target.nextSibling.name;
    const value = e.target.nextSibling.value;
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) - 1;
        hundleChangeCount(input, val);
        break;
      case "widthcount":
        val = Number(value) - 120;
        hundleChangeCount(input, val);
        const gravesCount = val < count.gravescount * 120 ? val / 120 : null;
        if (gravesCount) {
          hundleChangeCount("gravescount", gravesCount);
        }
        break;
      case "lengthcount":
        let countNumber = selectLengthCountNumber();
        val = Number(value) - countNumber;
        val >= 120 && hundleChangeCount(input, val);
        break;
      default:
        console.log("Ошибка");
    }
  }

  function hundleIncreaseButton(e) {
    const input = e.target.previousSibling.name;
    const value = e.target.previousSibling.value;
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) + 1;
        hundleChangeCount(input, val);
        const widthCount = count.widthcount < val * 120 ? val * 120 : null;
        if (widthCount) {
          hundleChangeCount("widthcount", widthCount);
        }
        break;
      case "widthcount":
        val = Number(value) + 120;
        hundleChangeCount(input, val);
        break;
      case "lengthcount":
        let countNumber = selectLengthCountNumber();
        val = Number(value) + countNumber;
        hundleChangeCount(input, val);
        break;
      default:
        console.log("Ошибка");
    }
  }

  function hundleSelectChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    hundleChangeCount(name, value);
    if (Number(value) === 3600) {
      if (count.lengthcount % 60) {
        const newValue = Number(count.lengthcount) + 30;
        hundleChangeCount("lengthcount", newValue);
      }
    }
  }

  return (
    <section className="calculator">
      <h2 className="calculator__title">Калькулятор благоустройства</h2>
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
            <label htmlFor="lengthcount" className="calculator__label">
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
                  id="lengthcount"
                  type="number"
                  value={count.lengthcount || ""}
                  readOnly
                  name="lengthcount"
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
            <label htmlFor="tilesize" className="calculator__label">
              Выбрать размер плитки, см
            </label>
            <div className="calculator__field">
              <div className="calculator__input-field">
                <select
                  name="tilesize"
                  id="tilesize"
                  className="calculator__input"
                  value={count.tilesize}
                  onChange={hundleSelectChange}
                >
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
        </form>
        <Result />
      </div>
    </section>
  );
}

export default Calculator;
