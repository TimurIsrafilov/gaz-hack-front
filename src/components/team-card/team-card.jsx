import styles from "./team-card.module.css";

import { v4 as uuidv4 } from "uuid";

import { companyDiagram } from "../../utils/constants";
import { companyStructure } from "../../utils/constants";

function TeamCard({ user }) {
  const projects = companyDiagram.components.find(
    (i) => i.id === user.componentId
  );
  const teams = companyDiagram.teams.find((i) => i.id === user.teamId);

  const teamUsers = [];

  teams.usersId.forEach((id) => {
    companyStructure.forEach((item) => {
      if (item.id === id) {
        teamUsers.push(item);
      }
    });
  });

  return (
    <div className={styles.team_card}>
      {companyDiagram ? (
        <div className={styles.team_card__container}>
          <h4 className={styles.team_card__title}>{projects.name}</h4>
          <p className={styles.team_card__title_team}>{projects.type}</p>
          <div className={styles.team_card__team_container}>
            <p className={styles.team_card__team_link}>{teams.name}</p>
            <div className={styles.team_card__users_container}>
              {teamUsers.slice(0, 4).map((item, index) => (
                <div key={uuidv4()}>
                  <div
                    className={styles.team_card__users_picture_container}
                    style={{
                      right: `${index * 15}px`,
                      zIndex: index,
                      backgroundColor: `${
                        index > 2 && teamUsers.length > 4
                          ? "rgba(255, 216, 191, 1)"
                          : "none"
                      }`,
                    }}
                  >
                    <img
                      className={styles.team_card__users_picture}
                      src={item.photo}
                      alt="avatar"
                      style={{
                        opacity: `${
                          index > 2 && teamUsers.length > 4 ? "0" : "1"
                        }`,
                      }}
                    />
                    <p className={styles.team_card__users_number}>
                      {index > 2 && teamUsers.length > 4
                        ? `+ ${teamUsers.length - 3}`
                        : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TeamCard;

// teams.usersId
