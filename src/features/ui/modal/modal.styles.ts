import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    marginTop: 'auto',
    width: '100%',
  },
  modalView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: theme.background,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  header: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  closeIcon: {
    color: theme.text,
  },
  title: {
    ...TOPOGRAPHY.label,
    color: theme.text,
  },
  rightRender: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  dismiss: { flex: 1 },
})
