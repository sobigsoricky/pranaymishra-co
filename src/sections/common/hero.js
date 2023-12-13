import React from 'react'
import { useRouter } from 'next/router'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const Hero = ({ img, name }) => {
    const router = useRouter()
    return (
        <>
            <section id='hero'>
                <Container maxWidth="xxl" sx={{ height: "100%" }}>
                    <Grid container justifyContent="center" sx={{ height: "100%" }}>
                        <Grid item xs={12} sm={11} className='d-flex align-items-center'>
                            <Box py={2}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6.5} order={{ xs: 2, sm: 1 }}>
                                        <Typography className='text--primary' gutterBottom sx={{ letterSpacing: "3px" }}>{name}</Typography>
                                        <Typography variant='h1' className='text--light my-3'>Innovate, Transform, and Rankfast</Typography>
                                        <Typography className='text--light-grey'>Want to build an unbeatable SaaS traffic base? Let’s dig together.
                                            Get your in-depth SaaS SEO Audit + Consultation (worth $500) for just $1 today.</Typography>
                                        <Box mt={3}>
                                            <Button className='button--primary-contained button' onClick={() => router.push('/contact-me/')} >Get the audit for $1</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={5.5} order={{ xs: 1, sm: 2 }} className='d-flex justify-content-center'>
                                        <img src={img} className='img-fluid' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container >
            </section >
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box id="stat">
                                <Grid container>
                                    <Grid item xs={12} sm={6}>
                                        <Box p={4} className="border bg-white" sx={{ borderRadius: "1rem 0 0 1rem", '@media only screen and (max-width: 600px)': { borderRadius: "1rem 1rem 0 0" } }}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={3} sm={1.5}>
                                                    <Box className="circle bg--teritory d-flex justify-content-center align-items-center">
                                                        <img src="/images/cal.png" style={{ width: "45%" }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={9} sm={10.5}>
                                                    <Typography variant='h4' className='text--secondary'>5+</Typography>
                                                    <Typography sx={{ color: "#391400" }}>Years of experience</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box p={4} className="border bg-white" sx={{ borderRadius: "0rem 1rem 1rem 0rem", '@media only screen and (max-width: 600px)': { borderRadius: "0rem 0rem 1rem 1rem" } }}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={3} sm={1.5}>
                                                    <Box className="circle bg--teritory d-flex justify-content-center align-items-center">
                                                        <img src="/images/cal.png" style={{ width: "45%" }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={9} sm={10.5}>
                                                    <Typography variant='h4' className='text--secondary'>100+</Typography>
                                                    <Typography sx={{ color: "#391400" }}>Projects Done</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
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

export default Hero