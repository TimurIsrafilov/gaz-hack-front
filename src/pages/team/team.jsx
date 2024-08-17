import React, { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { useSelector, useDispatch } from "react-redux";

// import {

//   getSidebarTeam,

// } from "../../services/sidebar/reducer";

import { selectProjects } from "../../services/projects/reducer";

import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
import { CreateNodesAndEdges } from "./utils";

// import "./index.css";
import styles from "./team.module.css";
import CompanyCard from "../../components/company-card/company-card";
import DiagramUser from "../../components/diagram-user/diagram-user";
import TeamUser from "../../components/team-user/team-user";
import SidebarTeam from "../../components/sidebar-team/sidebar-team";

const Team = () => {
  const { nodes: initialNodes, edges: initialEdges } = CreateNodesAndEdges();

  const edgeTypes = {
    floating: FloatingEdge,
  };

  const nodeTypes = {
    team_card_company: TeamUser,
  };
  // const sidebarTeamId = useSelector(getSidebarTeam);


  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "floating",
          },
          eds
        )
      ),
    [setEdges]
  );



  const companyDiagram = useSelector(selectProjects);

  // const sidebarTeam = companyDiagram?.teams.find(
  //   (i) => i.id === Number(sidebarTeamId)
  // );

  return (
    <div className={styles.team}>
      <div className={styles.team__flow}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          connectionLineComponent={FloatingConnectionLine}
        >
          <Controls />
    
        </ReactFlow>
        
      </div>


      <div className={styles.diagram__sidebar}>
          <div className={styles.diagram__sidebar_title_container}>
            <h3 className={styles.diagram__sidebar_title}>Профиль команды</h3>

          </div>
          <div className={styles.diagram__sidebar_content}>
          <SidebarTeam 
          // item={sidebarTeam}
           />
          </div>
        </div>



    </div>
  );
};

export default Team;
