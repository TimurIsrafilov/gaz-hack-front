// import { useRef, useCallback } from "react";

// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// import {
//   ReactFlow,
//   MiniMap,
//   Controls,
//   useNodesState,
//   useEdgesState,
//   addEdge,

//   // ReactFlow,
//   ReactFlowProvider,
//   // addEdge,
//   // useNodesState,
//   // useEdgesState,
//   // Controls,
//   useReactFlow,
// } from "@xyflow/react";

// import dagre from "dagre";

// import "@xyflow/react/dist/style.css";

// import styles from "./diagram.module.css";

// import { companyDiagram } from "../../utils/constants";
// import DiagramComponent from "../../components/diagram-component/diagram-component";

// function Diagram() {

//   const nodeTypes = {
//     diagram_component: DiagramComponent,
//   };

//   let initialNodes = [];
//   let initialEdges = [];

//   // Object.values(companyDiagram).forEach((value) => {
//   //   value.map((item, index) => {
//   //     initialNodes.push({
//   //       id: `${item.id}`,
//   //       position: {
//   //         x: Math.floor(Math.random() * 1800),
//   //         y: Math.floor(Math.random() * 1800),
//   //       },
//   //       type: "diagram_component",
//   //       data: {
//   //         name: item.name,
//   //         id: `${item.id}`,
//   //       },
//   //     });
//   //   });
//   // });

//   companyDiagram.components.map((item) => {
//     initialNodes.push({
//       id: `${item.id}`,
//       position: {
//         // x: Math.floor(Math.random() * 1800),
//         // y: Math.floor(Math.random() * 1800),
//         x: 0,
//         y: 0,
//       },
//       type: "diagram_component",
//       data: {
//         name: item.name,
//         id: `${item.id}`,
//       },
//     });
//   });

//   companyDiagram.teams.map((item) => {
//     initialNodes.push({
//       id: `${item.id}`,
//       position: {
//         // x: Math.floor(Math.random() * 1800),
//         // y: Math.floor(Math.random() * 1800),
//         x: 0,
//         y: 0,
//       },
//       type: "diagram_component",
//       data: {
//         name: item.name,
//         id: `${item.id}`,
//       },
//     });
//   });

//   companyDiagram.components.map((item) => {
//     initialEdges.push({
//       id: `e${item.id}-${item.teamId}`,
//       source: `${item.id}`,
//       target: `${item.teamId}`,
//     });
//   });

//   // companyDiagram.teams.map((item) => {
//   //   initialEdges.push({
//   //     id: `e${item.id}-${item.componentsId}`,
//   //     source: `${item.id}`,
//   //     target: `${item.componentsId}`,
//   //   });
//   // });

//   //   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   //   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   //   const onConnect = useCallback(
//   //     (params) => setEdges((eds) => addEdge(params, eds)),
//   //     [setEdges]
//   //   );

//   //   return (
//   //     <div className={styles.diagram}>
//   //       <ReactFlow
//   //         nodes={nodes}
//   //         edges={edges}
//   //         onNodesChange={onNodesChange}
//   //         onEdgesChange={onEdgesChange}
//   //         onConnect={onConnect}
//   //         nodeTypes={nodeTypes}
//   //         fitView
//   //       >
//   //         <Controls />
//   //         <MiniMap />
//   //       </ReactFlow>
//   //     </div>
//   //   );
//   // }

//   // export default Diagram;

//   const dagreGraph = new dagre.graphlib.Graph();
//   dagreGraph.setDefaultEdgeLabel(() => ({}));

//   const nodeWidth = 150;
//   const nodeHeight = 150;

//   const getLayoutedElements = (nodes, edges) => {
//     dagreGraph.setGraph({});

//     nodes.forEach((node) => {
//       dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
//     });

//     edges.forEach((edge) => {
//       dagreGraph.setEdge(edge.source, edge.target);
//     });

//     dagre.layout(dagreGraph);

//     const newNodes = nodes.map((node) => {
//       const nodeWithPosition = dagreGraph.node(node.id);
//       const newNode = {
//         ...node,
//         position: {
//           x: nodeWithPosition.x - nodeWidth / 2,
//           y: nodeWithPosition.y - nodeWidth / 2,
//         },
//       };

//       return newNode;
//     });

//     return { nodes: newNodes, edges };
//   };

//   const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
//     initialNodes,
//     initialEdges
//   );

//   const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge({}, eds)),
//     []
//   );
//   const onLayout = useCallback(
//     (direction) => {
//       const { nodes: layoutedNodes, edges: layoutedEdges } =
//         getLayoutedElements(nodes, edges, direction);

//       setNodes([...layoutedNodes]);
//       setEdges([...layoutedEdges]);
//     },
//     [nodes, edges]
//   );

//   return (
//     <div className={styles.diagram}>
//       <DndProvider backend={HTML5Backend}>
//         <ReactFlow
//           nodes={nodes}
//           edges={edges}
//           onNodesChange={onNodesChange}
//           onEdgesChange={onEdgesChange}
//           onConnect={onConnect}
//           nodeTypes={nodeTypes}
//           fitView
//         >
//           <Controls />
//           <MiniMap />
//         </ReactFlow>
//       </DndProvider>
//     </div>
//   );
// }

// export default Diagram;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useRef, useCallback } from "react";

import {
  ReactFlow,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";

import dagre from "dagre";

import "@xyflow/react/dist/style.css";

import styles from "./diagram.module.css";

import { companyDiagram } from "../../utils/constants";
import DiagramComponent from "../../components/diagram-component/diagram-component";

const Diagram = () => {
  // function Diagram() {
  let id = 0;
  const getId = () => `dndnode_${id++}`;

  const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   []
  // );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition]
  );

  const nodeTypes = {
    diagram_component: DiagramComponent,
  };

  let initialNodes = [];
  let initialEdges = [];
  let productTeams = [];

  // const productCompanyDiagram =
  companyDiagram.teams.map((item) => {
    if (
      !item.name.includes("Маркетинг") &&
      !item.name.includes("Менеджмент") &&
      !item.name.includes("HR")
    ) {
      productTeams.push(item);
    } else return;
  });

  companyDiagram.components.map((item) => {
    initialNodes.push({
      id: `${item.id}`,
      position: {
        x: 0,
        y: 0,
      },
      type: "diagram_component",
      data: {
        name: item.name,
        id: `${item.id}`,
      },
    });
  });

  productTeams.map((item) => {
    initialNodes.push({
      id: `${item.id}`,
      position: {
        x: 0,
        y: 0,
      },
      type: "diagram_component",
      data: {
        name: item.name,
        id: `${item.id}`,
      },
    });
  });

  // companyDiagram.teams.map((item) => {
  //   initialEdges.push({
  //     id: `e${item.id}-${item.componentId}`,
  //     source: `${item.id}`,
  //     target: `${item.componentId}`,

  //     // target: `${item.id}`,
  //     // source: `${item.componentId}`,
  //   });
  // });

  companyDiagram.components.map((point) => {
    point.teamId.map((item)=> {
    initialEdges.push({
      id: `e${point.id}-${item}`,
      source: `${point.id}`,
      target: `${item}`,

      // target: `${point.id}`,
      // source: `${item.teamId}`,
    })})
  });

  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const nodeWidth = 300;
  const nodeHeight = 300;

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
                    // y: 300 * node.data
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
    (params) => setEdges((eds) => addEdge({}, eds)),
    []
  );
  // const onLayout = useCallback(
  //   (direction) => {
  //     const { nodes: layoutedNodes, edges: layoutedEdges } =
  //       getLayoutedElements(nodes, edges, direction);

  //     setNodes([...layoutedNodes]);
  //     setEdges([...layoutedEdges]);
  //   },
  //   [nodes, edges]
  // );

  return (
    <div className={styles.diagram}>
      <div className={styles.diagram} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          // onLayout={onLayout}
          fitView
        >
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <Diagram />
  </ReactFlowProvider>
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
