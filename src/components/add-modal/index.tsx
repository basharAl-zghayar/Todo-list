import React, { useState } from "react";
import { Row, Col, Modal, Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addITodoCard } from "../store/store-configuration";
const AddModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formValue, setFormValue] = useState<any>();

  const dispatch = useDispatch();

  const handleChange = (value: any, type: any) => {
    const newValue = formValue;
    newValue[type] = value;
    setFormValue(newValue);
  };

  return (
    <React.Fragment>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setModalVisible(true)}
      >
        Add New
      </Button>
      <Modal
        visible={isModalVisible}
        okText="Add"
        onOk={() => dispatch(addITodoCard(formValue))}
        onCancel={() => setModalVisible(false)}
        closable
      >
        <Row gutter={24}>
          <Col md={12}>Title</Col>
          <Col md={12}>Body</Col>
        </Row>
        <Row gutter={24}>
          <Col md={12}>
            <Input onChange={(value: any) => handleChange(value, "title")} />
          </Col>
          <Col md={12}>
            <Input onChange={(value: any) => handleChange(value, "bode")} />
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
};
export default AddModal;
