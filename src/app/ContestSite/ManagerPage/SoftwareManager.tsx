import React from "react";
import { Col, Layout, Row, Space } from "antd";
import { ContestProps } from "..";
import ManageTeams from "./ManageTeams";
import EditInfo from "./EditInfo";
import EditTimeline from "./EditTimeline";

const SoftwareManager: React.FC<ContestProps> = ({ mode, user }) => {
  return (
    <Layout>
      <Space
        direction="vertical"
        size="large"
        style={{
          display: "flex",
          border: "0px solid #ccc",
          padding: "4vh 4vw",
          color: mode === "dark" ? "white" : "initial",
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true} align="stretch">
          <Col span={24}>
            <EditInfo mode={mode} user={user} />
          </Col>
        </Row>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={24}>
            <EditTimeline mode={mode} user={user} />
          </Col>
        </Row>
        
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={24}>
            <ManageTeams mode={mode} user={user} />
          </Col>
        </Row>
        
      </Space>
    </Layout>
  );
};

export default SoftwareManager;
