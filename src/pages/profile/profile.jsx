import Skills from "../../components/skills/skills";
import User from "../../components/user/user";
import Contacts from "../../components/contacts/contacts";
import TeamProfile from "../../components/team-profile/team-profile";

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
