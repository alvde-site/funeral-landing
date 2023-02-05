import { useState } from "react";
import Result from "./Result/Result";

function Calculator() {
  const defaultCount = {
    gravescount: 1,
    widthcount: 120,
    lengthcount: 210,
    tilesize: 900,
    neededcurbs: false,
  };

  const defaultResult = {
    tilescount: 0,
    tilesprice: 0,
    curbscount: 0,
    curbsprice: 0,
    total: 0,
  };

  const priceList = {
    tile30: 90,
    tile60: 150,
    curb: 22,
  };

  const [count, setCount] = useState(defaultCount);
  const [result, setResult] = useState(defaultResult);

  function handleSumbit(e) {
    e.preventDefault();
    calculations(count, priceList);
  }

  function calculations(count, priceList) {
    const tilesCount = Math.ceil(
      (count.widthcount / 100) * (count.lengthcount / 100)
    );
    const tilesPrice =
      tilesCount *
      (Number(count.tilesize) === 900 ? priceList.tile30 : priceList.tile60);

    let curbsCount = 0;
    let curbsPrice = 0;

    if (count.needcurb) {
      curbsCount = Math.ceil(
        ((count.widthcount + count.lengthcount) * 2 + 8 * 4) / 100
      );
      curbsPrice = curbsCount * priceList.curb;
    }

    const totalCount = tilesPrice + curbsPrice;

    setResult((prevState) => {
      return {
        ...prevState,
        tilescount: tilesCount,
        tilesprice: tilesPrice,
        curbscount: curbsCount,
        curbsprice: curbsPrice,
        total: totalCount,
      };
    });
  }

  function hundleChangeCount(inputElement, newValue) {
    setCount((prevState) => {
      return { ...prevState, [inputElement]: newValue };
    });
  }

  function hundleCheckChange(e) {
    const input = e.target.name;
    const val = !count.needcurb;
    hundleChangeCount(input, val);
  }

  function selectLengthCountNumber() {
    return Number(count.tilesize) === 900 ? 15 : 20;
  }

  function hundleDecreaseButton(e) {
    const input = e.target.nextSibling.name;
    const value = e.target.nextSibling.value;
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) - 1;
        val > 0 && hundleChangeCount(input, val);
        break;
      case "widthcount":
        val = Number(value) - 120;
        val > 0 && hundleChangeCount(input, val);
        const gravesCount = val < count.gravescount * 120 ? val / 120 : null;
        if (gravesCount) {
          hundleChangeCount("gravescount", gravesCount);
        }
        break;
      case "lengthcount":
        let countNumber = selectLengthCountNumber();
        val = Number(value) - countNumber;
        val >= 210 && hundleChangeCount(input, val);
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

  function hundleExtraLength(extraLength) {
    console.log("лишняя длина", extraLength);
    if (extraLength) {
      const newValue = Number(count.lengthcount) + extraLength;
      hundleChangeCount("lengthcount", newValue);
    }
  }

  function hundleSelectChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    hundleChangeCount(name, value);
    if (Number(value) === 3600) {
      const extraLength = 20 - (count.lengthcount % 20);
      20 !== extraLength && hundleExtraLength(extraLength);
    }

    if (Number(value) === 900) {
      const extraLength = 15 - (count.lengthcount % 15);
      15 !== extraLength && hundleExtraLength(extraLength);
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
            <input
              type="checkbox"
              name="needcurb"
              id="needcurb"
              checked={count.needcurb || false}
              onChange={hundleCheckChange}
            ></input>
            <span className="needcurb">Нужно установить бордюры</span>
          </fieldset>
          <div className="calculator__buttons">
            <input
              type="submit"
              id="resultButton"
              value="Рассчитать"
              className="calculator__submit-button"
            ></input>
            <input
              type="reset"
              id="resetButton"
              value="Сбросить"
              className="calculator__submit-button"
            ></input>
          </div>
        </form>
        <Result result={result} count={count} />
      </div>
    </section>
  );
}

export default Calculator;
