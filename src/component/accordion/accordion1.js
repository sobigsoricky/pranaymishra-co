import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const AccordionItem = ({ panel, expanded, handleChange, question, answer }) => {
    return (
        <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`${panel}bh-content`}
                id={`${panel}bh-header`}
            >
                <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box dangerouslySetInnerHTML={{ __html: answer }} />
            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionItem;
