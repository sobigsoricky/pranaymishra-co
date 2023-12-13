import React, { useEffect } from 'react'
import { Epilogue } from '@next/font/google'
import { Footer, Header } from '@/sections'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css'


const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--primary-font'
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])

  return <>
    <div className={epilogue.variable}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}
