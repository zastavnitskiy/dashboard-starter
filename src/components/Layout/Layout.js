import React, { useState } from "react";
import { Layout as AntdLayout } from "antd";
import { Sidebar } from "./Sidebar";
import "./Layout.module.css";

const { Content, Footer, Sider } = AntdLayout;

export const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AntdLayout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Sidebar />
      </Sider>
      <AntdLayout>
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          <img
            style={{
              height: "40px",
              width: "50px",
              marginRight: "20px"
            }}
            alt="Vamp.io"
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
