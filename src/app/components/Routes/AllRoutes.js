import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import { AppContext } from "sample-app-app-context";
import Home from "./../Home";
import Module1 from "sample-app-product-module-1";
import Module2 from "sample-app-product-module-2";
import Module3 from "sample-app-product-module-3";
import Api from "sample-app-api";
import CommonModule1 from "sample-app-common-module-1";
import CommonModule2 from "sample-app-common-module-2";

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
					<Route path="/commonmodule1" element={<CommonModule1 />} />
					<Route path="/commonmodule2" element={<CommonModule2 />} />
				</Routes>
			) : (
				<Spin />
			)}
		</div>
	);
}
