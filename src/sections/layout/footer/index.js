import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import menu from '../nav-config'
import Link from 'next/link'
import { Copyright, Instagram, LinkedIn } from '@mui/icons-material'
import { useRouter } from 'next/router'

const Footer = () => {
    const router = useRouter()
    const [slug, setSlug] = useState("");

    useEffect(() => {
        setSlug(router.pathname)
    }, [slug])

    return (
        <>
            <footer style={{ backgroundColor: "#242424" }}>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box sx={{ pt: { xs: 5, sm: 10 }, pb: 5 }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={6} md={3}>
                                        <img src="/images/logo.png" className='img-fluid' alt="logo" style={{ width: "60%" }} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Box>
                                            {/* <Box>
                                                <Typography className='text--primary menuTitle'>MENU</Typography>
                                            </Box> */}
                                            <Box mt={3}>
                                                <ul className='list-unstyled'>
                                                    <li className='nav-item'>
                                                        <Link href="/faq/" legacyBehavior>
                                                            <a className='nav-link text-white'>FAQs</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Box>
                                            {/* <Box>
                                                <Typography className='text--primary menuTitle'>MENU</Typography>
                                            </Box> */}
                                            <Box mt={3}>
                                                <ul className='list-unstyled'>
                                                    <li className='nav-item'>
                                                        <Link href="https://new-redevelopment-rankfast.vercel.app/seo-services/" legacyBehavior>
                                                            <a className='nav-link text-white'>Services</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Box>
                                            <IconButton className='bg--primary me-3'><LinkedIn className='text-white' /></IconButton>
                                            <IconButton className='bg--primary'><Instagram className='text-white' /></IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Divider className='my-3' sx={{ backgroundColor: "#ffffffad" }} />
                                <Typography className='text--light-grey' align='center'>Copyright <Copyright /> {new Date().getFullYear()}. All Rights Reserved.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export default Footer