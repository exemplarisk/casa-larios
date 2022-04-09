import React from 'react'
import { initStreetView } from '../components/helpers/initStreetView'
import swal from 'sweetalert'
import Link from "next/link"

function About() {


  const goToContact = () => {
    window.location.href = "/contact"
  }

  const triggerSwal = () => {
    const click = false;
    return (
      swal({
        text: 'Feel free to take a look around! If you have any questions regarding anything at all, please contact us!',
        icon: 'info',
        closeOnClickOutside: true,
        buttons: {
          Contact: 'Contact'
        },
      }).then((value) => {
        if (value === 'Contact') {
          goToContact();
        }
      })
    )
  }


  return (
    <div>
      <div>
        <h1></h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ padding: 10 }}>Bar-gata direkt bakom huset!</h3>
        <div id="swal">
          <button type="button" onClick={triggerSwal} class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">HELP</button>
        </div>
        {initStreetView("https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782")}
      </div>
    </div>
  )
}

export default About

//Bar-gata bakom huset  "https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782"