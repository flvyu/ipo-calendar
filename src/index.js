import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider } from '@material-ui/core'

import { DefaultThemeLight } from './theme/theme'
import { CompanyDataPage, Home } from './pages'
import { Router, createHistory, LocationProvider } from '@reach/router'
import ReactGA from 'react-ga'

import React from 'react'
import ReactDOM from 'react-dom'

ReactGA.initialize('UA-77721707-8', {
  debug: process.env.NODE_ENV === 'development',
  titleCase: false,
})

const history = createHistory(window)

const AppToRender = () => {
  history.listen((window) => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    console.log('page=>', window.location.pathname)
  })

  return (
    <React.StrictMode>
      <LocationProvider>
        <MuiThemeProvider theme={DefaultThemeLight}>
          <Router>
            <Home path="/" />
            <CompanyDataPage path="/:companySlug" />
          </Router>
        </MuiThemeProvider>
      </LocationProvider>
    </React.StrictMode>
  )
}
ReactDOM.render(<AppToRender />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
