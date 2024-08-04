import { useSelector } from "react-redux";

import { selectUser } from "../../services/user/reducer";

import styles from "./user.module.css";

import { Tag } from "antd";

function User() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.user}>
      <img
        className={styles.user__avatar}
        src="https://shkolafdorovka-r64.gosweb.gosuslugi.ru/netcat_files/9/167/avatar_5.png"
        alt="avatar"
      />
      <div className={styles.user__container}>
        {user ? (
          <h2 className={styles.user__name}>
            {`${user.first_name} ${user.last_name}`}{" "}
          </h2>
        ) : (
          ""
        )}
        {user ? <p className={styles.user__title}>{user.timezone}</p> : ""}
        {user ? (
          <Tag
            color="blue"
            style={{
              width: "max-content",
            }}
          >
            {user.employment_type}`
          </Tag>
        ) : (
          ""
        )}
        <h4 className={styles.user__title}>Позиция</h4>
        {user ? <p className={styles.user__item}>{user.position}</p> : ""}
        <h4 className={styles.user__title}>Грейд </h4>
        {user ? <p className={styles.user__item}>{user.grade}</p> : ""}
      </div>
    </div>
  );
}

export default User;
