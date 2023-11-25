import React, { useState } from "react";
import { Layout, Menu, Button, theme, Row, Col, Avatar } from "antd";
import { Select, Space } from "antd";
import "./DashboardPage.css";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  FallOutlined,
} from "@ant-design/icons";
import {  Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";


const { Header, Sider, Content } = Layout;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export default function DashboardPage() {
  const navigate = useNavigate();
  const menuitems = [
    {
      key: "user",
      icon: <UserOutlined />,
      label: "User Page",
      onClick : ()=>{
        navigate('/admin/user');
      }
    },
    {
      key: "product",
      icon: <FallOutlined />,
      label: "Product Page",
      onClick : ()=>{
        navigate('/admin/product');
      }
    },
    {
      key: "category",
      icon: <UploadOutlined />,
      label: "Category Page",
      onClick : ()=>{
        navigate('/admin/category');
      }
    },
  ];
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const location = useLocation();
  console.log(location);
  const handleLogout =()=>{
    localStorage.removeItem("access-token");
    navigate("/login");
  }
  const activeKey = menuitems.find((element)=>location.pathname.includes(element.key))?.key || "user";
  const token = localStorage.getItem("access-token");
  return ( token?
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[activeKey]}
          items={menuitems}
          
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <div>
                <Avatar size="default" icon={<UserOutlined />}></Avatar>
                <span>Dao Van Cuong</span>
                
               
                <Button danger onClick={handleLogout}>Logout</Button>
              </div>
            </Col>
          </Row>
        </Header>

        {/* Nội dung */}

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Space wrap>
            <Select
              defaultValue="List Product"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "123",
                  label: "List Product",
                },
                {
                  value: "lucy",
                  label: "List Category",
                },
              ]}
            />
          </Space>
         
          <Outlet/>
        </Content>
        
      </Layout>
    </Layout>: <Navigate to={"/login"}/>
  );
}
