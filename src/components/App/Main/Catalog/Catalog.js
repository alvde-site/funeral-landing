import CatalogCard from "./CatalogCard/CatalogCard";
import { catalogData } from "../../../../utils/memorials";

function Catalog(props) {
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Каталог памятников</h2>

      <ul className="services__catalog">
        {catalogData.map((catalogCard, index) => {
          return <CatalogCard onSlide={props.onSlide} catalogCard={catalogCard} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Catalog;
