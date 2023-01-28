function Calculator() {
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
        <div className="calculator__desc">
          <span className="close">&times;</span>
          <div className="info-box__wrap">
            <img src="images/dest/info.png" alt="Информация"></img>
          </div>
        </div>
        <form className="calc" action="/action_page.php">
          <p>Сколько могилок на захоронении?</p>
          <div className="calc__size__field margin-bottom">
            <button className="number-minus" type="button" onClick={stepdown}>
              -
            </button>
            <input
              id="numberPlaces"
              type="number"
              min="0"
              max="8"
              value="1"
              readOnly
            ></input>
            <button className="number-plus" type="button" onClick={stepup}>
              +
            </button>
          </div>
          <span className="info-active">&#10068</span>
          <div className="calc__size margin-bottom">
            <p>Введите ширину захоронения, см</p>
            <div className="calc__size__field margin-bottom">
              <button className="number-minus" type="button" onClick={stepdown}>
                -
              </button>
              <input
                id="width"
                type="number"
                min="120"
                value="120"
                step="30"
                readOnly
              ></input>
              <button className="number-plus" type="button" onClick={stepup}>
                +
              </button>
            </div>
            <span className="info-active">&#10068</span>
            <p>Введите длину захоронения, см</p>
            <div className="calc__size__field margin-bottom">
              <button className="number-minus" type="button" onClick={stepdown}>
                -
              </button>
              <input
                id="height"
                type="number"
                min="120"
                value="120"
                step="30"
                readOnly
              ></input>
              <button className="number-plus" type="button" onClick={stepup}>
                +
              </button>
            </div>
            <span className="info-active">&#10068</span>
            <div className="calc__checkbox margin-bottom">
              <p>Выбрать размер плитки, см</p>
              <select name="tile" id="material" className="width-field">
                <option value="900">Плитка 30*30</option>
                <option value="3600">Керамогранит 60*60</option>
              </select>
            </div>
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
