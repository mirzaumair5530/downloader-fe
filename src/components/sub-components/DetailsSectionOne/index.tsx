import { FC } from "react";
import Typography, { typographyClasses } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { containerClasses } from "@mui/material/Container";
import { MainContainer } from "@/components/sub-components";
import { Box } from "@mui/material";

const DetailsSectionOne: FC = () => {
	return (
		<StyledContainer>
			<MainContainer>
				<Box className={"section__one__content"}>
					<Typography fontWeight={"bolder"} variant={"h3"} textAlign={"center"}>
						Welcome to <span className={"highlighted__text"}>[Website Name]</span> - Your Premier Online
						Video Downloader Platform
					</Typography>
					<Typography mt={1} variant={"h5"} fontWeight={"normal"} component={"p"}>
						At <span className={"highlighted__text"}>[Website Name]</span> , we're passionate about
						transforming your online video experience. Our platform is dedicated to empowering you with the
						ability to download and enjoy your favorite videos from across the web, whenever and wherever
						you please. Whether you're seeking to relish entertainment during your commute, create a curated
						collection of cherished memories, or simply want the freedom to watch without buffering,
						[Website Name] is your ultimate solution.
					</Typography>
				</Box>
			</MainContainer>
		</StyledContainer>
	);
};

const StyledContainer = styled(Box)(({ theme }) => {
	return {
		"& .section__one__content": {
			display: "flex",
			flexDirection: "column",
			paddingBlock: theme.spacing(5),
		},
		[`& .${typographyClasses.root}`]: {
			"& .highlighted__text": {
				color: theme.palette.primary.main,
			},
		},
	};
});
export default DetailsSectionOne;
