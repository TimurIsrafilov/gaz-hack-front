import { Link } from "react-router-dom";
import styles from "./diagram-component.module.css";

import { Handle, Position } from "@xyflow/react";

function DiagramComponent({ data }) {
  let x = 0;
  if (data.id[0] === '1') {
    x = styles.diagram__component_link_one;
  } else if (data.id[0] === '2') {
    x = styles.diagram__component_link_two;
  } else if (data.id[0] === '3') {
    x = styles.diagram__component_link_three;
  } else if (data.id[0] === '4') {
    x = styles.diagram__component_link_four;
  }

  return (
    <div className={styles.diagram__component}>
      <Handle type="source" position={Position.Top} />
      <Link to="/" className={x}>
        {data.name}
      </Link>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
}

export default DiagramComponent;
