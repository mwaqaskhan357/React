import { Checkbox, FormControlLabel, Typography } from "@material-ui/core"
import ExpandMore from "@material-ui/icons/ExpandMore"
import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiAccordion from "@material-ui/core/Accordion"
import MuiAccordionSummary from "@material-ui/core/AccordionSummary"
import MuiAccordionDetails from "@material-ui/core/AccordionDetails"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

const According1 = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-label="panel1"
          aria-controls="panel1"
          id="panel1"
          expandIcon={<ExpandMore />}
        >
          <FormControlLabel
            aria-label="acknowledged"
            onClick={(e) => e.stopPropagation()}
            onBlur={(e) => e.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledged that I stop propagation onClick"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-label="panel2"
          aria-controls="panel2"
          id="panel2"
          expandIcon={<ExpandMore />}
        >
          <FormControlLabel
            aria-label="acknowledged"
            onClick={(e) => e.stopPropagation()}
            onBlur={(e) => e.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledged that I stop propagation onBlur"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-label="panel3"
          aria-controls="panel3"
          id="panel3"
          expandIcon={<ExpandMore />}
        >
          <FormControlLabel
            aria-label="acknowledged"
            onClick={(e) => e.stopPropagation()}
            onBlur={(e) => e.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledged that I add label"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default According1
