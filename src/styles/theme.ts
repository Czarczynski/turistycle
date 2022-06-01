import { rgba } from 'polished'

import { COLORS } from '~styles/colors'

export const THEMES = {
  light: {
    primary: COLORS.greenCold,
    secondary: COLORS.greenLight,
    tint: COLORS.purpleDark,
    text: COLORS.offBlack,
    textSecondary: COLORS.darkGray,
    background: COLORS.offWhite,
    borderLight: rgba(COLORS.offWhite, 0.5),
    borderDark: rgba(COLORS.offBlack, 0.5),
    shadowColor: rgba(COLORS.black, 0.2),
  },
}

export const theme = { ...THEMES.light }
