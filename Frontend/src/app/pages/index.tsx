import type { NextPage } from 'next'
import Head from 'next/head'
import swal from 'sweetalert'
import { initStreetView } from '../components/helpers/initStreetView'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { features } from '../utils/data'

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
        Contact: 'Contact'
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
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-gray-900 font-semibold tracking-wide uppercase">Casa-Larios</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                  Torrevieja, Spain
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  2 Bedrooms, 7 beds, 2 Bathrooms, kitchen, living room, 82 sqm
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
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