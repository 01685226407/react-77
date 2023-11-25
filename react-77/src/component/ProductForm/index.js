import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
const ProductForm = ({ open, onSave, onCancel, initialValues = {} }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      destroyOnClose={true}
      title="Create/Edit Product"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {})
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={initialValues}
        preserve={false}
      >
        <Form.Item
          name="productname"
          label="ProductName"
          rules={[
            {
              required: true,
              message: "Please fill ProductName",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please fill Price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryName"
          label="CateogryName"
          rules={[
            {
              required: true,
              message: "Please fill CateogryName",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ProductForm;
