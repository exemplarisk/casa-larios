import type { NextPage } from 'next'
import Head from 'next/head'
import FrontInfo from '../components/FrontInfo'
import Footer from '../components/Footer'
import { goToPage } from '../components/helpers/goToPage'

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
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '8vh' }} id="swal">
              <button
                className="book__btn button--moema button--text-thick button--text-upper button--size-s"
                type="button"
                onClick={() => goToPage('book')}
              >
                BOOK
              </button>
            </div>
          </div>
        </div>
      </main>
      <div style={{ marginTop: '7vh' }}>
        <Footer />
      </div>
    </div>
  )
}

export default Home

//Bar-gata bakom huset  "https://www.google.com/maps/embed?pb=!4v1649494208131!6m8!1m7!1sNqQDp7g6KKGqsGffq5Gwsg!2m2!1d37.93872883876205!2d-0.7421054095092364!3f0!4f0!5f1.1924812503605782"