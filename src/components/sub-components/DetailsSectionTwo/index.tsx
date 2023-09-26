import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { Feature, MainContainer } from "@/components/sub-components";
import { features } from "./contants";

const DetailsSectionTwo: FC = () => {
	return (
		<DetailsSectionTwoContainer>
			<MainContainer>
				<Grid container paddingTop={15} paddingBottom={25}>
					{features.map((feature, index) => {
						return (
							<Grid xs={12} md={4} item key={index}>
								<Feature
									{...feature}
									iconStyle={{
										width: 125,
										height: 125,
									}}
									descriptionStyle={{
										color: "#FFFFFF",
										fontSize: "1rem",
										maxWidth: "38ch",
									}}
								/>
							</Grid>
						);
					})}
				</Grid>
			</MainContainer>
		</DetailsSectionTwoContainer>
	);
};

const DetailsSectionTwoContainer = styled(Box)(({ theme }) => {
	return {
		backgroundImage: "url(/assets/sectionTwo/sectionTwoBackground.png)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 100%",

		"& .details__section__two__content": {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			paddingBlock: theme.spacing(20),
			"& svg": {
				maxWidth: 357,
				maxHeight: 357,
				height: "100%",
				width: "100%",
			},

			"& .details": {
				maxWidth: "55ch",
				color: "#FFFFFF",
				fontSize: "1rem",
			},
		},
	};
});
export default DetailsSectionTwo;
