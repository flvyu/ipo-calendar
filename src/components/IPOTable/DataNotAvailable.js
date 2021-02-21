import { Box, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery'
import PropTypes from 'prop-types'
import React from 'react'

export default function DataNotAvailable({ message }) {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'))
  return (
    <Box
      width={isLargeScreen ? '40%' : '100%'}
      p={4}
      mt={2}
      borderRadius={10}
      boxShadow={2}
    >
      <Typography align="center">{message}</Typography>
    </Box>
  )
}

DataNotAvailable.propTypes = {
  message: PropTypes.string,
}

DataNotAvailable.defaultProps = {
  message:
    'No data available for the current date range. Try selecting new dates.',
}
