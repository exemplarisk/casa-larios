import React from 'react'

function MapView() {
    return (
        <div id="mapdiv">
            <div id="position" style={{ border: 0, marginTop: "8px", height: "300px" }} >
                <iframe style={{ width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.548187631296!2d-0.7429988846775689!3d37.940984279729584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6307ceef5fb59d%3A0x66c4257a68279c08!2sCalle%20Guapiles%2C%207%2C%2003189%20Orihuela%2C%20Alicante%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1625486117153!5m2!1ssv!2sse"
                    width="600"
                    height="550"
                    aria-hidden="false"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>
        </div>

    )
}

export default MapView


   // Street https://www.google.com/maps/embed?pb=!4v1649490963317!6m8!1m7!1s8QgD1Sf6Zpfa1BGDe2S18Q!2m2!1d37.94108383284717!2d-0.74053230303486!3f255.24098!4f0!5f0.7820865974627469






    //map https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.548187631296!2d-0.7429988846775689!3d37.940984279729584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6307ceef5fb59d%3A0x66c4257a68279c08!2sCalle%20Guapiles%2C%207%2C%2003189%20Orihuela%2C%20Alicante%2C%20Spanien!5e0!3m2!1ssv!2sse!4v1625486117153!5m2!1ssv!2sse