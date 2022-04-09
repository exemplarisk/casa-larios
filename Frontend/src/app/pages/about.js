import React from 'react'
import { initStreetView } from '../components/helpers/initStreetView'

function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>Bar-gata direkt bakom huset!</h3>
        {initStreetView("https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782")}
      </div>
    </div>
  )
}

export default About

//Bar-gata bakom huset  "https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782"