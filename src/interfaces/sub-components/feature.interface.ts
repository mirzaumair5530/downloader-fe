import React, { FunctionComponent } from "react";

export default interface Feature {
	icon: FunctionComponent;
	title?: string;
	description: string;
	descriptionStyle?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
	titleStyle?: React.CSSProperties;
}
