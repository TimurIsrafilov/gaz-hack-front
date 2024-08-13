import { useSelector } from "react-redux";

import Skills from "../../components/skills/skills";
import User from "../../components/user/user";
import Contacts from "../../components/contacts/contacts";
import TeamProfile from "../../components/team-profile/team-profile";

import styles from "./profile.module.css";

import { selectUser } from "../../services/user/reducer";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? (
        <div className={styles.profile}>
          <User user={user} />
          <Contacts user={user} />
          <Skills user={user} />
          <TeamProfile user={user} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
