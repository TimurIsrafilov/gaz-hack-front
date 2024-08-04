import { Link } from "react-router-dom";
import styles from "./team-card-company.module.css";

import { MoreOutlined } from "@ant-design/icons";

import tg from "../../images/tg-icon.svg";
import teams from "../../images/teams-icon.svg";
import gira from "../../images/jira-icon.svg";
import { Handle, Position } from "@xyflow/react";

function TeamCardCompany({ data }) {
  return (
    <div className={styles.team_card_company}>
      <Handle type="source" position={Position.Top} />
      <div className={styles.team_card_company_container}>
        <img
          className={styles.team_card_company_user_avatar}
          src={data.photo}
          alt="avatar"
        />
        <div className={styles.team_card_company_user_container}>
          <Link to="/" className={styles.team_card_company__link}>
            Перейти в профиль
          </Link>
          <p className={styles.team_card_company_user_position}>
            {data.position}
          </p>
          <p className={styles.team_card_company_user_employment}>
            {data.employment_type}
          </p>
        </div>
        <MoreOutlined className={styles.team_card_company__dots} />
      </div>
      <h4 className={styles.team_card_company_user_name}>
        {`${data.first_name} ${data.last_name}`}
      </h4>
      <p className={styles.team_card_company_user_timezone}>{data.timezone}</p>
      <ul className={styles.team_card_company__icon_container}>
        <li className={styles.team_card_company__item_icon}>
          <img src={tg} alt="иконка телеграмма" />
        </li>
        <li className={styles.team_card_company__item_icon}>
          <img src={teams} alt="иконка тимс" />
        </li>
        <li className={styles.team_card_company__item_icon}>
          <img src={gira} alt="иконка джира" />
        </li>
      </ul>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
}

export default TeamCardCompany;
