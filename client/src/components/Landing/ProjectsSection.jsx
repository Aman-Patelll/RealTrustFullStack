import React, { useEffect, useState } from "react";
import "./ProjectsSection.css";
import axios from "axios";
import { server } from "../const";

function ProjectsSection() {
	const [project, setProject] = useState([]);
	useEffect(() => {
		axios
			.get(`${server}/project`)
			.then((res) => {
				setProject(res.data.project);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section
			className="projects-section"
			id="projects"
		>
			<h2 className="section-title">Our Projects</h2>
			<p className="section-subtitle">
				We know what buyers are looking for and suggest projects that will bring
				clients top dollar for the sale of their homes.
			</p>
			<div className="projects-grid">
				{project?.map((project) => (
					<div
						className="project-card"
						key={project._id}
					>
						<img
							src={project.image.url}
							alt={"img"}
							className="project-image"
						/>
						<h3 className="project-title">{project.name}</h3>
						<p className="project-description">{project.description}</p>
						<a
							href="#read-more"
							className="project-button"
						>
							Read More
						</a>
					</div>
				))}
			</div>
		</section>
	);
}

export default ProjectsSection;
