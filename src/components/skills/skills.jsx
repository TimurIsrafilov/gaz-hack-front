import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Tag } from "antd";

import styles from "./skills.module.css";

import { selectUser } from "../../services/user/reducer";

function Skills() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.skills}>
      <h3 className={styles.skills__title}>Навыки</h3>
      <h4 className={styles.skills__menu__section_title}>Иностранные языки</h4>
      <ul className={styles.skills__section_container}>
        {user
          ? user.foreign_languages.map((item) => (
              <li className={styles.skills__item} key={uuidv4()}>
                <Tag>{item}</Tag>
              </li>
            ))
          : ""}
      </ul>
      <h4 className={styles.skills__menu__section_title}>Программы</h4>
      <ul className={styles.skills__section_container}>
        {user
          ? user.programs.map((item) => (
              <li className={styles.skills__item} key={uuidv4()}>
                <Tag>{item}</Tag>
              </li>
            ))
          : ""}
      </ul>
      <h4 className={styles.skills__menu__section_title}>Навыки</h4>
      <ul className={styles.skills__section_container}>
        {user
          ? user.skills.map((item) => (
              <li className={styles.skills__item} key={uuidv4()}>
                <Tag>{item}</Tag>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Skills;