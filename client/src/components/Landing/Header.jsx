import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<img
					src={logo}
					alt="Real Trust Logo"
				/>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<a
							href="#home"
							className="active"
						>
							Home
						</a>
					</li>
					<li>
						<a href="#services">Services</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
				</ul>
			</nav>
			<div className="contact-button">
				<a href="#contact">Contact</a>
			</div>
		</header>
	);
}

export default Header;
