import menu from '@/sections/layout/nav-config'
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const HeaderOffCanvas = ({ open, }) => {
    return (
        <>
            <Box p={2} className={`mobMenu ${open ? 'show' : ''}`}>
                <ul className='list-unstyled'>
                    {
                        menu && menu.map(item => <li key={item.id} className='nav-item'>
                            <Link href={item.href} legacyBehavior>
                                <a className='nav-link text--light'>{item.text}</a>
                            </Link>
                        </li>)
                    }
                </ul>
            </Box>
        </>
    )
}

export default HeaderOffCanvas