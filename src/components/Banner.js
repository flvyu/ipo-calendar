import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold
  },
  description: {
    color: theme.palette.secondary.dark
  }
}))
export default function Banner({ title, description }) {
  const classes = useStyles()

  return (
    <Box
      p={2}
      mb={4}
      height={300}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Box mb={2}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
      </Box>
      <Typography className={classes.description}>{description}</Typography>
    </Box>
  )
}

Banner.propTypes = {
  /**
   * Title of the banner
   */
  title: PropTypes.node,

  /**
   * Description for the banner
   */
  description: PropTypes.string
}

Banner.defaultProps = {
  description: ''
}