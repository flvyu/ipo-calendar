import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `2px solid ${theme.palette.primary.light}`
  },
  title: {
    color: theme.palette.primary.main,
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
      height={160}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      <Box mb={2}>
        <Typography align="center" className={classes.title} variant="h4" component="h1">
          {title}
        </Typography>
      </Box>
      <Typography align="center" className={classes.description} component="h2">
        {description}
      </Typography>
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
  title: 'Ipo Calendar',
  description: ''
}
