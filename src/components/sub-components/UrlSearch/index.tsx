import { FC } from "react";
import { styled } from "@mui/material/styles";

import { UrlSearchInterface } from "@/interfaces/sub-components/urlSearch.interface";
import { Box } from "@mui/system";

const UrlSearch: FC<UrlSearchInterface> = ({}) => {
	return <StyledSearch></StyledSearch>;
};

const StyledSearch = styled(Box)(({ theme }) => {
	return {
		minHeight: "600px",
		backgroundColor: "gray",
		backgroundImage: "url(/assets/home/search-background.png)",
		backgroundImageRepeat: "no-repeat",
		backgroundImagePosition: "center center",
	};
});

export default UrlSearch;
