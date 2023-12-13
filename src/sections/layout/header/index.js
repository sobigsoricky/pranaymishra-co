import { Box, Container, Grid, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import menu from '../nav-config'
import { Close, Menu } from '@mui/icons-material'
import { HeaderOffCanvas } from '@/component'
import { useRouter } from 'next/router'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [slug, setSlug] = useState("");
    const router = useRouter()

    useEffect(() => {
        setSlug(router.pathname)
    }, [slug])

    return (
        <>
            <header className='fixed-top bg--secondary py-2'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <nav className='navbar navbar-expand-lg'>
                                <Link href="/" legacyBehavior>
                                    <a className='navbar-brand'>
                                        <img src="/images/logo.png" className='img-fluid logo' />
                                    </a>
                                </Link>
                                <Box sx={{ flexGrow: 1 }} />
                                <button className='header-button btn' onClick={() => router.push('/contact-me')}>Contact</button>
                            </nav>
                        </Grid>
                    </Grid>
                </Container>
            </header>
        </>
    )
}

export default Header