import React from "react";

import styles from "./sidebar.module.css";

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    // <aside>
    <>
      <div
        className={styles.dndflow}
        // style={{ border: 1px, solid, #1a192b; borderRadius: "2px" }}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        You can drag these nodes to the pane on the right.
      </div>

      <div
        className={styles.dndnode.input}
        style={{ backgroundColor: "red", color: "black" }}
        // className="dndnode input"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        // className={styles.dndnode}
        style={{ backgroundColor: "red", color: "black" }}
        // className="dndnode"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        // className="dndnode output"
        style={{ backgroundColor: "salmon", color: "black" }}
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
    </>
  );
};
