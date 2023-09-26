import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import type { FeatureType } from "@/interfaces";

const Feature: FC<FeatureType> = ({ title, icon, description, descriptionStyle, iconStyle, titleStyle }) => {
	return (
		<FeatureContainer descriptionStyle={descriptionStyle} iconStyle={iconStyle} titleStyle={titleStyle}>
			<div className={"feature__icon"}>{React.createElement(icon)}</div>
			{title && (
				<Typography className={"title"} variant={"h5"} fontWeight={"bold"}>
					{title}
				</Typography>
			)}
			<Typography className={"feature__description"}>{description}</Typography>
		</FeatureContainer>
	);
};

const FeatureContainer = styled(Box, {
	shouldForwardProp: (propName: PropertyKey) => !["descriptionStyle"].includes(propName as string),
})<{
	descriptionStyle?: React.CSSProperties;
	iconStyle?: React.CSSProperties;
	titleStyle?: React.CSSProperties;
}>(({ descriptionStyle, iconStyle, titleStyle }) => {
	return {
		padding: "0.5rem",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
		"& .feature__icon svg": {
			width: 55,
			height: 55,
			marginBottom: "1rem",
			...(iconStyle && iconStyle),
		},

		"& .title": {
			fontSize: "1.5rem",
			...(titleStyle && titleStyle),
		},

		"& .feature__description": {
			maxWidth: "21ch",
			fontSize: "1.25rem",
			...(descriptionStyle && descriptionStyle),
		},
	};
});

export default Feature;
