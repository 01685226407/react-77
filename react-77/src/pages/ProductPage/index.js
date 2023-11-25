import React from "react";
import { Space, Table, Button ,Modal} from "antd";
import { ExclamationCircleOutlined,PlusOutlined } from "@ant-design/icons";

import styles from './styles.module.css';
import useProductList from "../../hooks/useProductList";
import { deleteProduct } from "../../aips/product-api";

export default function ProductPage() {
  const [modal, contextHolder] = Modal.useModal();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "ProductName",
      dataIndex: "productname",
      key: "productname",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "CategoryName",
      dataIndex: "categoryname",
      key: "categoryName",
    },
      
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" ghost >
          
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              console.log("hihi");
              modal.confirm({
                title: "Confirm",
                icon: <ExclamationCircleOutlined />,
                content: "Are you sure?",
                okText: "Ok",
                cancelText: "Cancel",
                onOk:async ()=>{
                    //console.log("ok",);
                    await deleteProduct(record.id);
                    await getData();

                },
                onCancel:()=>{
                    console.log("cancel",);
                }
              });
            }}
          >
            Delete
          </Button>
          {contextHolder}
        </Space>
      ),
    },
  ];
 
  const [data,getData] = useProductList();
  console.log(data);
    
  return (
    
    <div>
      {/* truyền props vào UserForm */}
      
      <div className={styles.button}>
      <Button
          type="primary"
          icon={<PlusOutlined />}
          size={"large"}
         
        >
          ADD
        </Button> 
      </div>
        
      <Table columns={columns} dataSource={data} rowkey={"id"} />
    </div>
  );
}
