import React, { useContext } from "react";

import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { AppContext } from "./../../../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export default function SidebarDropdown() {
  const [state, dispatch] = useContext(AppContext);

  let navigate = useNavigate()

  const items = [
    {
      label: (
        <Link
          to="/"
          onClick={() =>
            dispatch({
              type: "PRODUCT",
              payload: "Product 1",
            })
          }
        >
          Product 1
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          to="/"
          onClick={() =>
            dispatch({
              type: "PRODUCT",
              payload: "Product 2",
            })
          }
        >
          Product 2
        </Link>
      ),
      key: "1",
    }
  ];

  return (
    <Dropdown menu={{ items }} size="large">
      <div
        onClick={(e) => {
          e.preventDefault();
          navigate("/")
        }}
        style={{ textAlign: "center", padding: 30 }}
      >
        <h4 style={{ textTransform: "uppercase" }}>
          {state.product}
          <DownOutlined style={{ marginLeft: 10 }} />
        </h4>
      </div>
    </Dropdown>
  );
}
