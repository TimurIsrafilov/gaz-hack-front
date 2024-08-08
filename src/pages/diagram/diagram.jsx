import { useCallback } from "react";

import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import dagre from "dagre";

import "@xyflow/react/dist/style.css";

import styles from "./diagram.module.css";

import { companyDiagram } from "../../utils/constants";
import DiagramComponent from "../../components/diagram-component/diagram-component";

function Diagram() {
  const nodeTypes = {
    diagram_component: DiagramComponent,
  };

  let initialNodes = [];
  let initialEdges = [];

  // Object.values(companyDiagram).forEach((value) => {
  //   value.map((item, index) => {
  //     initialNodes.push({
  //       id: `${item.id}`,
  //       position: {
  //         x: Math.floor(Math.random() * 1800),
  //         y: Math.floor(Math.random() * 1800),
  //       },
  //       type: "diagram_component",
  //       data: {
  //         name: item.name,
  //         id: `${item.id}`,
  //       },
  //     });
  //   });
  // });

  companyDiagram.components.map((item) => {
    initialNodes.push({
      id: `${item.id}`,
      position: {
        x: Math.floor(Math.random() * 1800),
        y: Math.floor(Math.random() * 1800),
      },
      type: "diagram_component",
      data: {
        name: item.name,
        id: `${item.id}`,
      },
    });
  });

  companyDiagram.teams.map((item) => {
    initialNodes.push({
      id: `${item.id}`,
      position: {
        x: Math.floor(Math.random() * 1800),
        y: Math.floor(Math.random() * 1800),
      },
      type: "diagram_component",
      data: {
        name: item.name,
        id: `${item.id}`,
      },
    });
  });

  companyDiagram.components.map((item) => {
    initialEdges.push({
      id: `e${item.id}-${item.teamId}`,
      source: `${item.id}`,
      target: `${item.teamId}`,
    });
  });

  // companyDiagram.teams.map((item) => {
  //   initialEdges.push({
  //     id: `e${item.id}-${item.componentsId}`,
  //     source: `${item.id}`,
  //     target: `${item.componentsId}`,
  //   });
  // });

  //   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  //   const onConnect = useCallback(
  //     (params) => setEdges((eds) => addEdge(params, eds)),
  //     [setEdges]
  //   );

  //   return (
  //     <div className={styles.diagram}>
  //       <ReactFlow
  //         nodes={nodes}
  //         edges={edges}
  //         onNodesChange={onNodesChange}
  //         onEdgesChange={onEdgesChange}
  //         onConnect={onConnect}
  //         nodeTypes={nodeTypes}
  //         fitView
  //       >
  //         <Controls />
  //         <MiniMap />
  //       </ReactFlow>
  //     </div>
  //   );
  // }

  // export default Diagram;

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 150;
  const nodeHeight = 150;

  const getLayoutedElements = (nodes, edges) => {
    dagreGraph.setGraph({});

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    const newNodes = nodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const newNode = {
        ...node,
        position: {
          x: nodeWithPosition.x - nodeWidth / 2,
          y: nodeWithPosition.y - nodeWidth / 2,
        },
      };

      return newNode;
    });

    return { nodes: newNodes, edges };
  };

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {},
          eds,
        ),
      ),
    [],
  );
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges],
  );

  return (
    <div className={styles.diagram}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Diagram;
