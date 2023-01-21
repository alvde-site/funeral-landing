function ServicesCard(props) {
  return (
    <li className="services__card">
      <img
        className="services__image"
        src={props.servicesCard.image}
        alt="Вертикальные"
      ></img>
      <h3 className="services__card-title">{props.servicesCard.title}</h3>
      <p className="services__desc">{props.servicesCard.desc}</p>
      <p className="services__price-text">
        от <span className="service__price">{props.servicesCard.price}</span>
      </p>
    </li>
  );
}

export default ServicesCard;
