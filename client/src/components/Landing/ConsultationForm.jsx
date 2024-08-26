import React, { useState } from "react";
import "./ConsultationForm.css";
import axios from "axios";
import { server } from "../const";

const ConsultationForm = () => {
	const [success, setSuccess] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobileNo: "",
		city: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);
		axios
			.post(`${server}/contactUs`, { ...formData })
			.then((res) => {
				setFormData({
					name: "",
					email: "",
					mobileNo: "",
					city: "",
				});
				setSuccess(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="consultation-form-container">
			<h2>Get a Free</h2>
			<h2> Consultation</h2>
			<form
				onSubmit={handleSubmit}
				className="consultation-form"
			>
				<input
					type="text"
					name="name"
					placeholder="Full Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Enter Email Address"
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<input
					type="tel"
					name="mobileNo"
					placeholder="Mobile Number"
					value={formData.mobileNo}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="city"
					placeholder="Area/City"
					value={formData.city}
					onChange={handleChange}
					required
				/>
				<button type="submit">Get Quick Quote</button>
				{success ? <div>message sent SuccessFull</div> : <></>}
			</form>
		</div>
	);
};

export default ConsultationForm;
