import * as serviceWorker from './serviceWorker'

import { Helmet } from 'react-helmet'
import Home from './pages/Home'
import React from 'react'
import ReactDOM from 'react-dom'

const AppToRender = () => {
  const year = new Date().getFullYear()

  return (
    <React.StrictMode>
      <Helmet>
        <title>{`Quickly find Upcoming and Recent IPOs | ${year} IPO Calendar`}</title>
      </Helmet>
      <Home />
    </React.StrictMode>
  )
}
ReactDOM.render(<AppToRender />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
