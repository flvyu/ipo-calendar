import React from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  progress: {
    color: theme.palette.primary.dark,
    animationDuration: '550ms'
  }
}))

export function BoxedProgress({ size, boxProps, ...rest }) {
  const classes = useStyles()

  return (
    <Box display="flex" justifyContent="center" {...boxProps}>
      <CircularProgress size={size} className={classes.progress} thickness={2} {...rest} />
    </Box>
  )
}

BoxedProgress.propTypes = {
  /**
   * Size of the circle
   */
  size: PropTypes.number,

  /**
   * Any props for the box root component
   */
  boxProps: PropTypes.object
}

BoxedProgress.defaultProps = {
  size: 20,
  boxProps: {}
}
