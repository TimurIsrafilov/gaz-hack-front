import { useCallback } from "react";

import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import styles from "./diagram.module.css";

function Diagram() {
  const initialNodes = [
    { id: "1", position: { x: 200, y: 50 }, data: { label: "it компонент" } },
    { id: "2", position: { x: 0, y: 150 }, data: { label: "2" } },
    { id: "3", position: { x: 400, y: 150 }, data: { label: "3" } },
  ];
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={styles.diagram}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Diagram;
