import { Link } from "react-router-dom";
import styles from "./catalog-card.module.css";

import { v4 as uuidv4 } from "uuid";

import tg from "../../images/tg-icon.svg";
import teams from "../../images/teams-icon.svg";
import gira from "../../images/jira-icon.svg";

function CatalogCard({ item }) {
  return (
    <div className={styles.catalog__card}>
      <div className={styles.catalog__card_container}>

        <img
          className={styles.catalog__card_user_avatar}
          src={item.photo}
          alt="avatar"
        />
        <div className={styles.catalog__card_user_container}>
          <h4 className={styles.catalog__card_user_name}>
            {`${item.first_name} ${item.last_name}`}
          </h4>

          <p className={styles.catalog__card_user_timezone}>
            {`${item.town}, ${item.timezone}`}
          </p>
          <p className={styles.catalog__card_user_employment}>
            {item.employment_type}
          </p>
        </div>
        </div>
        <div className={styles.catalog__card_user_container}>
          <Link to="/" className={styles.catalog__card__link}>
            Перейти в профиль
          </Link>
        </div>

        <p className={styles.catalog__card_user_position}>{item.position}</p>
     

      <ul className={styles.catalog__ard__icon_container}>
        {item.contacts.link.map((item) => (
          <li className={styles.catalog__card__item_icon} key={uuidv4()}>
            <Link to={item}>
              <img src={tg} alt="иконка телеграмма" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogCard;
