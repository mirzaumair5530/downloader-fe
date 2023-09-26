import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionDetails, { accordionDetailsClasses } from "@mui/material/AccordionDetails";
import AccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import { MainContainer } from "@/components/sub-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionDetails } from "@/components/sub-components/DetailsSectionThree/constants";

const DetailsSectionThree: FC = () => {
	const [expanded, setExpanded] = useState<any>({
		0: true,
		1: false,
	});

	const handleAccordionChange = (index: number, expanded: boolean) => {
		setExpanded((prevState: any) => {
			return {
				...prevState,
				[index]: expanded,
			};
		});
	};
	return (
		<StyledContainer>
			<MainContainer>
				{accordionDetails.map((detail, index) => {
					return (
						<StyledAccordion
							onChange={(_, expanded) => handleAccordionChange(index, expanded)}
							expanded={expanded[index]}
							key={index}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant={"h5"} fontWeight={"bolder"}>
									{detail.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography fontSize={"1.5rem"}>{detail.description}</Typography>
							</AccordionDetails>
						</StyledAccordion>
					);
				})}
			</MainContainer>
		</StyledContainer>
	);
};

const StyledContainer = styled(Box)(({ theme }) => {
	return {
		padding: theme.spacing(5),
	};
});

const StyledAccordion = styled(Accordion)(({ theme }) => {
	return {
		[`&.${accordionClasses.root}`]: {
			padding: theme.spacing(2),
			borderRadius: 20,
			backgroundColor: theme.palette.primary.main,
			marginBottom: theme.spacing(2),
		},

		[`& .${accordionSummaryClasses.expandIconWrapper}`]: {
			"& svg": {
				fontSize: "2.5rem",
			},
		},
		[`& .${accordionSummaryClasses.root}, & .${accordionDetailsClasses.root}, & .${accordionSummaryClasses.expandIconWrapper}`]:
			{
				color: "#FFFFFF",
			},
	};
});
export default DetailsSectionThree;
