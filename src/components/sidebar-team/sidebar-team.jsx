import { useLocation, useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";

import styles from "./sidebar-team.module.css";

import { Button, Divider } from "antd";

import Links from "../links/links";

import { loadWorker } from "../../services/worker/actions";
import TeamCard from "../team-card/team-card";
import CompanyCard from "../company-card/company-card";

import { selectUsers } from "../../services/users/reducer";

function SidebarTeam({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const location = useLocation();

  const handleTeamShow = () => {
    // if (location.pathname === "/catalog") {

    navigate(`/team/${item.id}`);

    // } else {
    //   navigate(`/users/${item.id}`);
    // }
  };


  const companyStructure = useSelector(selectUsers);

  const lead = companyStructure?.find((i) => i.id === item?.team_leadId
);

  return (
    <div className={styles.sidebar_team}>
      {item ? (
        <div className={styles.sidebar_team__container}>
          <h3 className={styles.sidebar_team__point}>{item.name}</h3>
          <div className={styles.sidebar_team__point}>Perfomance команды</div>
          <p className={styles.sidebar_team__text}>{item.performance}</p>
          <div className={styles.sidebar_team__point}>Описание</div>
          <p className={styles.sidebar_team__text}>{item.description}</p>

          <div className={styles.sidebar_team__point}>Руководитель команды</div>
          <div className={styles.sidebar_team__lead_container}>
            {/* <img
              className={styles.sidebar_component__user_avatar}
              src={lead.photo}
              alt="avatar"
            />
            <p
              className={styles.sidebar_component__user_text}
            >{`${lead.first_name} ${lead.last_name}`}</p> */}

            <CompanyCard data={lead} />
          </div>



          <Button
            htmlType="button"
            type="primary"
            ghost
            onClick={handleTeamShow}
            className={styles.catalog__card_link}
          >
            Перейти в профиль команды
          </Button>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default SidebarTeam;
