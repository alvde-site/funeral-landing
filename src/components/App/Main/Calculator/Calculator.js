import { useState, useRef } from "react";
import Result from "./Result/Result";
import { infoImageFoto } from "../../../../utils/constants";

function Calculator(props) {
  const defaultCount = {
    gravescount: 1,
    widthcount: 120,
    lengthcount: 210,
    tilesize: 900,
    neededcurbs: false,
    onlygraves: false,
  };

  const defaultResult = {
    tilescount: 0,
    tilesprice: 0,
    curbscount: 0,
    curbsprice: 0,
    total: 0,
    isHiddenResult: true,
  };

  const priceList = {
    tile30: 90,
    tile60: 150,
    curb: 22,
  };

  const [count, setCount] = useState(defaultCount);
  const [result, setResult] = useState(defaultResult);
  const fieldRef = useRef(null);
  const handleScrollToRelult = () => {
    if (fieldRef) {
      fieldRef.current.scrollIntoView();
    }
  };

  function handleInfoPopup() {
    props.onInfoClick(infoImageFoto);
  }

  function handleSumbit(e) {
    e.preventDefault();
    calculations(count, priceList);
    setResult((state) => {
      return { ...state, isHiddenResult: false };
    });
    handleScrollToRelult();
  }

  function handleReset() {
    setCount(defaultCount);
    setResult(defaultResult);
  }

  function calculations(count, priceList) {
    const tilesCount = (
      Math.ceil((count.widthcount / 100) * (count.lengthcount / 100) * 2) / 2
    ).toFixed(1);
    const tilesPrice =
      tilesCount *
      (Number(count.tilesize) === 900 ? priceList.tile30 : priceList.tile60);

    let curbsCount = 0;
    let curbsPrice = 0;

    if (count.needcurb) {
      curbsCount = Math.ceil(
        ((count.widthcount + count.lengthcount) * 2 + 0.08 * 4) / 100
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

  function handleChangeCount(inputElement, newValue) {
    setCount((prevState) => {
      return { ...prevState, [inputElement]: newValue };
    });
  }

  function handleCheckChange(e) {
    const input = e.target.name;
    let val;
    switch (input) {
      case "neededcurbs":
        val = !count.neededcurbs;
        handleChangeCount(input, val);
        console.log(input, val);
        break;
      case "onlygraves":
        val = !count.onlygraves;
        handleChangeCount(input, val);
        break;
      default:
        console.log(input, val);
    }
  }

  function selectLengthCountNumber() {
    return Number(count.tilesize) === 900 ? 15 : 20;
  }

  function handleDecreaseButton(e) {
    const input = e.target.nextSibling.name;
    const value = e.target.nextSibling.value;
    let countNumber = selectLengthCountNumber();
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) - 1;
        val > 0 && handleChangeCount(input, val);
        break;
      case "widthcount":
        val = Number(value) - countNumber;
        val >= 120
          ? handleChangeCount(input, val)
          : handleChangeCount(input, 120);
        const gravesCount =
          val < count.gravescount * 110 ? Math.floor(val / 110) : null;
        if (gravesCount) {
          handleChangeCount("gravescount", gravesCount);
        }
        break;
      case "lengthcount":
        val = Number(value) - countNumber;
        val >= 210
          ? handleChangeCount(input, val)
          : handleChangeCount(input, 210);
        break;
      default:
        console.log("Ошибка");
    }
  }

  function handleIncreaseButton(e) {
    const input = e.target.previousSibling.name;
    const value = e.target.previousSibling.value;
    let countNumber = selectLengthCountNumber();
    let val;
    switch (input) {
      case "gravescount":
        val = Number(value) + 1;
        handleChangeCount(input, val);
        const widthCount = count.widthcount < val * 110 ? val * 110 : null;
        if (widthCount) {
          handleChangeCount("widthcount", widthCount);
        }
        break;
      case "widthcount":
        val = Number(value) + countNumber;
        handleChangeCount(input, val);
        break;
      case "lengthcount":
        val = Number(value) + countNumber;
        handleChangeCount(input, val);
        break;
      default:
        console.log("Ошибка");
    }
  }

  function handleExtraSize(extraLength, countItem, inputName) {
    if (extraLength) {
      const newValue = Number(countItem) + extraLength;
      handleChangeCount(inputName, newValue);
    }
  }

  function getExtraSize(value, countItem) {
    if (Number(value) === 3600) {
      const extraLength = 20 - (countItem % 20);
      return 20 !== extraLength ? extraLength : 0;
    }

    if (Number(value) === 900) {
      const extraLength = 15 - (countItem % 15);
      return 15 !== extraLength ? extraLength : 0;
    }
  }

  function handleSelectChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    handleChangeCount(name, value);
    const extraLength = getExtraSize(value, count.lengthcount);
    handleExtraSize(extraLength, count.lengthcount, "lengthcount");
    const extraWidth = getExtraSize(value, count.widthcount);
    handleExtraSize(extraWidth, count.widthcount, "widthcount");
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
                  onClick={handleDecreaseButton}
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
                  onClick={handleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info" onClick={handleInfoPopup}>
                ?
              </span>
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
                  onClick={handleDecreaseButton}
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
                  onClick={handleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info" onClick={handleInfoPopup}>
                ?
              </span>
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
                  onClick={handleDecreaseButton}
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
                  onClick={handleIncreaseButton}
                >
                  +
                </button>
              </div>
              <span className="calculator__info" onClick={handleInfoPopup}>
                ?
              </span>
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
                  onChange={handleSelectChange}
                >
                  <option value="900">Плитка 30*30</option>
                  <option value="3600">Керамогранит 60*60</option>
                </select>
              </div>
              <span className="calculator__info" onClick={handleInfoPopup}>
                ?
              </span>
            </div>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <input
              type="checkbox"
              name="neededcurbs"
              id="neededcurbs"
              checked={count.neededcurbs || false}
              onChange={handleCheckChange}
            ></input>
            <label htmlFor="neededcurbs" className="calculator__checkbox">
              Нужно установить бордюры
            </label>
          </fieldset>
          <fieldset className="calculator__fieldset">
            <input
              type="checkbox"
              name="onlygraves"
              id="onlygraves"
              checked={count.onlygraves || false}
              onChange={handleCheckChange}
            ></input>
            <label htmlFor="onlygraves" className="calculator__checkbox">
              Плитка только на могилках
            </label>
          </fieldset>
          <div className="calculator__buttons" ref={fieldRef}>
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
              onClick={handleReset}
            ></input>
            {console.log(count.neededcurbs, count.gravescount)}
          </div>
        </form>
        <Result result={result} count={count} />
      </div>
    </section>
  );
}

export default Calculator;
