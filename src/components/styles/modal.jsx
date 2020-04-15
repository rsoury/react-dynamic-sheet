import styled from "@emotion/styled";

export const Container = styled.div`
	max-width: 768px;
	margin: 0 auto;
	width: 100%;
	min-height: 100%;
	position: relative;
	background-color: #fff;

	@media (min-width: 450px) {
		min-height: auto !important;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
			0 18px 36px -18px rgba(0, 0, 0, 0.3),
			0 -12px 36px -8px rgba(0, 0, 0, 0.025);
	}
`;

export const Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: center;
`;
