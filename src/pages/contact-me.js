"use client"
import { CheckoutForm, ContactForm } from '@/component'
import { BuildDream } from '@/sections'
import { Box, Container, Grid, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const Contact = () => {
    const [selectedSubject, setSelectedSubject] = useState(1)
    return (
        <>
            <section className='bg--secondary contactBanner'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center" style={{ height: "100%" }}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box py={2}>
                                <Box p={5} component={Paper} sx={{ width: '100%' }}>
                                    <Typography variant='h4' className='text--secondary'>Get In Touch</Typography>
                                    <Box mt={2}>
                                        <FormControl sx={{ width: "100%" }}>
                                            <InputLabel>Subject</InputLabel>
                                            <Select label="Subject" name="subject" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                                                <MenuItem value={1}>
                                                    SEO Audit
                                                </MenuItem>
                                                <MenuItem value={2}>
                                                    SEO Consultation
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box mt={2}>
                                        {
                                            selectedSubject === 1 ? <ContactForm /> : selectedSubject === 2 ? <ContactForm /> : null
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Contact