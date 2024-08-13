import { useSelector } from "react-redux";

import Skills from "../../components/skills/skills";
import User from "../../components/user/user";
import Contacts from "../../components/contacts/contacts";
import TeamProfile from "../../components/team-profile/team-profile";

import styles from "./worker.module.css";

import { selectWorker } from "../../services/worker/reducer";

function Worker() {
  const worker = useSelector(selectWorker);

  return (
    <div>
      {worker ? (
        <div className={styles.worker}>
          <User user={worker} />
          <Contacts user={worker} />
          <Skills user={worker} />
          <TeamProfile user={worker} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Worker;
