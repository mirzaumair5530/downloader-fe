import { FC, PropsWithChildren } from "react";
import { UrlSearch } from "@/components/sub-components";
import { SearchContainer } from "./sub-components";
import { Typography } from "@mui/material";

const HomeComponent: FC<PropsWithChildren> = () => {
	return (
		<SearchContainer>
			<Typography fontWeight={"bold"} variant={"h2"}>
				Video Downloader
			</Typography>
			<Typography>Free, Fast and Easy video Downloader - Download Your Favorite Video Now!</Typography>
			<UrlSearch />
		</SearchContainer>
	);
};

export default HomeComponent;
