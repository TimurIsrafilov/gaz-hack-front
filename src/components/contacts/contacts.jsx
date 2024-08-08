import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import styles from "./contacts.module.css";

import tg from "../../images/tg-icon.svg";
import teams from "../../images/teams-icon.svg";
import gira from "../../images/jira-icon.svg";

import { selectUser } from "../../services/user/reducer";

function Contacts() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.contacts}>
      {user ? (
        <div className={styles.contacts__container}>
          <h3 className={styles.contacts__title}>Контакты</h3>
          <h4 className={styles.contacts__menu__section_title}>Почта</h4>
          <ul className={styles.contacts__section_container}>
            {user.contacts.emails.map((item) => (
              <li className={styles.contacts__item} key={uuidv4()}>
                {item}
              </li>
            ))}
          </ul>
          <h4 className={styles.contacts__menu__section_title}>Телефон</h4>
          <ul className={styles.contacts__section_container}>
            {user.contacts.phones.map((item) => (
              <li className={styles.contacts__item} key={uuidv4()}>
                {item}
              </li>
            ))}
          </ul>
          <h4 className={styles.contacts__menu__section_title}>Ссылки</h4>
          <ul className={styles.contacts__icon_container}>
            <Link
              to={user.contacts.links[0]}
              className={styles.contacts__item_icon}
            >
              <img src={tg} alt="иконка телеграмма" />
            </Link>
            <Link
              to={user.contacts.links[1]}
              className={styles.contacts__item_icon}
            >
              <img src={teams} alt="иконка тимс" />
            </Link>
            <Link
              to={user.contacts.links[2]}
              className={styles.contacts__item_icon}
            >
              <img src={gira} alt="иконка джира" />
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contacts;
