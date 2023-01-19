import bless from "../../../../images/svg/bless.svg";
import graveyard from "../../../../images/svg/graveyard.svg";
import location from "../../../../images/svg/location.svg";

function Competence() {
  return (
    <section className="competence">
      <ul className="competence__content">
        <li className="competence__card">
          <img className="competence__icon" src={bless} alt="Полный комплекс услуг" />
          <div className="competence__desc">
            <h3 className="competence__title">Полный комплекс услуг</h3>
            <p className="compentence__text">Беру на себя все заботы с доставкой, установкой и благоустройством территории</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src={graveyard} alt="Бесплатный дизайн-макет" />
          <div className="competence__desc">
            <h3 className="competence__title">Бесплатный дизайн-макет</h3>
            <p className="compentence__text">Создам макет памятника с расположением портрета на камне, подбиру шрифты, надписи, оформление</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src={location} alt="Работаем в регионах" />
          <div className="competence__desc">
            <h3 className="competence__title">Работаю в регионах</h3>
            <p className="compentence__text">Принимаю заказы по Зельвенскому, Мостовскому, Свислочскому районах</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Competence;
