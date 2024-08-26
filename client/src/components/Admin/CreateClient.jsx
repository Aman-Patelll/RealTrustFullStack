import React, { useState } from "react";
import "./CreateClient.css";
import axios from "axios";
import { server } from "../const";

function CreateClient() {
	const [clientName, setClientName] = useState("");
	const [clientDescription, setClientDescription] = useState("");
	const [clientDestination, setClientDestination] = useState("");
	const [clientImage, setClientImage] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", clientName);
		formData.append("description", clientDescription);
		formData.append("destination", clientDestination);
		formData.append("file", clientImage);

		try {
			const response = await axios.post(
				`${server}/admin/createclient`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			console.log(response.data);
			setSuccess(true);
		} catch (error) {
			console.error("Error uploading the Client:", error);
		}

		setClientName("");
		setClientDescription("");
		setClientDestination("");
		setClientImage(null);
	};

	const handleImageChange = (e) => {
		setClientImage(e.target.files[0]);
	};

	return (
		<div className="create-client-container">
			<h2>Create Client</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="clientImage">Client Image</label>
					<input
						type="file"
						id="clientImage"
						accept="image/*"
						onChange={handleImageChange}
					/>
				</div>
				<div>
					<label htmlFor="clientName">Client Name</label>
					<input
						type="text"
						id="clientName"
						value={clientName}
						onChange={(e) => setClientName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="clientDescription">Client Description</label>
					<textarea
						id="clientDescription"
						value={clientDescription}
						onChange={(e) => setClientDescription(e.target.value)}
						required
					></textarea>
				</div>
				<div>
					<label htmlFor="clientDestination">Client Destination</label>
					<textarea
						id="clientDestination"
						value={clientDestination}
						onChange={(e) => setClientDestination(e.target.value)}
						required
					></textarea>
				</div>
				<button type="submit">Create Client</button>
				{success ? <div>Client Create SuccessFull</div> : <></>}
			</form>
		</div>
	);
}

export default CreateClient;
