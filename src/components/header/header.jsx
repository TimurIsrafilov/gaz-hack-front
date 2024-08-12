import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Input } from "antd";

import styles from "./header.module.css";

import gaz_logo from "../../images/gaz_logo.svg";

import { selectUser } from "../../services/user/reducer";
import { userStructure } from "../../utils/constants";

function Header() {
  const { Search } = Input;
  const user = useSelector(selectUser);
  // const user = userStructure;

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={gaz_logo} alt="логотип" />
      <ul className={styles.header__menu_container}>
        <li className={styles.header__menu_point}>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive
                ? styles.header__menu_link_active
                : styles.header__menu_link
            }
          >
            Справочник сотрудников{" "}
          </NavLink>{" "}
        </li>
        <li className={styles.header__menu_point}>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive
                ? styles.header__menu_link_active
                : styles.header__menu_link
            }
          >
            Структура компании
          </NavLink>
        </li>
        <li className={styles.header__menu_point}>
          <NavLink
            to="/diagram"
            className={({ isActive }) =>
              isActive
                ? styles.header__menu_link_active
                : styles.header__menu_link
            }
          >
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
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? styles.header_profile_container_active
              : styles.header_profile_container
          }
        >
          <p
            className={styles.header__profile_name}
          >{`${user.first_name} ${user.last_name[0]}.`}</p>
          <img
            className={styles.header__profile_photo}
            src={user.photo}
            alt="фото"
          />
        </NavLink>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
