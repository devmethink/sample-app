import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import { AppContext } from "../../context/AppContext";
import Home from "./../Home";
import Module1 from "./../../products/PRODUCT1/modules/Module1/Module1";
import Module2 from "./../../products/PRODUCT1/modules/Module2/Module2";
import Module3 from "./../../products/PRODUCT2/modules/Module3/Module3";
import Api from "../../../data/api";
import CommmonModule1 from "../../products/COMMONS/modules/CommonModule1/CommonModule1";
import CommonModule2 from "../../products/COMMONS/modules/CommonModule2/CommonModule2";

export default function AllRoutes() {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getData() {
    Api.getData(`https://restcountries.com/v3.1/name/portugal`)
      .then((data) => {
        dispatch({
          type: "DATA",
          payload: data[0],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="all-routes">
      {state.data !== null ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product1/module1" element={<Module1 />} />
          <Route path="/product1/module2" element={<Module2 />} />
          <Route path="/product2/module3" element={<Module3 />} />
          <Route path="/commonmodule1" element={<CommmonModule1 />} />
          <Route path="/commonmodule2" element={<CommonModule2 />} />
        </Routes>
      ) : (
        <Spin />
      )}
    </div>
  );
}
