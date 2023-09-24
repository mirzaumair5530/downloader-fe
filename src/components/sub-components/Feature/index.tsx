import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import type { FeatureType } from "@/interfaces";

const Feature: FC<FeatureType> = ({ text, icon, description }) => {
	return (
		<FeatureContainer>
			<div className={"feature__icon"}>{React.createElement(icon)}</div>
			<Typography className={"title"} variant={"h5"} fontWeight={"bold"}>
				{text}
			</Typography>
			<Typography className={"feature__description"}>{description}</Typography>
		</FeatureContainer>
	);
};

const FeatureContainer = styled(Box)(() => {
	return {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
		"& .feature__icon": {
			width: 55,
			height: 55,
			marginBottom: "1rem",
		},

		"& .title": {
			fontSize: "1.5rem",
		},

		"& .feature__description": {
			maxWidth: "21ch",
			fontSize: "1.25rem",
		},
	};
});

export default Feature;
