import React from 'react'
import { Box, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Circle } from '@mui/icons-material'

const Resource = () => {
    return (
        <>
            <section className='bg--secondary' id="resourceBanner">
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Typography variant="h1" align='center' className='m-0'>Practical SEO Guides<br /><span className='text--teritory'>Now for FREE!</span></Typography>
                                <Typography className='text-white tagline' align='center'>Carefully made, non-generic SEO resources.</Typography>
                                <Box>
                                    <Box className="non-g-resource">
                                        <Grid container spacing={{ xs: 2, sm: 5 }}>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card1">
                                                    <CardContent className=''></CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card2">
                                                    <CardContent>
                                                        <Box>
                                                            <Typography className='text--primary mb-2'>2024</Typography>
                                                            <Typography className='resource-card-title text-white mb-3'>Content Mastery<br /> Blueprint</Typography>
                                                            <Typography className='text-white'>The art and science of crafting clear, unique and useful content.</Typography>
                                                        </Box>
                                                        <Box mt={5}>
                                                            <img src="/images/logo.png" className='img-fluid logo' />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--secondary' id="resource-card3">
                                                    <CardContent>
                                                        <Box>
                                                            <Typography className='text--primary mb-2'>2024</Typography>
                                                            <Typography className='resource-card-title text-white mb-3'>Content Mastery<br /> Blueprint</Typography>
                                                            <Typography className='text-white'>The art and science of crafting clear, unique and useful content.</Typography>
                                                        </Box>
                                                        <Box mt={5}>
                                                            <img src="/images/logo.png" className='img-fluid logo' />
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--primary' id="resource-card4">
                                                    <CardContent className=''>
                                                        <img src="/images/window.svg" alt="" className='img-fluid' />
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg--primary' id="resource-card5">
                                                    <CardContent>
                                                        <Box>
                                                            <img src="/images/window.svg" alt="" className='img-fluid' />
                                                        </Box>
                                                        <Box mt={0.58}>
                                                            <Typography className='resource-card-title' gutterBottom>SEO-Business<br />
                                                                Alignment Tool</Typography>
                                                            <Typography>27 Core questions to determine and establish your SEO-Business Alignment</Typography>
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={4}>
                                                <Card className='resource-card bg-white' id="resource-card6">
                                                    <CardContent className='d-flex justify-content-center align-items-center '>
                                                        <Typography className='resource-card-title'>+ 99 More</Typography>
                                                    </CardContent>
                                                </Card>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className='bg--secondary' id='acrossInternet'>
                <Container maxWidth="xxl">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={11}>
                            <Box py={5}>
                                <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant='h2' className='text-white sectiontitle' align='center'>Unlike Any Resource<br />Hub Across Internet</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>Carefully made, Non-generic Content</Typography>
                                                <Typography className='text-white'>Our library is filled with carefully made, high-quality content to help you sail through SEO.</Typography>
                                                <Box>
                                                    <List>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Guides" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="PDFs" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Tools" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="Spreadsheets" />
                                                        </ListItem>
                                                        <ListItem>
                                                            <ListItemIcon><Circle className='text-white' sx={{ fontSize: "0.3rem" }} /></ListItemIcon>
                                                            <ListItemText primary="And much more" />
                                                        </ListItem>
                                                    </List>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>Practical and Actionable Stuff</Typography>
                                                <Typography className='text-white mb-4'>No one likes a boring lecture.</Typography>
                                                <Typography className='text-white mb-4'>Neither do we.</Typography>
                                                <Typography className='text-white mb-4'>Therefore, all of our Guides, PDFs, and Spreadsheet tools are highly practical and actionable in nature.</Typography>
                                                <Typography className='text-white mb-4'>(For spreadsheet tools, you can make their copies and use them for your own projects)</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6}></Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Card className='acrossCard'>
                                            <CardContent>
                                                <Typography className='across-card-title'>FREE for you, Forever</Typography>
                                                <Typography className='text-white mb-4'>These resources are our way of contributing back to the SEO community.</Typography>
                                                <Typography className='text-white mb-4'>All of them are completely free to use, download, and share.</Typography>
                                                <Typography className='text-white mb-4'>Feel free to recommend them to your peers. And share them to your online audiences.</Typography>
                                            </CardContent>
                                        </Card>
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

export default Resource