import { BuildDream, Contact, GetStarted, Help, Hero, Portfolio, Professional, Testimonial } from '@/sections'
import BusinessIdentity from '@/sections/common/business-identity'
import React from 'react'

const PranayMishra = () => {
    return (
        <>
            <Hero img="/images/pranay-banner.png" name="Pranay Mishra" />
            <Help />
            <Portfolio />
            {/* <Professional /> */}
            <BusinessIdentity />
            {/* <GetStarted /> */}
            {/* <Testimonial /> */}
            {/* <Contact /> */}
            {/* <BuildDream /> */}
        </>
    )
}

export default PranayMishra