import { useSelector } from "react-redux";

import TeamCard from "../team-card/team-card";

import styles from "./team-profile.module.css";

import { selectUser } from "../../services/user/reducer";
import { userStructure } from "../../utils/constants";

function TeamProfile() {
  // const user = useSelector(selectUser);
  const user = userStructure;

  return (
    <div className={styles.team_profile}>
      <div className={styles.team_profile__container}>
        <h3 className={styles.team_profile__title}>Активные продукты</h3>
        <p className={styles.team_profile__title_link}>Смотреть все</p>
      </div>
      <TeamCard user={user}/>
    </div>
  );
}

export default TeamProfile;
