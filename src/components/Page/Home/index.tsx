import { FC, PropsWithChildren } from "react";
import { UrlSearch, Feature } from "@/components/sub-components";
import { SearchContainer } from "./sub-components";
import { Grid, Typography } from "@mui/material";

import { Features } from "@/components/Page/Home/Constants";

const HomeComponent: FC<PropsWithChildren> = () => {
	return (
		<SearchContainer>
			<Typography fontWeight={"bold"} variant={"h2"}>
				Video Downloader
			</Typography>
			<Typography>Free, Fast and Easy video Downloader - Download Your Favorite Video Now!</Typography>
			<UrlSearch />
			<Grid container gap={8} justifyContent={"space-between"} paddingY={5}>
				{Features.map((feature, index) => {
					return (
						<Grid item key={index}>
							<Feature icon={feature.icon} text={feature.text} />
						</Grid>
					);
				})}
			</Grid>
		</SearchContainer>
	);
};

export default HomeComponent;
