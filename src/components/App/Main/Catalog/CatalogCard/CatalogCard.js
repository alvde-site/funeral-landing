function CatalogCard(props) {
  function handleOpenSlide() {
    props.onImageClick(props.catalogCard);
  }
  return (
    <li className="services__card">
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
      <button className="services__feedback" onClick={handleOpenSlide}>
        Подробнее
      </button>
    </li>
  );
}

export default CatalogCard;
