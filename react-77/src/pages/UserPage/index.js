import React, { useState } from "react";
import { Space, Table, Button, Modal } from "antd";
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import useUserList from "../../hooks/useUserList";
import { createUser, deleteUser, updateUser } from "../../aips/user-api";
import styles from "./styles.module.css";
import UserForm from "../../component/UserForm";

export default function UserPage() {
  const [modal, contextHolder] = Modal.useModal();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      //render: (id) => <p>{id==true?"true":"false"}</p>,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Action",
      key: "id",
      render: (_, record) => (
        <Space size="middle" key={record.id}>
          <Button
            type="primary"
            ghost
            onClick={async () => {
              setInitialValues(record);
              showModal();
              //call API EDIT
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              console.log("a");
              modal.confirm({
                destroyOnclose:true,
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure?",
                okText: "Ok",
                cancelText: "Cancel",
                onOk: async () => {
                  console.log("ok");
                  // call apt by id , id=record.id
                  await deleteUser(record.id);
                  // sau khi api xoá thì phía backend đã thay đổi rồi. Nhưng fontend thì chưa. phải đồng lên fontend.
                  // setState để re-render.
                  await getData();
                },
                onCancel: () => {
                  console.log("cancel");
                },
              });
            }}
          >
            Delete
          </Button>
         
        </Space>
      ),
    },
  ];
  // data bị fix cứng. giờ sẽ call API ở đây để lấy data ở cơ sở dữ liệu
  const [data, getData,total] = useUserList();
  const [initialValues, setInitialValues] = useState({});
  console.log(data);

  const [open, setOpen] = useState(false);
  const onSave = async (value) => {
    //call API + reload data
    if (!value.id) {
      await createUser({
        // username (là cột trong database(db.js),value.username (name trong FORM)
        username: value.username,
        fullname: value.fullname,
        email: value.email,
        password: value.password,
      });
    } else {
      await updateUser(value.id, {
        username: value.username,
        fullname: value.fullname,
        email: value.email,
        password: value.password,
      });
    }

    await getData(1);
  };
  const onCancel = () => {
    setOpen(false);
    setInitialValues({});
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleChangePage =async (page)=>{
    console.log(page);
    await getData(page)
  }
  return (
    <div className={styles.userPage}>
      {/* truyền props vào UserForm */}
      {contextHolder}
      <UserForm
        open={open}
        onSave={onSave}
        onCancel={onCancel}
        initialValues={initialValues}
      />
      <div className={styles.button}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size={"large"}
          onClick={showModal}
        >
          ADD
        </Button>
      </div>

      <Table columns={columns} dataSource={data} rowKey="id"  pagination={{pageSize: 5, total: total, onChange: handleChangePage
        
      }} />
    </div>
  );
}
