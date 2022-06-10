import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text } from 'react-native'

import { Icon } from '~features/ui/icon'

import styles from './more-row.styles'

interface MoreRowProps {
  title?: string
  onPress: () => void
  flag?: boolean
}

export const MoreRow: VFC<MoreRowProps> = ({ title, onPress, flag }) => {
  const { t } = useTranslation('more-row')

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {!flag && <Icon name={'chevron-right'} size={25} />}
      {flag && <Text style={styles.flag}>{t`language`}</Text>}
    </Pressable>
  )
}
