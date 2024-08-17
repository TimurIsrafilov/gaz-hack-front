import styles from "./diagram-new-user.module.css";

import { Handle, Position } from "@xyflow/react";

import user from "./../../images/user.svg";

function DiagramNewUser({data}) {
  return (
    <div className={styles.diagram_new_user}>
      <Handle type="source" position={Position.Bottom} />
      <img
        className={styles.diagram_new_user__avatar}
        src={user}
        alt="avatar"
      />
      <div className={styles.diagram_new_user__position}>{data.label}</div>
    </div>
  );
}

export default DiagramNewUser;
