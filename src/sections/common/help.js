import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Add, East } from '@mui/icons-material'
import { Avatar, Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'

const Help = () => {

    const router = useRouter()

    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={10}>
                            <Box py={5}>
                                <Box>
                                    <Typography variant='h2' align='center' className='text--secondary'>What you get</Typography>
                                </Box>
                                <Box mt={5}>
                                    <Grid container>
                                        <Grid item xs={12} sm={6} className='border' sx={{
                                            borderRadius: "1rem 0 0 1rem",
                                            '@media only screen and (max-width: 600px)': {
                                                borderRadius: "1rem 1rem 0 0rem",
                                            }
                                        }}>
                                            <Box p={5}>
                                                <Box>
                                                    <Grid container spacing={2} alignItems="center">
                                                        <Grid item xs={12} sm={1.5}>
                                                            <Box className="bg--teritory d-flex justify-content-center align-items-center circle">
                                                                <img src="/images/audit.svg" className='img-fluid' />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={10.5}>
                                                            <Typography variant='h4' className='mt-4 mt-sm-0'>Rankfast Grade SEO Audit</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography className='text--dark-grey mt-2'>An in-depth customized SEO audit that I’ve used to scale brands to 6,7, and even 8-figure SEO revenues. Deep Insights, no fluff.</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box my={3}>
                                                    <Button className='d-flex align-items-center text--secondary fw-bold px-0' sx={{ textTransform: 'capitalize' }} onClick={() => router.push('/contact-me/')}>Get In Touch <Avatar className='ms-3 bg--teritory' sx={{ height: 32, width: 32 }}><East /></Avatar></Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6} className='border' sx={{
                                            borderRadius: "0rem 1rem 1rem 0rem",
                                            '@media only screen and (max-width: 600px)': {
                                                borderRadius: "0rem 0rem 1rem 1rem"
                                            }
                                        }}>
                                            <Box p={5}>
                                                <Box>
                                                    <Grid container spacing={2} alignItems="center">
                                                        <Grid item xs={12} sm={1.5}>
                                                            <Box className="bg--teritory d-flex justify-content-center align-items-center circle">
                                                                <img src="/images/call.svg" className='img-fluid' />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={10.5}>
                                                            <Typography variant='h4' className='mt-4 mt-sm-0'>1:1 SEO Consultancy call</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography className='text--dark-grey mt-2'>A 30-minute strategy session discussing every strength, weakness, and opportunity with your website. Unlocking a clear vision for the future.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box my={3} className="d-flex align-items-center">
                                                    <Button className='d-flex align-items-center text--secondary fw-bold px-0' sx={{ textTransform: 'capitalize' }} onClick={() => router.push('https://calendly.com/rankfast-seo/call?month=2023-10')}>Schedule a Call <Avatar className='ms-3 bg--teritory' sx={{ height: 32, width: 32 }}><East /></Avatar></Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mt={5}>
                                    <Typography sx={{ color: 'rgba(0,0,0,0.50)' }} align='center'>Want more service? <Link href="https://rankfast.co/services/technical-seo/" legacyBehavior><a style={{ color: 'rgb(0,0,0)' }}>Explore now</a></Link></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Help