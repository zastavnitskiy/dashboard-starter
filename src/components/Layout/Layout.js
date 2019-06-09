import React, { useState } from "react";
import { Layout as AntdLayout, Breadcrumb } from "antd";
import { Sidebar } from "./Sidebar";
import { Link } from "@reach/router";
import "./Layout.module.css";

const { Header, Content, Footer, Sider } = AntdLayout;

export const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Sidebar></Sidebar>
      </Sider>
      <AntdLayout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>

          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {" "}
          <img
            style={{
              height: "40px",
              width: "50px",
              marginRight: "20px"
            }}
            src="https://vamp.io/img/003-Small-icons/Medium-blue/VAMP-Medium.svg"
          ></img>{" "}
          © 2018 vamp.io
        </Footer>
      </AntdLayout>
    </AntdLayout>
  );
};

export const withLayout = WrappedComponent => {
  return props => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};
