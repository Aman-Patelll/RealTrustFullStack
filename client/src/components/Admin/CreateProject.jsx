import React, { useState } from "react";
import "./CreateProject.css";
import axios from "axios";
import { server } from "../const";

function CreateProject() {
	const [projectName, setProjectName] = useState("");
	const [projectDescription, setProjectDescription] = useState("");
	const [projectImage, setProjectImage] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", projectName);
		formData.append("description", projectDescription);
		formData.append("file", projectImage);

		try {
			const response = await axios.post(
				`${server}/admin/createProject`,
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
			console.error("Error uploading the project:", error);
		}

		setProjectName("");
		setProjectDescription("");
		setProjectImage(null);
	};

	const handleImageChange = (e) => {
		setProjectImage(e.target.files[0]);
	};

	return (
		<div className="create-project-container">
			<h2>Create Project</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="projectImage">Project Image</label>
					<input
						type="file"
						id="projectImage"
						accept="image/*"
						onChange={handleImageChange}
					/>
				</div>
				<div>
					<label htmlFor="projectName">Project Name</label>
					<input
						type="text"
						id="projectName"
						value={projectName}
						onChange={(e) => setProjectName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="projectDescription">Project Description</label>
					<textarea
						id="projectDescription"
						value={projectDescription}
						onChange={(e) => setProjectDescription(e.target.value)}
						required
					></textarea>
				</div>
				<button type="submit">Create Project</button>
				{success ? <div>Project Create SuccessFull</div> : <></>}
			</form>
		</div>
	);
}

export default CreateProject;
