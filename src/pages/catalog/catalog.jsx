import { useSelector } from "react-redux";

import styles from "./catalog.module.css";

import { v4 as uuidv4 } from "uuid";

import { companyStructure } from "../../utils/constants";
import CatalogCard from "../../components/catalog-card/catalog-card";
import FilterPanel from "../../components/filter-panel/filter-panel";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { getSearchValue } from "../../services/search/reducer";

function Catalog() {
  const [catalogCardsToShow, setcatalogCardsToShow] =
    useState(companyStructure);

  const [filterElements, setFilterElements] = useState(null);
  const [isFilterOpened, setIsFilterOpened] = useState(true);

  const searchValue = useSelector(getSearchValue);

  const searchedCompanyStructure = [];

  companyStructure.map((item) => {
    if (
      item.first_name.toLowerCase().includes(searchValue) ||
      item.last_name.toLowerCase().includes(searchValue)
    ) {
      searchedCompanyStructure.push(item);
    } else return;
  });

  useEffect(() => {
    if (filterElements === null && searchValue === null) {
      setcatalogCardsToShow(companyStructure);
    } else if (filterElements === null && searchValue !== null) {
      setcatalogCardsToShow(searchedCompanyStructure);
    } else if (filterElements !== null && searchValue === null) {
      const filteredCompanyStructure = companyStructure.filter(function (item) {
        for (let key in filterElements) {
          if (item[key] !== null && item[key] !== filterElements[key])
            return false;
        }
        return true;
      });
      setcatalogCardsToShow(filteredCompanyStructure);
    } else if (filterElements !== null && searchValue !== null) {
      const filteredCompanyStructure = searchedCompanyStructure.filter(
        function (item) {
          for (let key in filterElements) {
            if (item[key] !== null && item[key] !== filterElements[key])
              return false;
          }
          return true;
        }
      );
      setcatalogCardsToShow(filteredCompanyStructure);
    }
  }, [filterElements, searchValue]);

  const onFullTimeChange = () => {
    setFilterElements({ ...filterElements, employment_type: "Штатные" });
  };

  const onOutsourceChange = () => {
    setFilterElements({ ...filterElements, employment_type: "Аутсорс" });
  };

  const handleGradeChange = (value) => {
    setFilterElements({ ...filterElements, grade: value });
  };

  const handleLocationeChange = (value) => {
    setFilterElements({ ...filterElements, timezone: value });
  };

  const handleDepartmentChange = (value) => {
    setFilterElements({ ...filterElements, departmentId: value });
  };

  const handleFormReset = () => {
    setcatalogCardsToShow(searchedCompanyStructure);
    setFilterElements(null);
  };

  const handleFormClose = () => {
    setIsFilterOpened(false);
  };

  const handeleFiltersOpen = () => {
    setIsFilterOpened(true);
  };

  return (
    <div className={styles.catalog}>
      {isFilterOpened ? (
        <FilterPanel
          onFullTimeChange={onFullTimeChange}
          onOutsourceChange={onOutsourceChange}
          handleGradeChange={handleGradeChange}
          handleLocationeChange={handleLocationeChange}
          handleDepartmentChange={handleDepartmentChange}
          handleFormReset={handleFormReset}
          handleFormClose={handleFormClose}
        />
      ) : (
        <Button
          type="primary"
          onClick={handeleFiltersOpen}
          className={styles.catalog__open_button}
        >
          Фильтры
        </Button>
      )}
      {catalogCardsToShow.length > 0 ? (
        <div className={styles.catalog__grid_container}>
          {catalogCardsToShow.map((item) => (
            <CatalogCard item={item} key={uuidv4()} />
          ))}
        </div>
      ) : (
        <p>"Поиск не дал результата"</p>
      )}
    </div>
  );
}

export default Catalog;
