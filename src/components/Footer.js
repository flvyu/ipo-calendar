import { Link, Typography } from '@material-ui/core'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const textStyles = makeStyles({
  textColor: '#fff'
})

const useStyles = makeStyles((theme) => ({
  madeBy: {
    fontWeight: theme.typography.fontWeightBold
  },
  footer: {
    position: 'absolute',
    height: 80,
    bottom: 0,
    width: '100%',
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
    <footer className={classes.footer}>
      <Typography className={classes.madeBy} align="center">
        Made by{' '}
        <Link href="https://flavioander.com/blog/" underline="none">
          {' '}
          Flavio Ander
        </Link>
      </Typography>
      <Copyright />
    </footer>
  )
}
