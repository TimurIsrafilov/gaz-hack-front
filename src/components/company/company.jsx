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

import styles from "./company.module.css";

import { companyStructure } from "../../utils/constants";
import TeamCardCompany from "../team-card-company/team-card-company";

function Company() {
  const nodeTypes = {
    team_card_company: TeamCardCompany,
  };

  let numberOfFirstLevel = 0;
  companyStructure.forEach((element) => {
    if (element.level === 1) {
      numberOfFirstLevel++;
    }
    return numberOfFirstLevel;
  });

  let numberOfSecondLevel = 0;
  companyStructure.forEach((element) => {
    if (element.level === 1) {
      numberOfSecondLevel++;
    }
    return numberOfSecondLevel;
  });

  let numberOfThirdLevel = 0;
  companyStructure.forEach((element) => {
    if (element.level === 1) {
      numberOfThirdLevel++;
    }
    return numberOfThirdLevel;
  });

  let numberOfForthLevel = 0;
  companyStructure.forEach((element) => {
    if (element.level === 1) {
      numberOfForthLevel++;
    }
    return numberOfForthLevel;
  });

  let initialNodes = [];
  let initialEdges = [];
  companyStructure.map((item, index) => {
    let coordinateX = 0;
    if (item.level === 1) {
      coordinateX = 1200;
    } else if (item.level === 2) {
      coordinateX = 1200 * (index - numberOfFirstLevel + 1);
    } else if (item.level === 3) {
      coordinateX =
        numberOfForthLevel *
        800 *
        (index - numberOfFirstLevel - numberOfSecondLevel + 1);
    } else if (item.level === 4) {
      coordinateX =
        350 *
        (index -
          numberOfFirstLevel -
          numberOfSecondLevel -
          numberOfThirdLevel +
          1);
    }

    initialNodes.push({
      id: `${item.id}`,
      position: { x: coordinateX, y: item.level * 280 },
      type: "team_card_company",
      data: {
        first_name: item.first_name,
        last_name: item.last_name,
        photo: item.photo,
        position: item.position,
        grade: item.grade,
        employment_type: item.employment_type,
        timezone: item.timezone,
      },
    });
    initialEdges.push({
      id: `e${item.id}-${item.boss}`,
      source: `${item.id}`,
      target: `${item.boss}`,
    });
  });

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={styles.company}>
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

export default Company;
