import React from 'react'
import { Box } from '@material-ui/core'

export default function ProductHuntBadge() {
  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center">
      <a
        href="https://www.producthunt.com/posts/ipo-calendar?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ipo-calendar"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=195784&theme=light"
          alt="IPO Calendar - Stay up to date with upcoming IPOs | Product Hunt Embed"
          style={{ width: 250, height: 54 }}
          width="250px"
          height="54px"
        />
      </a>
    </Box>
  )
}
