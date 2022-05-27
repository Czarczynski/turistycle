import { THEMES } from '~styles/theme'

export const DefaultTheme = {
  dark: false,
  colors: {
    primary: THEMES.light.primary,
    background: THEMES.light.background,
    card: THEMES.light.background,
    text: THEMES.light.text,
    border: THEMES.light.borderLight,
    notification: THEMES.light.borderLight,
  },
}

export const DarkTheme = {
  dark: true,
  colors: {
    primary: THEMES.light.primary,
    background: THEMES.light.background,
    card: THEMES.light.background,
    text: THEMES.light.text,
    border: THEMES.light.borderLight,
    notification: THEMES.light.borderLight,
  },
}
