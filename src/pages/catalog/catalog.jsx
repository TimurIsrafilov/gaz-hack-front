import styles from "./catalog.module.css";

import { v4 as uuidv4 } from "uuid";

import { companyStructure } from "../../utils/constants";
import CatalogCard from "../../components/catalog-card/catalog-card";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__container}>
        {companyStructure.map((item) => (
          <CatalogCard item={item} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
