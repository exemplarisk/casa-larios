import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Contact() {


    return (
        <div>
            <div>
                <ContactForm />
            </div>
            <div style={{ marginTop: "20rem" }}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact