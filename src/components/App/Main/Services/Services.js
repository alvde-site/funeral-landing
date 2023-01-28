import ServicesCard from "./ServicesCard/ServicesCard";

function Services(props) {
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Примеры благоустройств</h2>
      <p className="services__subtitle">Помогу вам с любой задачей</p>

      <ul className="services__catalog">
        {props.servicesData.map((servicesCard, index) => {
          return <ServicesCard servicesCard={servicesCard} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Services;
