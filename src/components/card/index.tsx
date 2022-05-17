import React from "react";
import { Row, Col, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
// import { ITodoCard } from "../store/store-configuration";

const TodoCard = ({todoInformation}:any) => {
  return (
    <React.Fragment>
      <Row justify="space-between">
        <Col>
          <Typography.Text strong>{todoInformation?.title}</Typography.Text>
        </Col>
        <Col>
          <EditOutlined />
          <DeleteOutlined />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TodoCard;
