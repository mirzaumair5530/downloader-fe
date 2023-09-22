"use client";
import { PropsWithChildren, FC } from "react";
import { Paper } from "@mui/material";

const LayoutContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Paper square elevation={0}>
			{children}
		</Paper>
	);
};

export default LayoutContainer;
