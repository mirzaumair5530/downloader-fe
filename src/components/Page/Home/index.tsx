import { FC, PropsWithChildren } from "react";
import { UrlSearch, Feature, DetailsSectionOne, DetailsSectionTwo } from "@/components/sub-components";
import { SearchContainer } from "./sub-components";
import { Box, Grid, Typography } from "@mui/material";

import { Features } from "@/components/Page/Home/Constants";

const HomeComponent: FC<PropsWithChildren> = () => {
	return (
		<Box>
			{/*search container*/}

			<SearchContainer>
				<Typography fontWeight={"bold"} variant={"h2"}>
					Video Downloader
				</Typography>
				<Typography>Free, Fast and Easy video Downloader - Download Your Favorite Video Now!</Typography>
				<UrlSearch />
				<Grid container gap={{ xs: 8, md: 4 }} justifyContent={"space-between"} paddingY={5}>
					{Features.map((feature, index) => {
						return (
							<Grid xs={6} md={"auto"} item key={index} justifyContent={"center"}>
								<Feature icon={feature.icon} text={feature.text} />
							</Grid>
						);
					})}
				</Grid>
			</SearchContainer>

			{/* details section 1*/}
			<DetailsSectionOne />

			{/*	details section 2*/}
			<DetailsSectionTwo />
		</Box>
	);
};

export default HomeComponent;
