import { Input } from "antd";

import styles from "./header.module.css";

import logo from "../../images/logo.svg";

function Header() {
  const { Search } = Input;

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="логотип" />
      <ul className={styles.header__menu_container}>
        <li className={styles.header__menu_point}>Справочник сотрудников </li>
        <li className={styles.header__menu_point}>Структура компании</li>
        <li className={styles.header__menu_point}>Организационная диаграмма</li>
      </ul>

      <Search
        placeholder="Поиск"
        size="large"
        style={{
          width: 440,
        }}
        // onSearch={onSearch}
      />

      <div className={styles.header_profile_container}>
        <p className={styles.header__profile_name}>Константин К.</p>
        <img className={styles.header__profile_photo} src={logo} alt="фото" />
      </div>
    </div>
  );
}

export default Header;
