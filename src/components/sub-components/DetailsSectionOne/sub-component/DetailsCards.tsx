import { FC } from "react";
import { Card } from "@mui/material";
import Typography, { typographyClasses } from "@mui/material/Typography";
import CardContent, { cardContentClasses } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { DetailsCardsType } from "@/interfaces";

const DetailsCards: FC<DetailsCardsType> = ({ description, title }) => {
	return (
		<StyledCard elevation={3}>
			<CardContent>
				<Typography className={"detail__title"} textAlign={"center"} variant={"h5"} fontWeight={"bold"}>
					{title}
				</Typography>
				<Typography className={"details__description"} textAlign={"center"}>
					{description}
				</Typography>
			</CardContent>
		</StyledCard>
	);
};

const StyledCard = styled(Card)(({ theme }) => {
	return {
		height: "100%",
		borderRadius: 30,
		backgroundColor: theme.palette.primary.main,
		[`& .${cardContentClasses.root}`]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: theme.spacing(2),
			padding: theme.spacing(3),
		},

		[`& .${typographyClasses.root}`]: {
			"&.detail__title": {
				fontSize: "1.5rem",
				minHeight: 64,
			},
			"&.details__description": {
				fontSize: "1.25rem",
			},
			color: "#FFFFFF",
			maxWidth: "29ch",
		},
	};
});
export default DetailsCards;
