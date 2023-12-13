import { Star } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <section id="testimonial">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Typography sx={{ letterSpacing: "3px" }} className='text--teritory fw-bold mb-3' align='center'>TESTIMONIAL</Typography>
                                <Typography variant='h2' align='center' className='text--secondary'>What My<br /> Clients are Saying</Typography>
                                <Box py={5}>
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
                                                spaceBetween: 20,
                                            },
                                        }}
                                        modules={[Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <Card className='shadow-none border'>
                                                <CardContent>
                                                    <Box>
                                                        <Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" />
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Typography className='text--dark-grey'>As a member of the Byju's Marketing team, I am happy to share our phenomenal experience with Rankfast, a great SEO agency that has been instrumental in propelling our brand to new heights in the digital landscape</Typography>
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={2}>
                                                                <Avatar src="/images/avatar1.png" sx={{ height: 56, width: 56 }} />
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant='h5'>Byju’s</Typography>
                                                                <Typography>The Learning app</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className='shadow-none grow border'>
                                                <CardContent>
                                                    <Box>
                                                        <Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" />
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Typography className='text--dark-grey'>We're happy to share our incredible journey with Rankfast and their game-changing frameworks, EBBA and ADDA.
                                                            Thanks to this unbeatable combination, our Builder.ai platform moved to the top of SERPs</Typography>
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={2}>
                                                                <Avatar src="/images/avatar2.png" sx={{ height: 56, width: 56 }} />
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant='h5'>Builder.ai</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className='shadow-none border'>
                                                <CardContent>
                                                    <Box>
                                                        <Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" /><Star className="gold" />
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Typography className='text--dark-grey'>Rankfast is the reason we're crushing it on Google right now</Typography>
                                                        <Typography>If you want to reach #1 in your niche, they're the ones to go with</Typography>
                                                    </Box>
                                                    <Box mt={2}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={2}>
                                                                <Avatar src="/images/avatar3.png" sx={{ height: 56, width: 56 }} />
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <Typography variant='h5'>Peppercontent</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </SwiperSlide>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Testimonial