import { FC, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { containerClasses } from "@mui/material/Container";
import { typographyClasses } from "@mui/material/Typography";
import { MainContainer } from "@/components/sub-components";

const SearchContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SearchContainerComponent>
			<MainContainer>{children}</MainContainer>
		</SearchContainerComponent>
	);
};

const SearchContainerComponent = styled(Box)(() => {
	return {
		minHeight: "909px",
		backgroundColor: "gray",
		backgroundImage: "url(/assets/home/search-background.png)",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[`& .${typographyClasses.root}`]: {
			color: "#FFFFFF",
			textAlign: "center",
			marginBottom: "1rem",
		},
	};
});
export default SearchContainer;
