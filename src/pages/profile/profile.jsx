import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./profile.module.css";

import User from "../../components/user/user";
import Contacts from "../../components/contacts/contacts";
import Skills from "../../components/skills/skills";
import TeamProfile from "../../components/team-profile/team-profile";

import { selectUser } from "../../services/user/reducer";
import { selectWorker } from "../../services/worker/reducer";

// changes to replace missed backend data to mock data
import { user } from "../../utils/mockdata";
import { user as worker } from "../../utils/mockdata";

function Profile() {
  const location = useLocation();

  // changes to replace missed backend data to mock data
  // const user = useSelector(selectUser);
  // const worker = useSelector(selectWorker);

  const currentUser = location.pathname === "/" ? user : worker;

  return (
    <div>
      {currentUser ? (
        <div className={styles.profile}>
          <User user={currentUser} />
          <Contacts user={currentUser} />
          <Skills user={currentUser} />
          <TeamProfile user={currentUser} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
