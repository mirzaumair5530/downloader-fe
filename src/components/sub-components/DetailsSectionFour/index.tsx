import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Grid, { gridClasses } from "@mui/material/Grid";
import Typography, { typographyClasses } from "@mui/material/Typography";
import { MainContainer } from "@/components/sub-components";
import { CloudDownload } from "@/components/svgs";

const DetailsSectionFour: FC = () => {
	return (
		<StyledContainer>
			<MainContainer>
				<Grid container gap={5} className={"details__section__content"} justifyContent={"space-between"}>
					<Grid item xs={12} md={7} container alignItems={"center"} justifyContent={"space-around"}>
						<Typography textAlign={"center"} fontSize={"3.75rem"} component={"h1"} fontWeight={"bolder"}>
							Secure <br />
							Downloading
						</Typography>
						<Typography textAlign={"center"} maxWidth={"55ch"}>
							Your security is our top priority. With our Secure Download feature, you can be assured that
							your downloading experience is safe and secure. Our website is protected with the latest
							security protocols, ensuring that your personal information and downloaded images are
							protected from any malicious attacks. Enjoy a worry-free downloading experience with our
							secure platform.
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<CloudDownload color={"#FFFFFF"} />
					</Grid>
				</Grid>
			</MainContainer>
		</StyledContainer>
	);
};

const StyledContainer = styled(Box)(({ theme }) => {
	return {
		background: theme.palette.primary.main,

		[`& .${gridClasses.container}.details__section__content`]: {
			paddingBlock: theme.spacing(20),

			[`& .${typographyClasses.root}`]: {
				color: "#FFFFFF",
			},

			[`& .${gridClasses.item} svg`]: {
				width: "100%",
				height: "100%",
				maxWidth: 375,
				maxHeight: 375,
			},
		},
	};
});

export default DetailsSectionFour;
