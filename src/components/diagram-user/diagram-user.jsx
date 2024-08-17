// import { useRef } from "react";
// import { useDrag } from "react-dnd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./diagram-user.module.css";

import { Handle, Position } from "@xyflow/react";
import { loadWorker } from "../../services/worker/actions";
import {

  getSidebarStatus,
  getSidebarUser,
  getSidebarTeam,
  getSidebarComponent,


  setSidebarStatus,
  setSidebarUser,
  setSidebarTeam,
  setSidebarComponent
} from "../../services/sidebar/reducer";
function DiagramUser(props) {

  const location = useLocation();


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserShow = () => {
    // dispatch(loadWorker(props.data.id));
    // navigate(
    //   `/diagram/users/${props.data.id}`
    //   // , { replace: true }
    // );

    dispatch(setSidebarStatus(true))

    dispatch(setSidebarUser(props.data.id))
    dispatch(setSidebarTeam(null));
    dispatch(setSidebarComponent(null));

  };

  let userStyle = 0;
  if (props.data.departmentId === 203) {
    userStyle = styles.diagram__user_link_one;
  } else if (props.data.departmentId === 202) {
    userStyle = styles.diagram__user_link_two;
  } else if (props.data.departmentId === 226) {
    userStyle = styles.diagram__user_link_three;
  } else if (props.data.departmentId === 212) {
    userStyle = styles.diagram__user_link_four;
  }

  return (
    <div className={styles.diagram__user}    >
      <Handle type="source" position={Position.Bottom} />
      {/* <Link to={`./users/${props.id}`} className={styles.diagram__user_link}>
        {props.data.name}
      </Link> */}

      <button
        htmltype="button"
        type="primary"
        onClick={handleUserShow}
        className={`${styles.diagram__user_link} ${userStyle}`}
      >
        <img
          className={styles.diagram__user_avatar}
          src={props.data.photo}
          alt="avatar"
        />
        <div className={styles.diagram__user_name}>{props.data.first_name}</div>
        <div className={styles.diagram__user_surname}>
          {props.data.last_name}
        </div>
      </button>

      {/* <Handle type="target" position={Position.Top} /> */}
    </div>
  );
  // );
}

export default DiagramUser;
