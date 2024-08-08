import { useSelector } from "react-redux";

import { Tag } from "antd";

import styles from "./user.module.css";

import { selectUser } from "../../services/user/reducer";

function User() {
  const user = useSelector(selectUser);

  return (
    <div className={styles.user}>
      {user ? (
        <div className={styles.user__container}>
          <img className={styles.user__avatar} src={user.photo} alt="avatar" />

          <div className={styles.user__container}>
            <h2 className={styles.user__name}>
              {`${user.first_name} ${user.last_name}`}
            </h2>
            <p className={styles.user__title}>{user.timezone}</p>
            <Tag
              color="blue"
              style={{
                width: "max-content",
              }}
            >
              {user.employment_type}
            </Tag>
            <h4 className={styles.user__title}>Позиция</h4>
            <p className={styles.user__item}>{user.position}</p>
            <h4 className={styles.user__title}>Грейд</h4>
            <p className={styles.user__item}>{user.grade}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default User;
