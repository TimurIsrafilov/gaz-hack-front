import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Input } from "antd";

import styles from "./header.module.css";

import logo from "../../images/logo.svg";

import { selectUser } from "../../services/user/reducer";

function Header() {
  const { Search } = Input;
  const user = useSelector(selectUser);

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__logo_link}>
        <img className={styles.header__logo} src={logo} alt="логотип" />
      </Link>
      <ul className={styles.header__menu_container}>
        <li className={styles.header__menu_point}>
          <NavLink to="/catalog" className={styles.header__menu_link}>
            Справочник сотрудников{" "}
          </NavLink>{" "}
        </li>
        <li className={styles.header__menu_point}>
          <NavLink to="/company" className={styles.header__menu_link}>
            Структура компании
          </NavLink>
        </li>
        <li className={styles.header__menu_point}>
          <NavLink to="/diagram" className={styles.header__menu_link}>
            Организационная диаграмма
          </NavLink>
        </li>
      </ul>
      <Search
        placeholder="Поиск"
        size="large"
        style={{
          width: 440,
        }}
        // onSearch={onSearch}
      />

      {user ? (
        <div className={styles.header_profile_container}>
          <p
            className={styles.header__profile_name}
          >{`${user.first_name} ${user.last_name[0]}.`}</p>
          <Link to="/" className={styles.header_profile_photo_link}>
            <img
              className={styles.header__profile_photo}
              src={user.photo}
              alt="фото"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
