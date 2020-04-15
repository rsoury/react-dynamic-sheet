import styled from "@emotion/styled";
import Encapsulate from "@/components/common/Encapsulate";

export const Frame = styled(Encapsulate)`
	overflow: hidden;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 99999999999;
	width: 100vw;
	height: 100vh;
`;

export const Overlay = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 5;
	overflow: auto;
	-webkit-overflow-scrolling: touch;

	${props =>
		typeof props.contentFixBreakpoint === "number" &&
		`@media (min-width: 450px) and (min-height: ${`${props.contentFixBreakpoint}px`}) {
				display: flex;
				align-items: center;
				justify-contents: center;
				overflow: hidden;
		}`}

	@media (min-width: 450px) {
		padding: 20px;
	}
`;
