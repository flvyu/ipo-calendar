import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

export default function Banner({ title, description }) {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography>{description}</Typography>
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
