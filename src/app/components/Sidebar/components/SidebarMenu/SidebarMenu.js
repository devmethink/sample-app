import React, { useContext } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";

export default function SidebarMenu() {
  const [state] = useContext(AppContext);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  let items = [];

  if (state.product === "Product 1") {
    items = [
      getItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),
      getItem("Module One", "sub1", <MailOutlined />, [
        getItem(<Link to="/product1/module1">SubModule One</Link>, "1"),
        getItem(<Link to="/commonmodule1">CommonModule1</Link>, "7"),
      ]),
      getItem("Module Two", "sub2", <AppstoreOutlined />, [
        getItem(<Link to="/product1/module2">SubModule Two</Link>, "2"),
      ]),
      {
        type: "divider",
      },
      
      getItem( <Link to="/commonmodule2">CommonModule2</Link>, "Common Two", <SettingOutlined/>),
    ];
  }
  if (state.product === "Product 2") {
    items = [
      getItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),

      getItem("Module Three", "sub3", <SettingOutlined />, [
        getItem(<Link to="/product2/module3">SubModule Three</Link>, "3"),
      ]),
      getItem("Module Four", "sub4", <SettingOutlined />, [
        getItem(<Link to="/commonmodule2">CommonModule2</Link>, "7"),
      ]),
    ];
  }

  return (
    <Menu
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["home"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}
