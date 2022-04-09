import React from 'react'

function Contact() {

    const mailtoHref = "mailto:jonatan_schultz@hotmail.com";

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: "column", textAlign: "center" }}>
                <h1 style={{ fontSize: "36px" }}>Contact</h1>
                <div>
                    <div style={{ backgroundColor: "" }}>
                        <button type="button" class="text-white bg-gradient-to-r
                            from-purple-500
                            via-purple-600
                            to-purple-700
                            hover:bg-gradient-to-br
                            focus:ring-4
                            focus:outline-none
                            focus:ring-purple-300
                            dark:focus:ring-purple-800
                            font-medium rounded-lg
                            text-sm px-5 py-2.5
                            text-center mr-2 mb-2">
                            <a href={mailtoHref} className="btn btn-danger">
                                Send email
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact