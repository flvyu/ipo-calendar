import * as serviceWorker from './serviceWorker'

import { CompanyDataPage, Home } from './pages'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

const AppToRender = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" />
        <CompanyDataPage path="/:companySlug" />
      </Router>
    </React.StrictMode>
  )
}
ReactDOM.render(<AppToRender />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
