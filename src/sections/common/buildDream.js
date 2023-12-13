import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const BuildDream = () => {
    return (
        <>
            <section className='sectionMargin'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                                        <Typography sx={{ letterSpacing: "3px" }} className='text--teritory fw-bold mb-3'>Pranav Bajaj</Typography>
                                        <Typography variant='h2' className='text--secondary' gutterBottom>Help To Build Your Dream Project</Typography>
                                        <Typography style={{ color: "rgba(57, 20, 0, 0.64)" }}>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                                        <img src="/images/dream.png" className='img-fluid' />
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

export default BuildDream