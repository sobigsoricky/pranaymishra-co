import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'

const GetStarted = () => {

    const router = useRouter()

    return (
        <>
            <section style={{ background: '#b2db313d' }}>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={10} style={{ position: "relative" }}>
                                <Box className="star">
                                    <img src="/images/Star.png" className='img-fluid' />
                                </Box>
                                <Box>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={12} sm={4} md={2.3} order={{ xs: 2, sm: 1 }}>
                                            <Typography className='text--secondary mb-3' sx={{ letterSpacing: "3px" }}>GET STARTED</Typography>
                                            <Typography variant='h4' className='text--secondary' gutterBottom>I Help Companies to Rank Faster</Typography>
                                            <Box className="d-none d-sm-block">
                                                <Button className='bg--teritory text-white button' onClick={() => router.push('/contact-me/')}>CONTACT ME</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={6} className='d-flex justify-content-center flex-column' order={{ xs: 3, sm: 2 }}>
                                            <Typography style={{ color: "rgba(0, 0, 0, 0.64)" }}>Put themselves in the merchant's shoes. It is <br className='d-none d-sm-inline' /> meant to partner on the long run.</Typography>
                                            <Box className="d-block d-sm-none mt-3">
                                                <Button className='bg--teritory text-white button' onClick={() => router.push('/contact-me/')}>CONTACT ME</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4} md={3} order={{ xs: 1, sm: 3 }}>
                                            <img src="/images/new-get.png" className='img-fluid' style={{ width: "100%" }} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default GetStarted