import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

import type { FeatureInterface } from "@/interfaces/index.js";

const Feature: FC<FeatureInterface> = ({ text, icon }) => {
	return (
		<FeatureContainer>
			<div className={"feature__icon"}>{React.createElement(icon)}</div>
			<Typography variant={'h5'}>{text}</Typography>
		</FeatureContainer>
	);
};

const FeatureContainer = styled(Box)(() => {
	return {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
		"% .feature__icon": {
			width: 55,
			height: 55,
		},
	};
});

export default Feature;
