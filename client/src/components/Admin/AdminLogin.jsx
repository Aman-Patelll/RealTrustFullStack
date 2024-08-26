import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import { server } from "../const";

function AdminLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const loginData = {
				email: email,
				password: password,
			};

			axios
				.post(`${server}/admin/login`, loginData)
				.then((response) => {
					console.log("Login successful:", response.data);
					setEmail("");
					setPassword("");
					navigate("/admin");
				})
				.catch((error) => {
					console.error("There was an error logging in:", error);
				});
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="adminLogin">
			<div className="login-container">
				<h2>Admin Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="login-button"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default AdminLogin;
