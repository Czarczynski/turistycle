import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'

import styles from './card-long.styles'

interface CardLongProps {}

export const CardLong: VFC<CardLongProps> = () => {
  const { t } = useTranslation('card-long')

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{t`welcome`}</Text>
      <Text style={styles.cardBody}>{t`ready-for-cycling`}</Text>
      <Text>{t`take-a-look`}</Text>
      <View style={styles.iconWrapper}>
        <Icon name={'man'} size={200} />
      </View>
    </View>
  )
}
