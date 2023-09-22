import { PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material";

export default interface MainContainer extends PropsWithChildren {
	sx?: SxProps;
}
