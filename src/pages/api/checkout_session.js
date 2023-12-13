const stripe = require('stripe')('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');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: 'price_1O4LmJSCj9d5qikCCgNihpid',
                        quantity: 1,
                    },
                ],
                payment_method_types: ['card'],
                mode: 'payment',
                success_url: `${req.headers.origin}/contact-me?session_id={CHECKOUT_SESSION_ID}&success=true`,
                cancel_url: `${req.headers.origin}/contact-me?canceled=true`,
            });

            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}