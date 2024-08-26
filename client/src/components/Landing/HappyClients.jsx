import React, { useEffect, useState } from "react";
import "./HappyClients.css";
import axios from "axios";
import { server } from "../const";

function HappyClients() {
	const [clients, setClients] = useState([]);
	useEffect(() => {
		axios
			.get(`${server}/client`)
			.then((res) => {
				setClients(res.data.client);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="happy-clients-section">
			<h2 className="section-title">Happy Clients</h2>
			<div className="clients-grid">
				{clients?.map((client) => (
					<div
						className="client-card"
						key={client._id}
					>
						<img
							src={client.image.url}
							alt={client.name}
							className="client-image"
						/>
						<p className="client-description">{client.description}</p>
						<h3 className="client-name">{client.name}</h3>
						<p className="client-position">{client.destination}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default HappyClients;
