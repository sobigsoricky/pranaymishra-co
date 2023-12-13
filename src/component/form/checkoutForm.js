import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, TextField } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';

loadStripe('pk_live_51O0KboSCj9d5qikCkJeoCgX6ZQ3kSOlXSHzkSGu2nAPzaCYNKPpBtmlPtZLVNpICuXWHwo0ethS113Uf4wxJWYpd0088VRXp2v');

const CheckoutForm = () => {
    const router = useRouter();
    const { success, canceled } = router.query;
    const [data, setData] = useState({ email: '', website: '', message: '' });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('checkoutFormData', JSON.stringify(data));

        e.currentTarget.submit();
    };

    const handleSendMail = async (e) => {
        const storedData = localStorage.getItem('checkoutFormData');
        if (storedData) {
            const formData = JSON.parse(storedData);
            const data = { ...formData, subject: "SEO Audit" }
            try {
                const response = await fetch('/api/send-mail', { method: "POST", body: JSON.stringify({ data }) })
                const { success } = await response.json();
                if (success) {
                    localStorage.removeItem('checkoutFormData');
                    setData({ email: "", website: "", message: "" })
                    alert('Request sent.')
                }
            } catch (error) {
                console.log(error)
                localStorage.removeItem('checkoutFormData');
                alert('Request failed. Please try again.')
            }
        }
    }

    useEffect(() => {
        if (success !== undefined || canceled !== undefined) {
            if (success) {
                console.log('Order placed! You will receive an email confirmation.');
                handleSendMail()
            }

            if (canceled) {
                console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
            }
        }
    }, [success, canceled, data]);

    return (
        <>
            <Box id="contactForm">
                <Box mt={3}>
                    <form
                        action="/api/checkout_session"
                        method="POST"
                        onSubmit={handleFormSubmit}
                    >
                        <Box mb={2}>
                            <TextField
                                type="email"
                                variant="outlined"
                                name="email"
                                label="Email"
                                fullWidth
                                value={data.email}
                                onChange={handleOnChange}
                                required
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                type="url"
                                variant="outlined"
                                label="Website"
                                fullWidth
                                name="website"
                                value={data.website}
                                onChange={handleOnChange}
                                required
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                type="text"
                                multiline
                                rows={4}
                                variant="outlined"
                                label="Message"
                                name="message"
                                value={data.message}
                                onChange={handleOnChange}
                                fullWidth
                                required
                            />
                        </Box>
                        <Box mb={2} className="d-flex justify-content-end">
                            <Button
                                type="submit"
                                className="button--teritory-contained button"
                            >
                                Submit Now
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default CheckoutForm;
