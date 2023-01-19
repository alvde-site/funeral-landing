import me from "../../../../images/me-foto.jpg";

function About() {
  return (
    <section className="about" id={"about"}>
      <h2 className="about__title">О компании</h2>
      <div className="about__content">
        <img
          className="about__image"
          src={me}
          alt="О нас"
        ></img>
        <div className="about__description">
          <h3 className="about__list-title">
            Более 15 лет я помогаю почтить память усопших и беру на себя все
            работы по оформлению места захоронения:
          </h3>
          <ul className="about__list">
            <li className="about__list-item">замеры</li>
            <li className="about__list-item">подбор материалов</li>
            <li className="about__list-item">художественную роспись</li>
            <li className="about__list-item">гравировку</li>
            <li className="about__list-item">монтаж надгробия</li>
            <li className="about__list-item">3D-моделирование</li>
            <li className="about__list-item">изготовление</li>
            <li className="about__list-item">хранение</li>
            <li className="about__list-item">доставку</li>
            <li className="about__list-item">
              а также финальное благоустройство участка, включая выкладку
              дорожки из тротуарной плитки, установку оградки, скамеек, столиков
              и других аксессуаров
            </li>
          </ul>
          <p className="about__text">
            Выполню заказы любой сложности от стандартных
            памятников до элегантных фигурных композиций с крестом, ангелом или
            по индивидуальному эскизу клиента. В моем арсенале более 10 видов
            натурального гранита и мрамора, современное оборудование и
            собственное производство
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
