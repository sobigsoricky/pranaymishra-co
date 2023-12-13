import { mailOptions, transporter } from "@/config/nodemailer"

export default async function handler(req, res) {
    const { data } = JSON.parse(req.body)

    const { email, subject, website, message } = data

    if (req.method !== "POST") {
        if (!email || !subject || !website || !message) {
            res.status(400).json({ message: "Bad request" })
        }
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `Request for ${subject}`,
            html: `<div>
        <p>Email: ${email}</p>
        <p>Website: ${website}</p>
        <p>Message: ${message}</p>
        </div>`
        })

        res.status(200).json({ success: true })

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}