import { Button, Result } from "antd";
import React, { useContext } from "react";
import { HomeOutlined } from "@ant-design/icons";
import { AppContext } from "sample-app-app-context";
import { Link } from "react-router-dom";

export default function Home() {
	const [state] = useContext(AppContext);
	return (
		<Result
			className="homepage"
			icon={<HomeOutlined />}
			title={`${state.name === "" ? "" : `${state.name},`} Welcome to ${
				state.product
			}!`}
			extra={[
				<Link key="1" to="/product1/module1">
					<Button type="primary" key="console">
						Edit Name
					</Button>
				</Link>,
			]}
		/>
	);
}
