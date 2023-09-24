import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import type { MainContainerType } from "@/interfaces";

const MainContainer: FC<MainContainerType> = ({ children, sx }) => {
	return (
		<StyledContainer sx={sx}>
			<>{children}</>
		</StyledContainer>
	);
};

const StyledContainer = styled(Container, {
	shouldForwardProp: (propName) => !["sx"].includes(propName as string),
})(() => {
	return {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	};
});

export default MainContainer;
