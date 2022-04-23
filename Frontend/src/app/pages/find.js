import React from 'react'
import MapView from '../components/MapView'
import { initStreetView } from '../components/helpers/initStreetView'
import Footer from '../components/Footer'


function Find() {

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-indigo-600 sm:text-4xl" style={{ padding: "2rem" }}>FIND US HERE</h1>
            <div style={{ display: 'grid' }}>
                <div id="streetview" style={{ marginBottom: "2vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
                    {initStreetView("https://www.google.com/maps/embed?pb=!4v1649490963317!6m8!1m7!1s8QgD1Sf6Zpfa1BGDe2S18Q!2m2!1d37.94108383284717!2d-0.74053230303486!3f255.24098!4f0!5f0.7820865974627469")}
                </div>
                <div id="mapview" style={{ marginTop: "10vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
                    <MapView />
                </div>
            </div>
            <div style={{ marginTop: "25vh" }}>            
                <Footer />
            </div>
        </div>
    )
}

export default Find