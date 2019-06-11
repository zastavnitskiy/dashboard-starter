import React from "react";
import { Menu, Icon } from "antd";
import { Link, Location } from "@reach/router";

export const Sidebar = () => {
  const menuItems = [
    {
      icon: "pie-chart",
      label: "Home",
      destination: "/"
    },
    {
      icon: "pie-chart",
      label: "Dashboard",
      destination: "/dashboard"
    }
  ];

  return (
    <Location>
      {({ location }) => (
        <>
          <div className="logo" />
          <Menu
            theme="dark"
            selectedKeys={menuItems
              .map(({ destination }) => destination)
              .filter(destination => location.href.endsWith(destination))}
            mode="inline"
          >
            {menuItems.map(({ icon, label, destination }) => {
              return (
                <Menu.Item key={destination}>
                  <Link to={destination}>
                    <Icon type={icon} /> {label}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </>
      )}
    </Location>
  );
};
