import { FC } from "react";
import Typography, { typographyClasses } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Grid, { gridClasses } from "@mui/material/Grid";
import { MainContainer } from "@/components/sub-components";
import { cardDetails } from "@/components/sub-components/DetailsSectionOne/constants";
import { DetailsCards } from "@/components/sub-components/DetailsSectionOne/sub-component";

const DetailsSectionOne: FC = () => {
	return (
		<StyledContainer>
			<MainContainer>
				<Box paddingY={5} className={"section__one__content"}>
					<Typography
						fontSize={{ xs: "2rem", md: "3rem" }}
						fontWeight={"bolder"}
						variant={"h3"}
						textAlign={"center"}
					>
						Welcome to <span className={"highlighted__text"}>[Website Name]</span> - Your Premier Online
						Video Downloader Platform
					</Typography>
					<Typography mt={1} variant={"h5"} fontWeight={"normal"} component={"p"}>
						At <span className={"highlighted__text"}>[Website Name]</span> , we're passionate about
						transforming your online video experience. Our platform is dedicated to empowering you with the
						ability to download and enjoy your favorite videos from across the web, whenever and wherever
						you please. Whether you're seeking to relish entertainment during your commute, create a curated
						collection of cherished memories, or simply want the freedom to watch without buffering,
						<span className={"highlighted__text"}> [Website Name]</span> is your ultimate solution.
					</Typography>
					<Grid container justifyContent={"flex-start"} paddingY={4}>
						{cardDetails.map((detail, index) => {
							return (
								<Grid item xs={12} sm={6} md={4}>
									<DetailsCards {...detail} />
								</Grid>
							);
						})}
					</Grid>
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
		},
		[`& .${typographyClasses.root}`]: {
			"& .highlighted__text": {
				color: theme.palette.primary.main,
			},
		},

		[`& .${gridClasses.item}`]: {
			padding: theme.spacing(2),
		},
	};
});
export default DetailsSectionOne;
