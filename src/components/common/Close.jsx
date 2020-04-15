import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CloseIcon from "react-feather/dist/icons/x";

const Button = styled.button`
	position: absolute;
	right: 5px;
	top: 5px;
	height: 30px;
	width: 30px;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	background-color: rgba(0, 0, 0, 0);
	color: rgb(120, 120, 120);
	z-index: 100;
	border: none;
	outline: 0;
	transition: background-color 0.25s, color 0.25s;

	&:hover {
		background-color: rgba(100, 100, 100, 0.1);
		color: rgb(100, 100, 100);
		cursor: pointer;
	}
	&:active {
		background-color: rgba(100, 100, 100, 0.15);
	}
	& > svg {
		stroke-width: 3px;
	}
`;

const Close = ({ onClick }) => {
	return (
		<Button onClick={onClick}>
			<CloseIcon size={22} />
		</Button>
	);
};

Close.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Close;
