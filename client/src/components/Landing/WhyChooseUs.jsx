import React from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
	return (
		<>
			<h2
				className="why-choose-us-heading"
				id="services"
			>
				Why Choose Us?
			</h2>
			<section className="why-choose-us">
				<div className="column">
					<div className="icon-home"></div>
					<h3>Potential ROI</h3>
					<p>Increase your revenue and ROI by leveraging our expertise.</p>
				</div>
				<div className="column">
					<div className="icon-brush"></div>
					<h3>Design</h3>
					<p>Our creative design team will craft stunning visuals.</p>
				</div>
				<div className="column">
					<div className="icon-dollar"></div>
					<h3>Marketing</h3>
					<p>Effective marketing strategies to reach your target audience.</p>
				</div>
			</section>
		</>
	);
}

export default WhyChooseUs;
