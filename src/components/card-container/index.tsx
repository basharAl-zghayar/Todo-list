import React, { useState } from "react";
import { Card, Row, Col, Button, Modal } from "antd";
import TodoCard from "../card";
import { useSelector, useDispatch } from "react-redux";
import AddModal from "../add-modal";
const CardContainer = () => {
  const todoMissions = useSelector((state: any) => state?.todo?.todoMissions);
  const inProgressMissions = useSelector(
    (state: any) => state?.todo?.inProgressMissions
  );
  const doneMissions = useSelector((state: any) => state?.todo?.doneMissions);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Card
        title="My Todo List"
        extra={
         <AddModal />
        }
      >
        <Row gutter={[24, 24]} justify="space-between" style={{minHeight:'600px'}}>
          <Col
            md={8}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "0 8px",
            }}
          >
            <Card title="Todo" style={{minHeight:'600px'}}>
              {todoMissions?.map((mission: any) => {
                return <TodoCard todoInformation={mission} />;
              })}
            </Card>
          </Col>
          <Col
            md={7}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "0 8px",
            }}
          >
            <Card title="InProgress" style={{minHeight:'600px'}}>
              {" "}
              {inProgressMissions?.map((mission: any) => {
                return <TodoCard todoInformation={mission} />;
              })}
            </Card>
          </Col>
          <Col
            md={8}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              margin: "0 8px",
            }}
          >
            <Card title="Done" style={{minHeight:'600px'}}>
              {doneMissions?.map((mission: any) => {
                return <TodoCard todoInformation={mission} />;
              })}
            </Card>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
export default CardContainer;
