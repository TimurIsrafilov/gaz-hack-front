import TeamCard from "../team-card/team-card";
import styles from "./team-profile.module.css";

function TeamProfile() {
  return (
    <div className={styles.team_profile}>
      <div className={styles.team_profile__container}>
        <h3 className={styles.team_profile__title}>Активные продукты</h3>
        <p className={styles.team_profile__title_link}>
          Смотреть все
        </p>
      </div>
      <TeamCard />
    </div>
  );
}

export default TeamProfile;
