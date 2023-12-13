import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { AccordionItem } from '@/component';
import { BuildDream } from '@/sections';

const faqs = [
    {
        id: 'faq-1', summary: "How Long Does the Audit Process Take?", detail: "<p>The duration of the audit process depends on the complexity of your website. However, you can expect to receive it within 24 to 48 hours after we confirm your request.</p>"
    },
    {
        id: 'faq-2', summary: "What’s included in the Audit Report?",

        detail: `<p>It will evaluate multiple facets of your website’s SEO health. This includes, but is not limited to:</p>
            <ul>
                <li>keyword analysis</li>
                <li> technical SEO evaluation</li>
                <li>content assessment</li>
                <li>and backlink analysis</li>
                <li>And more</li>
            </ul>
            <p>Each section will contain specific recommendations for improvement, prioritized based on their potential impact.</p>` },


    { id: 'faq-3', summary: "Is the Audit Truly Just $1?", detail: "<p>Yes, the initial SEO Audit is offered free of charge. I believe in demonstrating the value I can bring to your business upfront before pitching anything.</p>" },
    { id: 'faq-4', summary: "How Do I Get this Audit?", detail: "<p>Click the “Get the Audit” button on our landing page to get the audit. You’ll be asked to fill out a brief form with some details. Once submitted, my team will reach out to confirm the details and commence the audit.</p>" },
    {
        id: 'faq-5', summary: "Will You Require Access to My Website Backend?", detail: "<p>No, I do not require backend access to your website for the initial audit. Our analysis uses publicly available data and specialised SEO tools that do not necessitate administrative access to your site.</p>"
    },

    {
        id: 'faq-6', summary: "What Are the Next Steps After Receiving the Audit?", detail: "<p>We at Rankfast adhere to very strict data protection and confidentiality protocols to ensure your information is secure.</p><p>All data collected during the audit process is used exclusively for analysis and is not shared with third parties.</p>"
    },
    {
        id: 'faq-7', summary: "Can I Implement the Recommended Changes Myself?", detail: "<p>Yes. The audit report is designed to be actionable. It has every insight you need to make improvements yourself.</p><p>However, implementing complex SEO strategies can be time-consuming and requires expertise, which is where the role of our full suite of services comes in.</p>"
    },
];

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <section className='bg--secondary' id="faq">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center" style={{ height: "100%" }}>
                        <Grid item xs={12} sm={11}>
                            <Box py={5} className="faqBox">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <Typography className='text--primary' sx={{ fontWeight: 600, letterSpacing: "3px" }}>FAQ</Typography>
                                            <Typography variant='h1' className='text--light my-4'>Frequently Asked Questions</Typography>
                                            <Typography className='text--light-grey mb-4' >A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</Typography>
                                            <Link href="/contact-me/" legacyBehavior><a className='text-white p-0' style={{ borderBottomStyle: "solid", borderBottomWidth: "0.5px", width: "fit-content" }}>Contact Me</a></Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box>
                                            <div>
                                                {faqs.map((faq) => (
                                                    <AccordionItem
                                                        key={faq.id}
                                                        panel={faq.id}
                                                        expanded={expanded}
                                                        handleChange={handleChange}
                                                        question={faq.summary}
                                                        answer={faq.detail}
                                                    />
                                                ))}
                                            </div>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default FAQ;
