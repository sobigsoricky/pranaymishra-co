import { ContactForm } from '@/component'
import { Email, Explore, LocalPhone } from '@mui/icons-material'
import { Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='sectionMargin bg--secondary'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box sx={{ py: { xs: 5, sm: 15 } }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} >
                                        <Box component={Paper} sx={{
                                            width: "90%",
                                            '@media only screen and (max-width:600px)': {
                                                width: "100%"
                                            }
                                        }}>
                                            <ContactForm />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography sx={{ letterSpacing: "3px" }} className='text--primary'>CONTACT</Typography>
                                        <Typography variant='h2' className='text-white'>Contact Me</Typography>
                                        <Typography className='text--light-grey'>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</Typography>
                                        <Box>
                                            <List>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar className='bg--primary'>
                                                            <Explore />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={<span className='text-white'>2247 Lunetta Street, TX 76301</span>} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar className='bg--primary'>
                                                            <LocalPhone />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={<span className='text-white'>+1 (234) 567-89-00</span>} />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <Avatar className='bg--primary'>
                                                            <Email />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText primary={<span className='text-white'>info@agency.com</span>} />
                                                </ListItem>
                                            </List>
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

export default Contact