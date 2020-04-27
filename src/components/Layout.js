import React from 'react'
import PropTypes from 'prop-types'
import StickyFooter from './Footer'
import { makeStyles } from '@material-ui/core/styles'
import { MAX_SCREEN_WIDTH } from '../constants/ui_contants'
import { MuiThemeProvider, CssBaseline, Box, Grid } from '@material-ui/core'
import { DefaultThemeLight } from '../theme/theme'

const useStyles = makeStyles(theme => ({
  main: {
    margin: '0 auto',
    maxWidth: MAX_SCREEN_WIDTH
  },
  sidebarFixed: {
    [theme.breakpoints.up('md')]: {
      position: 'fixed'
    }
  }
}))

export default function Layout({ children, sidebar }) {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={DefaultThemeLight}>
      <CssBaseline />
      <Grid className={classes.main} container component={Box} px={3} py={1} spacing={3}>
        <Grid item xs={12} sm={12} md={!sidebar ? 12 : 11}>
          {children}
        </Grid>
        {sidebar && (
          <Grid item xs={12} sm={12} md={1}>
            <Box className={classes.sidebarFixed}>{sidebar}</Box>
          </Grid>
        )}
      </Grid>
      <StickyFooter />
    </MuiThemeProvider>
  )
}

Layout.propTypes = {
  /**
   * Anything that can be rendered, which is passed to this component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Content to show on the sidebar
   */
  sidebar: PropTypes.node
}
