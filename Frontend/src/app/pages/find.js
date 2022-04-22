import React from 'react'
import MapView from '../components/MapView'
import Street from '../components/Street'
import Footer from '../components/Footer'


function Find() {

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-indigo-600 sm:text-4xl" style={{ padding: "2rem" }}>FIND US HERE</h1>
            <div style={{ display: 'grid' }}>
                <div id="streetview" style={{ marginBottom: "2vh", paddingLeft: "10vw", paddingRight: "10vw" }}>
                    <Street />
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