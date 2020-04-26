import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery'
import React from 'react'
import { Box } from '@material-ui/core'
import { Share } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton
} from 'react-share'
import { makeStyles } from '@material-ui/core/styles'
import { PROD_SITE_URL } from '../constants/content_constants'

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.secondary.dark
  }
}))

const withDefaultSocialIconProps = (IconComponent, ButtonComponent, buttonProps) => (
  <Box m={1}>
    <ButtonComponent {...buttonProps}>
      <IconComponent size={32} round={true} />
    </ButtonComponent>
  </Box>
)

export default function SocialMediaShare() {
  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))
  const classes = useStyles()

  return (
    <Box
      mt={4}
      display="flex"
      flexDirection={isLargeScreen ? 'column' : 'row'}
      justifyContent="center">
      {isLargeScreen && (
        <Typography className={classes.title} color="secondary" variant="body2" gutterBottom>
          Share <Share color="primary" style={{ fontSize: 14 }} />
        </Typography>
      )}
      {withDefaultSocialIconProps(FacebookIcon, FacebookShareButton, { url: PROD_SITE_URL })}
      {withDefaultSocialIconProps(LinkedinIcon, LinkedinShareButton, { url: PROD_SITE_URL })}
      {withDefaultSocialIconProps(RedditIcon, RedditShareButton, { url: PROD_SITE_URL })}
      {withDefaultSocialIconProps(TwitterIcon, TwitterShareButton, { url: PROD_SITE_URL })}
    </Box>
  )
}
