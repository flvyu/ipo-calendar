import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { Slide } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%'
  },
  closeIconButton: {
    margin: theme.spacing(0.5)
  }
}))

export default function NotificationBar({ children }) {
  const classes = useStyles()

  const [showBar, setShowBar] = useState(true)

  const handleClose = () => {
    setShowBar(false)
  }

  return (
    <div className={classes.root}>
      {showBar ? (
        <Slide direction={showBar ? 'down' : 'up'} in={showBar} timeout={500}>
          <Box
            bgcolor="primary.main"
            color="text.primary"
            boxShadow={4}
            minHeight={40}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center">
            {children}
            <IconButton onClick={handleClose} className={classes.closeIconButton}>
              <Close />
            </IconButton>
          </Box>
        </Slide>
      ) : null}
    </div>
  )
}
