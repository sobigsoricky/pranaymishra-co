import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Professional = () => {
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <img src="/images/proffessional.png" className='img-fluid' />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography sx={{ letterSpacing: "3px" }} className='text--teritory fw-bold mb-3'>PRANAV BAJAJ</Typography>
                                            <Typography variant='h2' className='text--secondary' gutterBottom>Professional SEO  Strategist</Typography>
                                            <Typography sx={{ color: "#391400" }} gutterBottom className='provide'>Provides a full service range</Typography>
                                            <Typography className='text--dark-grey'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</Typography>
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

export default Professional