import { FC, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { typographyClasses } from "@mui/material/Typography";

const SearchContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SearchContainerComponent>
			<Box className={"items__container"}>{children}</Box>
		</SearchContainerComponent>
	);
};

const SearchContainerComponent = styled(Box)(() => {
	return {
		minHeight: "909px",
		backgroundColor: "gray",
		backgroundImage: "url(/assets/home/search-background.png)",
		backgroundImageRepeat: "no-repeat",
		backgroundImagePosition: "center center",
		position: "relative",
		"& .items__container": {
			width: "50%",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
		},

		[`& .${typographyClasses.root}`]: {
			color: "#FFFFFF",
			textAlign: "center",
			marginBottom: "1rem",
		},
	};
});
export default SearchContainer;
