import { FC } from "react";
import { Box } from "@mui/material";
import InputBase, { inputBaseClasses } from "@mui/material/InputBase";
import ButtonBase, { buttonBaseClasses } from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

import { UrlSearchInterface } from "@/interfaces/sub-components/urlSearch.interface";

const UrlSearch: FC<UrlSearchInterface> = () => {
	return (
		<StyledSearch>
			<InputBase type={"url"} placeholder={"Paste Video URL"} size={"medium"} />
			<ButtonBase>Get Video</ButtonBase>
		</StyledSearch>
	);
};

const StyledSearch = styled(Box)(() => {
	return {
		display: "flex",
		flexWrap: "nowrap",
		minHeight: "58px",
		marginBlockEnd: "5rem",
		[`& .${inputBaseClasses.root}`]: {
			flexGrow: 1,
			border: "2px solid white",
			[`& .${inputBaseClasses.input}`]: {
				fontSize: "1.5rem",
				color: "#FFFFFF",
				paddingInline: "1rem",
				"&:placeholder": {
					color: "#FFFFFF80",
				},
			},
		},

		[`& .${buttonBaseClasses.root}`]: {
			backgroundColor: "#6171FF",
			fontSize: "1.5rem",
			padding: "0.5em 1em",
			border: "2px solid #6171FF",
			color: "#FFFFFF",
			fontWeight: "bold",
		},
	};
});

export default UrlSearch;
