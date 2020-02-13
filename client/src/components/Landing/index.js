import React from "react";
import StyledLanding from "./Landing.styles";

const Landing = () => {
	return (
		<div>
			<StyledLanding.Landing>
				<StyledLanding.Container>
					<StyledLanding.Title>Track Job Applications</StyledLanding.Title>
					<StyledLanding.Heading>With JobSeekr</StyledLanding.Heading>
					<StyledLanding.Button>Get Started</StyledLanding.Button>
				</StyledLanding.Container>
			</StyledLanding.Landing>
		</div>
	);
};

export default Landing;