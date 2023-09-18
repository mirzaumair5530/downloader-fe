"use client";
import { PropsWithChildren, FC } from "react";
import { Container } from "@mui/material";

const LayoutContainer: FC<PropsWithChildren> = ({ children }) => {
	return <>{children}</>;
};

export default LayoutContainer;
