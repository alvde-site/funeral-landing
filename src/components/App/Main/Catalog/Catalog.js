import CatalogCard from "./CatalogCard/CatalogCard";
import { catalogData } from "../../../../utils/memorials";

function Catalog() {
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Каталог памятников</h2>

      <ul className="services__catalog">
        {catalogData.map((сatalogCard, index) => {
          return <CatalogCard сatalogCard={сatalogCard} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Catalog;
