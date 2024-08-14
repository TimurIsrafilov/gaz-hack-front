// import { useRef } from "react";
// import { useDrag } from "react-dnd";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./diagram-user.module.css";

import { Handle, Position } from "@xyflow/react";
import { loadWorker } from "../../services/worker/actions";

function DiagramUser(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserShow = () => {
    dispatch(loadWorker(props.data.id));
    navigate(
      `/users/${props.data.id}`
      // , { replace: true }
    );
  };

  // let componentStyle = 0;
  // if (props.data.id[0] === "1") {
  //   componentStyle = styles.diagram__component_link_one;
  // } else if (props.data.id[0] === "2") {
  //   componentStyle = styles.diagram__component_link_two;
  // } else if (props.data.id[0] === "3") {
  //   componentStyle = styles.diagram__component_link_three;
  // } else if (props.data.id[0] === "4") {
  //   componentStyle = styles.diagram__component_link_four;
  // }
  // background-color: rgba(54, 207, 201, 1);
  // border: 1px solid rgba(54, 207, 201, 1);
  // 255, 187, 150

  return (
    <div className={styles.diagram__user}>
      <Handle type="source" position={Position.Bottom} />
      {/* <Link to={`./users/${props.id}`} className={styles.diagram__user_link}>
        {props.data.name}
      </Link> */}

      <button
        htmltype="button"
        type="primary"
        onClick={handleUserShow}
        className={styles.diagram__user_link}
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
