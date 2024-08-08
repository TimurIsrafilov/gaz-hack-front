import { Link } from "react-router-dom";
import styles from "./company-card.module.css";

import { v4 as uuidv4 } from "uuid";

import { MoreOutlined } from "@ant-design/icons";

import tg from "../../images/tg-icon.svg";
import teams from "../../images/teams-icon.svg";
import gira from "../../images/jira-icon.svg";
import { Handle, Position } from "@xyflow/react";

function CompanyCard({ data }) {
  return (
    <div className={styles.company__team_card}>
      <Handle type="source" position={Position.Top} />
      <div className={styles.company__team_card_container}>
        <img
          className={styles.company__team_card_user_avatar}
          src={data.photo}
          alt="avatar"
        />
        <div className={styles.company__team_card_user_container}>
          <Link to="/" className={styles.company__team_card__link}>
            Перейти в профиль
          </Link>
          <p className={styles.company__team_card_user_position}>
            {data.position}
          </p>
          <p className={styles.company__team_card_user_employment}>
            {data.employment_type}
          </p>
        </div>
        <MoreOutlined className={styles.company__team_card__dots} />
      </div>
      <h4 className={styles.company__team_card_user_name}>
        {`${data.first_name} ${data.last_name}`}
      </h4>
      <p className={styles.company__team_card_user_timezone}>{data.timezone}</p>
      <ul className={styles.company__team_card__icon_container}>
        {data.contacts.map((item) => (
          <li className={styles.company__team_card__item_icon} key={uuidv4()}>
            <Link to={item}>
              <img src={tg} alt="иконка телеграмма" />
            </Link>
          </li>
        ))}
      </ul>

      <Handle type="target" position={Position.Bottom} />
    </div>
  );
}

export default CompanyCard;
