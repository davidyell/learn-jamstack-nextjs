import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from '../components/NavBar'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../styles/global.scss'

function MyApp ({ Component, pageProps }) {
  return <>
  <CssBaseline />
  <NavBar />
  <div id="page">
    <Component {...pageProps} />
  </div>
  </>
}

export default MyApp
