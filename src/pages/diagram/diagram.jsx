import { useRef, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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

import { CloseOutlined } from "@ant-design/icons";

import dagre from "dagre";

import "@xyflow/react/dist/style.css";

import styles from "./diagram.module.css";

// import { companyDiagram } from "../../utils/constants";
import DiagramUser from "../../components/diagram-user/diagram-user";
import DiagramComponent from "../../components/diagram-component/diagram-component";

import { selectUsers } from "../../services/users/reducer";
import { selectProjects } from "../../services/projects/reducer";
import { useLocation } from "react-router-dom";
import {
  getSidebarStatus,
  getSidebarUser,
  getSidebarTeam,
  getSidebarComponent,
  setSidebarStatus,
  setSidebarUser,
  setSidebarTeam,
  setSidebarComponent,
} from "../../services/sidebar/reducer";

import CatalogCard from "../../components/catalog-card/catalog-card";
import DiagramTeam from "../../components/diagram-team/diagram-team";
import SidebarTeam from "../../components/sidebar-team/sidebar-team";
import SidebarComponent from "../../components/sidebar-component/sidebar-component";

const Diagram = () => {
  const companyStructure = useSelector(selectUsers);
  const companyDiagram = useSelector(selectProjects);
  // function Diagram() {
  let id = 0;
  const getId = () => `dndnode_${id++}`;

  // const [panelOpen, setPanelOpen] = useState(false);

  // const handlePanelOpen = ()=> {
  //   setPanelOpen(true)
  // }

  const isSidebarOpen = useSelector(getSidebarStatus);
  const sidebarUserId = useSelector(getSidebarUser);
  const sidebarTeamId = useSelector(getSidebarTeam);
  const sidebarComponentId = useSelector(getSidebarComponent);

  const sidebarUser = companyStructure?.find(
    (i) => i.id === Number(sidebarUserId)
  );
  const sidebarTeam = companyDiagram?.teams.find(
    (i) => i.id === Number(sidebarTeamId)
  );
  const sidebarComponent = companyDiagram?.components.find(
    (i) => i.id === Number(sidebarComponentId)
  );

  const dispatch = useDispatch();
  const handleSidebarClose = () => {
    dispatch(setSidebarStatus(false));
    dispatch(setSidebarUser(null));
    dispatch(setSidebarTeam(null));
    dispatch(setSidebarComponent(null));
  };

  let sideBarTitle = null;

  if (sidebarUserId !== null) {
    sideBarTitle = "Карточка сотрудника";
  } else if (sidebarTeamId !== null) {
    sideBarTitle = "Профиль команды";
  } else if (sidebarComponentId !== null) {
    sideBarTitle = "Параметры компоненты";
  }

  let sideBarContent = null;

  if (sidebarUserId !== null) {
    sideBarContent = <CatalogCard item={sidebarUser} />;
  } else if (sidebarTeamId !== null) {
    sideBarContent = <SidebarTeam item={sidebarTeam} />;
  } else if (sidebarComponentId !== null) {
    sideBarContent = <SidebarComponent item={sidebarComponent} />;
  }

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
    diagram_team: DiagramTeam,
    diagram_user: DiagramUser,
  };

  let initialNodes = [];
  let initialEdges = [];
  let productTeams = [];

  // const productCompanyDiagram =
  companyDiagram?.teams.map((item) => {
    if (
      !item.name.includes("Маркетинг") &&
      !item.name.includes("Менеджмент") &&
      !item.name.includes("HR")
    ) {
      productTeams.push(item);
    } else return;
  });

  companyDiagram?.components.map((item) => {
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
      type: "diagram_team",
      data: {
        name: item.name,
        id: `${item.id}`,
      },
    });
  });

  companyStructure?.map((item) => {
    initialNodes.push({
      id: `${item.id}`,
      position: {
        x: 0,
        y: 0,
      },
      type: "diagram_user",
      data: {
        first_name: item.first_name,
        last_name: item.last_name,
        photo: item.photo,
        itemId: id,
        departmentId: item.departmentId,
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

  companyDiagram?.components.map((point) => {
    point.teams.map((item) => {
      initialEdges.push({
        id: `e${point.id}-${item}`,
        source: `${point.id}`,
        target: `${item}`,

        // target: `${point.id}`,
        // source: `${item.teamId}`,
      });
    });
  });

  companyStructure?.map((item) => {
    initialEdges.push({
      id: `e${item.id}-${item.teamId}`,
      source: `${item.id}`,
      target: `${item.teamId}`,
    });
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
      <div className={styles.diagram__flow} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          // handlePanelOpen={handlePanelOpen}
          // onLayout={onLayout}
          fitView
        >
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      {isSidebarOpen &&
      (sidebarUserId || sidebarTeamId || sidebarComponentId) ? (
        <div className={styles.diagram__sidebar}>
          <div className={styles.diagram__sidebar_title_container}>
            <h3 className={styles.diagram__sidebar_title}>{sideBarTitle}</h3>
            <button
              className={styles.diagram__sidebar_button_close}
              onClick={handleSidebarClose}
            >
              <CloseOutlined />
            </button>
          </div>
          <div className={styles.diagram__sidebar_content}>
            {sideBarContent}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <Diagram />
  </ReactFlowProvider>
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
