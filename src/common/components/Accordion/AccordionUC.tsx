import withStyles from "@material-ui/core/styles/withStyles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {ChangeEvent, FC, memo, ReactNode, useState} from "react";
import Typography from "@material-ui/core/Typography/Typography";

type AccordionUCPropsType = {
    name: string
    label: string
    details: ReactNode
}
export const AccordionUC: FC<AccordionUCPropsType> = memo(({
                                                               name,
                                                               label,
                                                               details
                                                           }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Accordion square expanded={expanded === name} onChange={handleChange(name)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography style={{fontFamily: "Montserrat, sans-serif"}}>
                    {label}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography style={{
                    width: "100%",
                    transform: "translate(-12px)",
                    fontFamily: "Montserrat, sans-serif"
                }}>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
})
const Accordion = withStyles({
    root: {
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, .03)",
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        width: "100%"
    },
}))(MuiAccordionDetails);


