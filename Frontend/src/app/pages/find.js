import React from 'react'
import MapView from '../components/MapView'
import Street from '../components/Street'


function Find() {

/*     const triggerSwal = () => {
        return(
            Swal.fire({
                title: 'Feel free to take a look around our neighborhood!',
                text: 'If you have any questions about the places in the images, please contact us!'
                    + <Link href="/contact" />,
                icon: 'info',
                confirmButtonText: 'GOT IT!'
            })
        )
    }
 */
    return (
        <div>
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