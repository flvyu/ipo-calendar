import { Box, CssBaseline, Grid, MuiThemeProvider } from '@material-ui/core'

import { DefaultThemeLight } from '../theme/theme'
import { MAX_SCREEN_WIDTH } from '../constants/ui_contants'
import PropTypes from 'prop-types'
import React from 'react'
import StickyFooter from './Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    minHeight: '100vh'
  },
  main: {
    margin: '0 auto',
    maxWidth: MAX_SCREEN_WIDTH
  },
  wrap: {
    paddingBottom: 80
  },
  sidebarFixed: {
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      marginLeft: theme.spacing(3)
    }
  }
}))

export default function Layout({ children, sidebar, notificationBar }) {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={DefaultThemeLight}>
      <CssBaseline />
      <div className={classes.root}>
        {notificationBar}
        <div className={classes.wrap}>
          <Grid className={classes.main} container component={Box} px={3} py={1}>
            <Grid item xs={12} sm={12} md={!sidebar ? 12 : 11}>
              {children}
            </Grid>
            {sidebar && (
              <Grid item xs={12} sm={12} md={1}>
                <Box className={classes.sidebarFixed}>{sidebar}</Box>
              </Grid>
            )}
          </Grid>
        </div>
        <StickyFooter />
      </div>
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
  sidebar: PropTypes.node,

  /**
   * A notification bar to show at the top of the screen.
   */
  notificationBar: PropTypes.node
}
