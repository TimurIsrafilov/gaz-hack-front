// import { useRef } from "react";
// import { useDrag } from "react-dnd";

import { Link } from "react-router-dom";
import styles from "./diagram-component.module.css";

import { Handle, Position } from "@xyflow/react";

function DiagramComponent(props) {
  // const ref = useRef(null);

  // const {data} = props;

  // const [{ isDrag }, dragRef] = useDrag({
  //   type: "node",
  //   item: props.data,
  //   collect: (monitor) => ({
  //     isDrag: monitor.isDragging(),
  //   }),
  // });

  let componentStyle = 0;
  if (props.data.id[0] === "1") {
    componentStyle = styles.diagram__component_link_one;
  } else if (props.data.id[0] === "2") {
    componentStyle = styles.diagram__component_link_two;
  } else if (props.data.id[0] === "3") {
    componentStyle = styles.diagram__component_link_three;
  } else if (props.data.id[0] === "4") {
    componentStyle = styles.diagram__component_link_four;
  }

  return (
    // !isDrag && (
      <div
      //  ref={dragRef} 
       className={styles.diagram__component}>
        <Handle type="source" position={Position.Bottom} />
        {/* <Link to="/" className={componentStyle}>
        {props.data.name}
      </Link> */}

        <div className={componentStyle}>{props.data.name}</div>
        <Handle type="target" position={Position.Top} />
      </div>
    )
  // );
}

export default DiagramComponent;
