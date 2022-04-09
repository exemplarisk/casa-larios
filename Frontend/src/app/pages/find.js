import React from 'react'
import MapView from '../components/MapView'
import Street from '../components/Street'

function Find() {
    return (
        <div>
            //Put Questionmark with sweetarlert2 here and show Feel free to take a look around our neighborhood.
            <div style={{ display: 'grid' }}>
                <div id="mapview" style={{ marginTop: 50 }}>
                    <MapView />
                </div>
                <div id="streetview" style={{ marginBottom: 50, marginTop: "20vh" }}>
                    <Street />
                </div>
            </div>
        </div>
    )
}

export default Find