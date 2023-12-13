import { CheckCircle, OpenInNew } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const BusinessIdentity = () => {
    return (
        <>
            <section className='bg--secondary' id="businessIdentity">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Typography className='text--primary mb-3' sx={{ letterSpacing: "3px" }}>SERVICES</Typography>
                                        <Typography variant='h2' className='text-white' gutterBottom>Give Your SaaS Brand
                                            A Strategic Direction:</Typography>
                                        <Typography className='text-white'>Plan, strategize, Execute. Everything you brand needs
                                            in one place!</Typography>
                                        <Box mt={3}>
                                            <ul className='p-0 m-0'>
                                                <li className='mb-4 serviceItem' >
                                                    <Link href="https://rankfast.co/services/technical-seo/" legacyBehavior>
                                                        <Grid container alignItems="center">
                                                            <Grid item xs={10}>
                                                                <span className='text-white' style={{ fontSize: "1.2rem" }}>SEO Services</span>
                                                            </Grid>
                                                            <Grid item xs={2}><OpenInNew style={{ fontSize: '2rem' }} className='text--primary' /></Grid>
                                                        </Grid>
                                                    </Link>
                                                </li>
                                                <li className='mb-4 serviceItem' >
                                                    <Link href="https://rankfast.co/services/ui-ux/" legacyBehavior>
                                                        <Grid container alignItems="center">
                                                            <Grid item xs={10}>
                                                                <span className='text-white' style={{ fontSize: "1.2rem" }}>UI/UX Services</span>
                                                            </Grid>
                                                            <Grid item xs={2}><OpenInNew style={{ fontSize: '2rem' }} className='text--primary' /></Grid>
                                                        </Grid>
                                                    </Link>
                                                </li>
                                                <li className='mb-4 serviceItem' >
                                                    <Link href="https://rankfast.co/services/web-development/" legacyBehavior>
                                                        <Grid container alignItems="center">
                                                            <Grid item xs={10}>
                                                                <span className='text-white' style={{ fontSize: "1.2rem" }}>Development</span>
                                                            </Grid>
                                                            <Grid item xs={2}><OpenInNew style={{ fontSize: '2rem' }} className='text--primary' /></Grid>
                                                        </Grid>
                                                    </Link>
                                                </li>
                                                <li className='mb-4 serviceItem' >
                                                    <Link href="https://rankfast.co/services/social-media-marketing/" legacyBehavior>
                                                        <Grid container alignItems="center">
                                                            <Grid item xs={10}>
                                                                <span className='text-white' style={{ fontSize: "1.2rem" }}>Marketing</span>
                                                            </Grid>
                                                            <Grid item xs={2}><OpenInNew style={{ fontSize: '2rem' }} className='text--primary' /></Grid>
                                                        </Grid>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <img src="/images/business.gif" className='img-fluid' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default BusinessIdentity