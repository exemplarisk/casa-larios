import React from 'react'
import initStreetView from '../components/helpers/initStreetView'

function Street() {


    return (
        <div>
            {initStreetView("https://www.google.com/maps/embed?pb=!4v1649490963317!6m8!1m7!1s8QgD1Sf6Zpfa1BGDe2S18Q!2m2!1d37.94108383284717!2d-0.74053230303486!3f255.24098!4f0!5f0.7820865974627469")}
        </div>

    )
}

export default Street


   // street apartment https://www.google.com/maps/embed?pb=!4v1649490963317!6m8!1m7!1s8QgD1Sf6Zpfa1BGDe2S18Q!2m2!1d37.94108383284717!2d-0.74053230303486!3f255.24098!4f0!5f0.7820865974627469