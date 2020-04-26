/**
 * Sticky Footer
 *
 * Author    Flavio Andrade
 * Copyright 2020 CodeFogo
 *
 * @format
 */

import React from 'react'
import grey from '@material-ui/core/colors/grey'
import { Link, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const textStyles = makeStyles({
  textColor: '#fff'
})

const useStyles = makeStyles(theme => ({
  footerSectionTitle: {
    fontWeight: 'bold'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    backgroundColor: grey[100]
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
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
      <Link href="http://flavioander.com/" underline="none">
        {' '}Flavio Andrade
      </Link>
    </Typography>
  )
}

export default function StickyFooter() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box mt={2}>
        <Box display="flex" flexWrap="wrap" justifyContent="flex-start" className={classes.main}>
          <p>Hello World</p>
        </Box>
      </Box>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  )
}
