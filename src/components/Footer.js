/**
 * Sticky Footer
 *
 * Author    Flavio Andrade
 * Copyright 2020 CodeFogo
 *
 * @format
 */

import { Box, Link, Typography } from '@material-ui/core'

import { MAX_SCREEN_WIDTH } from '../constants/ui_contants'
import React from 'react'
import grey from '@material-ui/core/colors/grey'
import { makeStyles } from '@material-ui/core/styles'

const textStyles = makeStyles({
  textColor: '#fff'
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    backgroundColor: grey[100]
  },
  madeBy: {
    fontWeight: theme.typography.fontWeightBold
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200]
  }
}))

function Copyright() {
  const classes = textStyles()

  return (
    <Typography variant="body2" className={classes.textColor}>
      {`Copyright © ${new Date().getFullYear()}`}
    </Typography>
  )
}

export default function StickyFooter() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box mt={2} display="flex" justifyContent="center">
        <Box
          mt={4}
          mb={4}
          width="80%"
          maxWidth={MAX_SCREEN_WIDTH}
          display="flex"
          justifyContent="center"
          flexDirection="column">
          <Typography className={classes.madeBy} align="center">
            Made by{' '}
            <Link href="https://flavioander.com/blog/" underline="none">
              {' '}
              Flavio Ander
            </Link>
          </Typography>
        </Box>
      </Box>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  )
}
