import { PropsWithChildren } from "react";
import { SxProps } from "@mui/material";

export default interface MainContainer extends PropsWithChildren {
	sx?: SxProps;
}
