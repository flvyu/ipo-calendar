import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { MAX_SCREEN_WIDTH } from '../constants/ui_contants'
import { MuiThemeProvider, CssBaseline, Box } from '@material-ui/core'
import { DefaultThemeLight } from '../theme/theme'

const useStyles = makeStyles({
  main: {
    margin: '0 auto',
    maxWidth: MAX_SCREEN_WIDTH
  }
})

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={DefaultThemeLight}>
      <CssBaseline />
      <Box className={classes.main} px={3} py={3}>
        {children}
      </Box>
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  /**
   * Anything that can be rendered, which is passed to this component.
   */
  children: PropTypes.node
}
