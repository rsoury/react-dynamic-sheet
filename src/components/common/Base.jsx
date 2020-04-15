import React from "react";
import ScrollLock from "react-scrolllock";
import { ChildrenProps } from "@/constants/common-prop-types";
import { Frame } from "@/components/styles/common";

const DialogBase = ({ children, ...props }) => {
	return (
		<Frame {...props}>
			<ScrollLock>{children}</ScrollLock>
		</Frame>
	);
};

DialogBase.propTypes = {
	children: ChildrenProps.isRequired
};

export default DialogBase;
