import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function Banner({ header, subheader }) {
  return (
    <Box>
      <Typography variant="h4">{header}</Typography>
      <Typography>{subheader}</Typography>
    </Box>
  )
}
