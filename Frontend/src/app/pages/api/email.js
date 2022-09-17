// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SMTPClient } from 'emailjs';


export default function handler(req, res) {

    const { email } = req.body;
    const { name } = req.body;
    const { message } = req.body;
    const client = new SMTPClient({
        user: process.env.mail,
        password: process.env.password,
        host: 'smtp.gmail.com',
        ssl: true
    });
    try {
        client.send(
            {
                text: message,
                from: email,
                to: "jonatan.schultz@hotmail.com",
                subject: name,
            }
        )
    }
    catch (e) {
        res.status(400).end(JSON.stringify({ message: "Error" }))
        return;
    }

    res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}