import { FC, PropsWithChildren } from "react";
import {
	UrlSearch,
	Feature,
	DetailsSectionOne,
	DetailsSectionTwo,
	DetailsSectionThree,
} from "@/components/sub-components";
import { SearchContainer } from "./sub-components";
import { Box, Grid, Typography } from "@mui/material";

import { Features } from "@/components/Page/Home/Constants";
import DetailsSectionFour from "../../sub-components/DetailsSectionFour";

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
				<Grid
					container
					gap={{ xs: 1 }}
					justifyContent={{
						xs: "center",
						md: "space-around",
					}}
					paddingY={5}
				>
					{Features.map((feature, index) => {
						return (
							<Grid xs={6} sm={4} md={3} lg={2} item key={index} justifyContent={"center"}>
								<Feature {...feature} />
							</Grid>
						);
					})}
				</Grid>
			</SearchContainer>

			{/* details section 1*/}
			<DetailsSectionOne />

			{/*	details section 2*/}
			<DetailsSectionTwo />

			{/*	details section 3*/}
			<DetailsSectionThree />

			{/*	details section 4*/}
			<DetailsSectionFour />
		</Box>
	);
};

export default HomeComponent;
