import styled from "styled-components";

const Landing = styled.div`
	background-color: rgb(109,95,198);
	height: 100vh;
	text-align: center;
	font-family: Arial;
	position: relative;
`;

const Container = styled.div`
	color: rgb(255,228,201);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -60%);	
`;

const Title = styled.h2`
	font-size: 3.5em;
	font-weight: 600;
	margin-bottom: 3.7rem;
`;

const Heading = styled.h4`
	font-size: 3em;
	font-weight: 530;
	margin-bottom: 4.4rem;
	letter-spacing: 1px;
`;

const Button = styled.button`
	color: rgb(255,228,201);
	background-color: rgb(159,165,201);
	border: 0;
	padding: .5em 1.5em;
	font-size: 3.3em;
	text-transform: uppercase;
	font-weight: 600;
	border-radius: 40px;
`;


const StyledLanding = {
	Landing,
	Container,
	Title,
	Heading,
	Button
};

export default StyledLanding;
