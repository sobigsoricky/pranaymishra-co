import React, { useState } from 'react'
import { Box, Button, TextField, } from '@mui/material'


const ContactForm = () => {
    const [data, setData] = useState({ email: "", website: "", message: "" })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSendMail = async (e) => {
        e.preventDefault()
        const formdata = { ...data, subject: "SEO Consultation" }
        try {
            const response = await fetch('/api/send-mail', { method: "POST", body: JSON.stringify({ data: formdata }) })
            const { success } = await response.json();
            if (success) {
                setData({ email: "", website: "", message: "" })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box id="contactForm">
                <Box mt={3}>
                    <form onSubmit={handleSendMail} method='POST'>
                        <Box mb={2}>
                            <TextField type="email" variant='outlined' name="email" label="Email" fullWidth value={data.email} onChange={handleOnChange} required />
                        </Box>
                        <Box mb={2}>
                            <TextField type="url" variant='outlined' label="Website" fullWidth name="website" value={data.website} onChange={handleOnChange} required />
                        </Box>
                        <Box mb={2}>
                            <TextField type="text" multiline rows={4} variant='outlined' label="Message" name="message" value={data.message} onChange={handleOnChange} fullWidth required />
                        </Box>
                        <Box mb={2} className="d-flex justify-content-end">
                            <Button type="submit" className="button--teritory-contained button">Submit Now</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default ContactForm