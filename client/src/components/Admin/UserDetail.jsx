import React, { useEffect, useState } from "react";
import "./UserDetail.css";
import axios from "axios";
import { server } from "../const";

const UserDetail = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get(`${server}/admin/getusers`)
			.then((res) => setUsers(res.data.users))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="user-detail">
			<p className="user-heading">User Detail</p>
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

export default UserDetail;
