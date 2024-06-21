import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiUnity,
  SiBlender,
  SiUnrealengine,
} from "react-icons/si";

const tools = [
  { icon: <SiUnity />, name: "Unity" },
  { icon: <SiBlender />, name: "Blender" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiUnrealengine />, name: "Unreal Engine" },
  { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{tool.name}</Tooltip>}
          >
            <div>{tool.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;
