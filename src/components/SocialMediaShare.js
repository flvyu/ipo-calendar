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
      display="flex"
      flexDirection={isLargeScreen ? 'column' : 'row'}
      justifyContent="center"
      alignItems="center">
      {isLargeScreen && (
        <Typography className={classes.title} color="secondary" variant="body2" gutterBottom>
          <Share size={12} />
        </Typography>
      )}
      {withDefaultSocialIconProps(FacebookIcon, FacebookShareButton)}
      {withDefaultSocialIconProps(LinkedinIcon, LinkedinShareButton)}
      {withDefaultSocialIconProps(RedditIcon, RedditShareButton)}
      {withDefaultSocialIconProps(TwitterIcon, TwitterShareButton)}
    </Box>
  )
}
