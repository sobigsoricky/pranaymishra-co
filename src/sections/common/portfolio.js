import { Box, Button, Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Portfolio = () => {
    const router = useRouter()

    const projects = [
        { id: "project1", name: "Byju's", tag: "Edtech", link: "#", img: "/images/byjus.png" },
        { id: "project2", name: "Peppercontent", tag: "Marketing", link: "#", img: "/images/pepper-content-logo 2.png" },
        { id: "project3", name: "Builder Ai", tag: "Development", link: "#", img: "/images/builderai.png" },
    ]

    return (
        <>
            <section className='sectionMargin bg--secondary'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Box>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item xs={12} sm={10}>
                                            <Typography className='text--primary' sx={{ letterSpacing: "3px" }} gutterBottom>PORTFOLIO</Typography>
                                            <Typography variant='h2' className='text-white'>Clients I’ve helped RankFast</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                            <Button className='button--white-outlined button d-none d-sm-block' onClick={() => router.push('https://rankfast.co/portfolio/')}>Explore More</Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mt={5}>
                                    <Swiper
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        modules={[Autoplay]}
                                        className="mySwiper"
                                    >
                                        {
                                            projects && projects.map(item => <SwiperSlide key={item.id}>
                                                <Card className='projectCard' sx={{ position: 'relative' }}>
                                                    <CardMedia component="img" image={item.img} />
                                                    <CardContent>
                                                        <Box>
                                                            <Chip label={item.tag} className='bg-white' />
                                                            <Typography variant='h3' className='mt-3'>{item.name}</Typography>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </SwiperSlide>)
                                        }
                                    </Swiper>
                                </Box>
                                <Box mt={2} className="d-block d-sm-none">
                                    <Typography align='center'><Link href="https://rankfast.co/portfolio/" legacyBehavior><a className='text-white'>Explore More</a></Link></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Portfolio