import styles from "./team-card.module.css";

function TeamCard() {
  return (
    <div className={styles.team_card}>
      <h4 className={styles.team_card__title}>Сервис</h4>
      <p className={styles.team_card__title_team}>Дизайн</p>
      <div className={styles.team_card__team_container}>
        <p className={styles.team_card__team_link}>название команды</p>
      </div>
    </div>
  );
}

export default TeamCard;
