import React from "react";
import "./Admin.css";
import UserDetail from "./UserDetail";
import SubscriptionDetail from "./SubscriptionDetail";
import CreateProject from "./CreateProject";
import CreateClient from "./CreateClient";

const Admin = () => {
	return (
		<div>
			<div className="admin-pannel">
				<h1>Admin Pannel</h1>
			</div>
			<UserDetail />
			<SubscriptionDetail />
			<CreateProject />
			<CreateClient />
		</div>
	);
};

export default Admin;
