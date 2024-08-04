import Skills from "../skills/skills";
import User from "../user/user";
import Contacts from "../contacts/contacts";
import TeamProfile from "../team-profile/team-profile";

import styles from "./profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <User />
      <Contacts />
      <Skills />
      <TeamProfile />
    </div>
  );
}

export default Profile;
