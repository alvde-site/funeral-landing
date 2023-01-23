function Reviews() {
  return (
    <section className="reviews" id={"reviews"}>
      <h2 className="reviews__title">Что говорят наши клиенты</h2>

      <ul className="reviews__list">
        {/* {props.servicesData.map((servicesCard, index) => {
          return <ServicesCard servicesCard={servicesCard} key={index} />;
        })} */}
      </ul>
    </section>
  );
}

export default Reviews;
