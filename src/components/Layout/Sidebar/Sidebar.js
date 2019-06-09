import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "@reach/router";
const { SubMenu } = Menu;

export const Sidebar = () => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="pie-chart" /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard">
            <Icon type="desktop" /> Dashboard{" "}
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="/users/1">
              <Icon type="desktop" /> Tom{" "}
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/users/2">
              <Icon type="desktop" /> Bill{" "}
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/users/3">
              <Icon type="desktop" /> Elon{" "}
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <Link to="/teams">
              <Icon type="team" />
              <span>Teams</span>
            </Link>
          }
        >
          <Menu.Item key="6">
            <Link to="/teams/1"> Team Alpha </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/teams/2">Team Beta </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};
