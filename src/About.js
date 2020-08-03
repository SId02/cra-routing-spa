import React from "react";
import web from "./assets/img/aboutpgImg.svg";
import Common from "./Common";

const About = () => {
	return (
		<>
			<Common
				name="	Welcome to About Page  "
				imgsrc={web}
				visit="/service"
				btnname="Contact Now"
			/>
		</>
	);
};

export default About;
