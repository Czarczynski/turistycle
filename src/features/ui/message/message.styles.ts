import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  containerLeft: {
    alignItems: 'flex-start',
  },
  containerRight: {
    alignItems: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageLeft: {
    borderTopLeftRadius: 0,
    backgroundColor: rgba(theme.borderDark, 0.1),
  },
  messageRight: {
    borderTopRightRadius: 0,
    backgroundColor: rgba(theme.tint, 0.2),
  },
  messageEmoji: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  timeContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.borderDark,
    marginHorizontal: 10,
  },
  timeValue: {
    ...TOPOGRAPHY.paragraphXXS,
    color: theme.borderDark,
  },
  textEmoji: {
    fontSize: 50,
    lineHeight: 60,
  },
})
