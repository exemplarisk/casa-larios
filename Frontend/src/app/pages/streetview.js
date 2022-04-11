import React from 'react'
import { initStreetView } from '../components/helpers/initStreetView'

function Streetview() {
  return (
      <div>
          <div style={{ marginTop: "2vh", textAlign: "center" }}>
              <h1 className='text-6xl font-normal leading-normal text-pink-800'>Take a look around the corner</h1>
          </div>
          {initStreetView("https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782")}  
        </div>
  )
}

export default Streetview