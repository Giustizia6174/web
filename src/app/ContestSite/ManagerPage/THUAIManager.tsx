import React from "react";
import { Col, Layout, Row, Space } from "antd";
import { ContestProps } from "..";
import Setting from "./Setting";
import ManageTeams from "./ManageTeams";
import EditInfo from "./EditInfo";
import Competition from "./Competition";
import EditPlayer from "./EditPlayer";
import UploadMap from "./UploadMap";
import UploadWebGL from "./UploadWebGL";
import EditTimeline from "./EditTimeline";

const THUAIManager: React.FC<ContestProps> = ({ mode, user }) => {
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
          <Col span={16}>
            <EditInfo mode={mode} user={user} />
          </Col>
          <Col span={8}>
            <Setting mode={mode} user={user} />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={12}>
            <EditTimeline mode={mode} user={user} />
          </Col>
          <Col span={12}>
            <UploadWebGL mode={mode} user={user} />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={24}>
            <ManageTeams mode={mode} user={user} />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={12}>
            <EditPlayer mode={mode} user={user} />
          </Col>
          <Col span={12}>
            <UploadMap mode={mode} user={user} />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
          <Col span={24}>
            <Competition mode={mode} user={user} />
          </Col>
        </Row>
      </Space>
    </Layout>
  );
};

export default THUAIManager;
