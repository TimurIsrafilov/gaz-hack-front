// import { teamef } from "react";
// import { useDrag } from "react-dnd";

import { Link } from "react-router-dom";
import styles from "./diagram-team.module.css";

import { Handle, Position } from "@xyflow/react";

import { useDispatch } from "react-redux";

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

import team_icon from "../../images/team_icon.svg";

function DiagramTeam(props) {
  // const ref = teamef(null);

  // const {data} = props;

  // const [{ isDrag }, dragRef] = useDrag({
  //   type: "node",
  //   item: props.data,
  //   collect: (monitor) => ({
  //     isDrag: monitor.isDragging(),
  //   }),
  // });

  const dispatch = useDispatch();

  const handleTeamShow = () => {
    // dispatch(loadWorker(props.data.id));
    // navigate(
    //   `/diagram/teams/${props.data.id}`
    //   // , { replace: true }
    // );

    dispatch(setSidebarStatus(true));
    dispatch(setSidebarUser(null));
    dispatch(setSidebarTeam(props.data.id));
    dispatch(setSidebarComponent(null));

  };

  let teamStyle = 0;
  if (props.data.name.includes("Девелопмент")) {
    teamStyle = styles.diagram__team_link_one;
  } else if (props.data.name.includes("Дизайн")) {
    teamStyle = styles.diagram__team_link_two;
  } else if (props.data.name.includes("Девопсы")) {
    teamStyle = styles.diagram__team_link_three;
  } else if (props.data.name.includes("Анализ")) {
    teamStyle = styles.diagram__team_link_four;
  }

  return (
    // !isDrag && (
    <div
      //  ref={dragRef}
      className={styles.diagram__team}
    >
      <Handle type="source" position={Position.Bottom} />
      {/* <Link to="/" className={teamStyle}>
        {props.data.name}
      </Link> */}

      <button
        htmltype="button"
        type="primary"
        onClick={handleTeamShow}
        className={`${styles.diagram__team_link} ${teamStyle}`}
        // style={{teamStyle}}
      >
        <img
          className={styles.diagram__team_icon}
          src={team_icon}
          alt="team-icon"
        />
        <div className={styles.diagram__team_name}>{props.data.name}</div>
      </button>

      <Handle type="target" position={Position.Top} />
    </div>
  );
  // );
}

export default DiagramTeam;
