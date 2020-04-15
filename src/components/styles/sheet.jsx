import styled from "@emotion/styled";

export const Container = styled.div`
	width: 100%;
	border-radius: 20px 20px 0 0;
	box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
		0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
	background: #fff;
	position: relative;
	left: 0;
	right: 0;
`;

export const Background = styled.div`
	position: absolute;
	left: -100px;
	right: -100px;
	top: 100px;
	bottom: -999999px;
	border-radius: inherit;
	background: inherit;
`;

export const Body = styled.div`
	position: relative;
	padding: 30px 20px 20px;
	overflow: auto;
	z-index: 5;

	&:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 10px;
		height: 6px;
		width: 70px;
		background-color: rgb(220, 220, 220);
		border-radius: 100px;
		margin: 0 auto;
		z-index: 100;
		border: none;
		outline: 0;
	}
`;
