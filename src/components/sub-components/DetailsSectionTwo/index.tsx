import { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { MainContainer } from "@/components/sub-components";
import { Speedometer } from "@/components/svgs";

const DetailsSectionTwo: FC = () => {
	return (
		<DetailsSectionTwoContainer>
			<MainContainer>
				<Box className={"details__section__two__content"}>
					<Speedometer />
					<Typography
						fontSize={"3.75rem"}
						color={"primary.main"}
						variant={"h1"}
						fontWeight={"bolder"}
						textAlign={"center"}
					>
						High-speed <br /> Downloading
					</Typography>
					<Typography className={"details"} textAlign={"center"} mt={2}>
						Experience lightning fast downloading with our High-Speed Download feature. Say goodbye to long
						wait times and slow downloads. With our state-of-the-art technology, you can download your
						favorite images in no time, allowing you to save time and get more done. Say hello to a seamless
						and efficient downloading experience, every time.
					</Typography>
				</Box>
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
