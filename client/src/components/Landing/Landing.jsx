import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Projects from "./ProjectsSection";
import HappyClients from "./HappyClients";
import RealEstateSection from "./RealEstateSection";
import AboutUs from "./Aboutus";
import WhyChooseUs from "./WhyChooseUs";

const Landing = () => {
	return (
		<div>
			<Header />
			<Banner />
			<WhyChooseUs />
			<AboutUs />
			<Projects />
			<HappyClients />
			<RealEstateSection />
		</div>
	);
};

export default Landing;
