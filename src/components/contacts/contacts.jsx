import styles from "./contacts.module.css";

import tg from "../../images/tg-icon.svg";
import teams from "../../images/teams-icon.svg";
import gira from "../../images/jira-icon.svg";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.contacts__title}>Контакты</h3>
      <h4 className={styles.contacts__menu__section_title}>Почта</h4>
      <ul className={styles.contacts__section_container}>
        <li className={styles.contacts__item}>
          konstantin.konstantinov@gmail.com
        </li>
        <li className={styles.contacts__item}>nice.dude@mail.ru</li>
      </ul>
      <h4 className={styles.contacts__menu__section_title}>Телефон</h4>
      <ul className={styles.contacts__section_container}>
        <li className={styles.contacts__item}>+7 913 639-80-03</li>
        <li className={styles.contacts__item}>+7 915 752-08-23</li>
      </ul>
      <h4 className={styles.contacts__menu__section_title}>Ссылки</h4>
      <ul className={styles.contacts__icon_container}>
        <li className={styles.contacts__item_icon}>
          <img src={tg} alt="иконка телеграмма" />
        </li>
        <li className={styles.contacts__item_icon}>
          <img src={teams} alt="иконка тимс" />
        </li>
        <li className={styles.contacts__item_icon}>
          <img src={gira} alt="иконка джира" />
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
