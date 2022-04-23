import React from 'react'
import { initMaps } from '../components/helpers/initMaps'
import Footer from '../components/Footer'


function Find() {

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-indigo-600 sm:text-4xl" style={{ padding: "2rem" }}>FIND US HERE</h1>
            <div style={{ display: 'grid' }}>
                <div id="streetview" style={{ marginBottom: "2vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
                    {initMaps("https://www.google.com/maps/embed?pb=!4v1649490963317!6m8!1m7!1s8QgD1Sf6Zpfa1BGDe2S18Q!2m2!1d37.94108383284717!2d-0.74053230303486!3f255.24098!4f0!5f0.7820865974627469")}
                </div>
                <div id="mapview" style={{ marginTop: "10vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
                    {initMaps("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.548187631296!2d-0.7429988846775689!3d37.940984279729584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6307ceef5fb59d%3A0x66c4257a68279c08!2sCalle%20Guapiles%2C%207%2C%2003189%20Orihuela%2C%20Alicante%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1625486117153!5m2!1ssv!2sse")}
                </div>
            </div>
            <div style={{ marginTop: "12vh" }}>            
                <Footer />
            </div>
        </div>
    )
}

export default Find