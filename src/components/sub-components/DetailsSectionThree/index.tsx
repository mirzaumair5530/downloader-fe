import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Grid, { gridClasses } from "@mui/material/Grid";
import { MainContainer } from "@/components/sub-components";
import { Restriction } from "@/components/svgs";

const DetailsSectionThree: FC = () => {
	return (
		<StyledContainer>
			<MainContainer>
				<Grid container paddingY={20} justifyContent={"space-between"}>
					<Grid gap={5} item xs={12} md={4}>
						<Restriction />
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						container
						alignItems={"center"}
						flexDirection={"column"}
						justifyContent={"space-around"}
					>
						<Typography
							color={"primary.main"}
							variant={"h1"}
							fontSize={"3.75rem"}
							fontWeight={"bolder"}
							textAlign={"center"}
						>
							No-Registration <br /> Required
						</Typography>
						<Typography color={"primary.main"} textAlign={"center"} maxWidth={"55ch"}>
							Say goodbye to the hassle of registering for an account just to download images. Our website
							is designed to provide an effortless and convenient experience to our users. With our
							&#39;No Registration Required&#39; feature, you can directly download images without any
							added steps. Simply search, preview and download - it's that easy!
						</Typography>
					</Grid>
				</Grid>
			</MainContainer>
		</StyledContainer>
	);
};

const StyledContainer = styled(Box)(() => {
	return {
		[`& .${gridClasses.item}`]: {
			"& svg": {
				width: "100%",
				height: "100%",
				maxWidth: 375,
				maxHeight: 375,
			},
		},
	};
});
export default DetailsSectionThree;
