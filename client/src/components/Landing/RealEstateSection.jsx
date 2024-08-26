import React, { useState } from "react";
import "./RealEstateSection.css";
import axios from "axios";
import { server } from "../const";

const RealEstateSection = () => {
	const [email, setEmail] = useState("");
	const [success, setSuccess] = useState(false);

	const submitHandler = () => {
		axios
			.put(`${server}/subscribe/${email}`)
			.then((res) => {
				console.log(res);
				setSuccess(true);
				setEmail("");
			})
			.catch((err) => {
				console.log(err);
				setSuccess(false);
			});
	};
	return (
		<div
			className="real-estate-section"
			id="testimonials"
		>
			<div className="hero-section">
				<h1>
					Learn more about our listing process, as well as our additional
					staging and design work.
				</h1>
				<button className="learn-more-btn">Learn More</button>
			</div>

			<div className="footer">
				<nav className="footer-nav">
					<ul>
						<li>Home</li>
						<li>Services</li>
						<li>Projects</li>
						<li>Testimonials</li>
						<li>Contact</li>
					</ul>
				</nav>
				<div className="subscribe-section">
					<p>Subscribe to</p>
					<input
						type="email"
						placeholder="Enter Email Address"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button
						className="subscribe-btn"
						onClick={submitHandler}
					>
						Subscribe
					</button>
					{success ? <div>Subscribe Suceess</div> : <></>}
				</div>
			</div>
			<div className="footer-bottom">
				<span>&copy; All Rights Reserved 2023</span>
				<div className="social-icons">
					<i className="icon-twitter"></i>
					<i className="icon-facebook"></i>
					<i className="icon-instagram"></i>
					<i className="icon-linkedin"></i>
				</div>
			</div>
		</div>
	);
};

export default RealEstateSection;
