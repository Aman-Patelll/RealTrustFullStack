import React from "react";
import "./Banner.css";
import ConsultationForm from "./ConsultationForm";

const Banner = () => {
	return (
		<div
			className="banner"
			id="home"
		>
			<div className="banner-text">
				<p>Consultation,</p>
				<p> Design,</p>
				<p>& Marketing </p>
			</div>
			<div>
				<ConsultationForm />
			</div>
		</div>
	);
};

export default Banner;
