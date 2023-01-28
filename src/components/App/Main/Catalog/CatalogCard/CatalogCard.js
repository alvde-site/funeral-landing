function CatalogCard(props) {
  return (
    <li className="services__card services__card_catalog">
      <img
        className="services__image"
        src={props.сatalogCard.image}
        alt="Вертикальные"
      ></img>
      <h3 className="services__card-title">{props.сatalogCard.title}</h3>
      <p className="services__desc">{props.сatalogCard.desc}</p>
      <p className="services__price-text">
        от <span className="service__price">{props.сatalogCard.price}</span>
      </p>
    </li>
  );
}

export default CatalogCard;
