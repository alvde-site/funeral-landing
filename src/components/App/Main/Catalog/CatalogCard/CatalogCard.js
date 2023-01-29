function CatalogCard(props) {
  console.log(props)
  function handleOpenSlide() {
    props.onSlide(props.catalogCard);
  }
  return (
    <li className="services__card services__card_catalog" onClick={handleOpenSlide}>
      <img
        className="services__image"
        src={props.catalogCard.src}
        alt="Вертикальные"
      ></img>
      <h3 className="services__card-title">{props.catalogCard.title}</h3>
      <p className="services__desc">{props.catalogCard.desc}</p>
      <p className="services__price-text">
        от <span className="service__price">{props.catalogCard.price}</span>
      </p>
    </li>
  );
}

export default CatalogCard;
