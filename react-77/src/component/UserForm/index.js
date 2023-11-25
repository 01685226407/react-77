import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
const UserForm = ({ open, onSave, onCancel, initialValues={} }) => {
  const [form] = Form.useForm();
  useEffect(()=>{
    form.resetFields();
  },[initialValues]);
  return (
    <Modal
    forceRender
      open={open}
      destroyOnClose={true}
      title="Create/Edit User"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(async(values) => {
           // console.log(values);
            const recordId = initialValues.id;
            await onSave({...values,id:recordId});
            onCancel();
           // form.resetFields();
            // resetFields là xoá hết dữ liệu vừa nhập
           //await onSave(values);
          
            //TODO: call API create/edit user + reload lại data
          })
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
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please fill Username",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fullname"
          label="Fullname"
          rules={[
            {
              required: true,
              message: "Please fill Fullname",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please fill Email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please fill Password",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UserForm;
