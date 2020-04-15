import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ResizeDetector from "react-resize-detector";
import { ChildrenProps } from "@/constants/common-prop-types";
import { componentWillAppendToBody } from "react-append-to-body";

import Overlay from "@/components/common/Overlay";
import Base from "@/components/common/Base";

import Close from "./common/Close";
import { Container, Body } from "./styles/modal";

const MotionContainer = motion.custom(Container);

const Modal = ({ children, isOpen, onClose, ...props }) => {
	const [contentFixBreakpoint, setContentFixBreakpoint] = useState(500);

	const onSheetResize = (width, height) => {
		setContentFixBreakpoint(height);
	};

	return (
		isOpen && (
			<Base>
				<Overlay contentFixBreakpoint={contentFixBreakpoint}>
					<MotionContainer
						sx={{
							color: "text",
							bg: "background"
						}}
						variants={{
							hidden: {
								opacity: 0,
								visibility: "hidden",
								y: 20
							},
							visible: {
								opacity: 1,
								visibility: "visible",
								y: 0
							}
						}}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={{ duration: 0.25, delay: 0.25 }}
						{...props}
					>
						<Close onClick={onClose} />
						<Body>
							<slot name="dynamic-sheet-content">{children}</slot>
						</Body>
						<ResizeDetector handleHeight onResize={onSheetResize} />
					</MotionContainer>
				</Overlay>
			</Base>
		)
	);
};

Modal.propTypes = {
	children: ChildrenProps.isRequired,
	onClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool
};

Modal.defaultProps = {
	isOpen: false
};

export default componentWillAppendToBody(Modal);
