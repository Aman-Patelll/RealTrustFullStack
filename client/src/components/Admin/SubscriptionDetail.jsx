import React, { useEffect, useState } from "react";
import "./SubscriptionDetail.css";
import axios from "axios";
import { server } from "../const";

const SubscriptionDetail = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(`${server}/admin/getsubscribeusers`)
			.then((res) => setUsers(res.data.users))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="subscribeusers">
			<p className="subscribe-user-heading">Subscribe User</p>
			<table className="user-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile No</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user._id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.mobileNo}</td>
							<td>{user.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SubscriptionDetail;
