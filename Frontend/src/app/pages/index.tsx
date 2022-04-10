import type { NextPage } from 'next'
import Head from 'next/head'
import swal from 'sweetalert'
import { initStreetView } from '../components/helpers/initStreetView'
import FrontInfo from '../components/FrontInfo'

const goToContact = () => {
  window.location.href = "/contact"
}

const triggerSwal = () => {
  return (
    swal({
      text: 'Feel free to take a look around! If you have any questions regarding anything at all, please contact us!',
      icon: 'info',
      closeOnClickOutside: true,
      buttons: {
        Cancel: true,
        Contact: true,
      },
    }).then((value) => {
      if (value === 'Contact') {
        goToContact();
      }
    })
  )
}

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Casa Larios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            <FrontInfo />
          <div style={{ textAlign: "center" }}>
            <br/>
            <div id="swal">
              <button type="button" onClick={triggerSwal} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">WELCOME</button>
            </div>
            {initStreetView("https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782")}
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home

//Bar-gata bakom huset  "https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782"