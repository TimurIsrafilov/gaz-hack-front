import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import styles from "./contacts.module.css";

import { selectUser } from "../../services/user/reducer";
import Links from "../links/links";
import { userStructure } from "../../utils/constants";

function Contacts() {
  const user = useSelector(selectUser);
  // const user = userStructure;

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
          <Links links={user.contacts.links} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Contacts;
