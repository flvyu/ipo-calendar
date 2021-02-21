import { createMuiTheme } from '@material-ui/core'

export const PRIMARY = '#00e676'
export const PRIMARY_LIGHT = '#69f0ae'
export const PRIMARY_DARK = '#00c853'

export const SECONDARY = '#cfd8dc'
export const SECONDARY_LIGHT = '#ffffff'
export const SECONDARY_DARK = '#9ea7aa'

export const WHITE = '#ffffff'
export const BLACK = '#000000'

const overrides = {
  MuiButton: {
    root: {
      textTransform: 'capitalize',
      '&:focus': {
        outline: 'none',
        textDecoration: 'none',
      },
    },
  },
}
export const DefaultThemeLight = createMuiTheme({
  palette: {
    primary: {
      light: PRIMARY_LIGHT,
      main: PRIMARY,
      dark: PRIMARY_DARK,
      contrastText: BLACK,
    },
    secondary: {
      light: SECONDARY_LIGHT,
      main: SECONDARY,
      dark: SECONDARY_DARK,
      contrastText: BLACK,
    },
  },
  overrides: {
    ...overrides,
  },
})
