import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./company-card.module.css";

import { Button } from "antd";

import { MoreOutlined } from "@ant-design/icons";

import { Handle, Position } from "@xyflow/react";

import Links from "../links/links";

import { loadWorker } from "../../services/worker/actions";

function CompanyCard({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserShow = () => {
    dispatch(loadWorker(data.id));
    navigate(`/users/${data.id}`
      // ,  { replace: true } 
    );
  };

  return (
    <div className={styles.company__card}>
      <Handle type="source" position={Position.Top} />
      <div className={styles.company__card_container}>
        <img
          className={styles.company__card_user_avatar}
          src={data.photo}
          alt="avatar"
        />
        <div className={styles.company__card_user_container}>
          <Button
            htmlType="button"
            type="link"
            // ghost
            onClick={handleUserShow}
            className={styles.company__card_link}
          >
            Перейти в профиль
          </Button>
          <p className={styles.company__card_user_position}>{data.position}</p>
          <p className={styles.company__card_user_employment}>
            {data.employment_type}
          </p>
        </div>
        <MoreOutlined className={styles.company__card_dots} />
      </div>
      <h4 className={styles.company__card_user_name}>
        {`${data.first_name} ${data.last_name}`}
      </h4>
      <p className={styles.company__card_user_timezone}>{data.timezone}</p>
      <Links links={data.contacts} />
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
}

export default CompanyCard;
