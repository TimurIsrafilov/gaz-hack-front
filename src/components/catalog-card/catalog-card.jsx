import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./catalog-card.module.css";

import { Button, Divider } from "antd";

import Links from "../links/links";

import { loadWorker } from "../../services/worker/actions";
import TeamCard from "../team-card/team-card";

function CatalogCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const location = useLocation();

  const handleUserShow = () => {
    // if (location.pathname === "/catalog") {
    dispatch(loadWorker(item.id));
    navigate(`/users/${item.id}`);
    // } else {
    //   navigate(`/users/${item.id}`);
    // }
  };

  return (
    <div className={styles.catalog__card}>
      {item ? (
        <div>
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
          <div className={styles.catalog__card_user_links}>
            <Links links={item.contacts.links} />
            <Button
              htmlType="button"
              type="primary"
              ghost
              onClick={handleUserShow}
              className={styles.catalog__card_link}
            >
              Перейти в профиль
            </Button>
          </div>
          <Divider className={styles.catalog__divider} />
          <p className={styles.catalog__card_user_position_label}>Должность</p>
          <p className={styles.catalog__card_user_position}>{item.position}</p>
          <TeamCard user={item} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default CatalogCard;
